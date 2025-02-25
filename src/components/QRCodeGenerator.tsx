import { useState, useEffect, useRef } from "react";
import "../index.css";
import QRCode from "qrcode";

const QRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!url) {
      setError("Please enter a url");
      setQrCodeDataUrl(null);
      return;
    }

    try {
      new URL(url);
      setError(null);

      if (canvasRef.current) {
        QRCode.toCanvas(canvasRef.current, url, { width: 240 }, (err) => {
          if (err) {
            console.error("Error generating QR code: ", err);
            setError("Failed to generate QR code");
            setQrCodeDataUrl(null);
          } else {
            //Race Condition need attempting timeout.
            setTimeout(() => {
              if (canvasRef.current) {
                setQrCodeDataUrl(
                  canvasRef.current?.toDataURL("image/png") || null,
                );
                console.log("QR Code data URL generated successfully.");
              }
            }, 100);
            //Previous iteration was having issues. Running into Race Condition.
            //Keeping for context.
            /*  setQrCodeDataUrl(canvasRef.current?.toDataURL("image/png") || null); */
          }
        });
      }
    } catch (err) {
      setError("Please enter a valid URL (including http:// or https://)");
    }
  }, [url]);

  //Function to download QR Code
  const downloadQRCode = () => {
    if (qrCodeDataUrl) {
      const link = document.createElement("a");
      link.href = qrCodeDataUrl;
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <label
          htmlFor="url-input"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Enter URL
        </label>
        <input
          id="url-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>

      <div className="flex flex-col items-center justify-center mt-6">
        <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
          <canvas ref={canvasRef} className="mx-auto"></canvas>
        </div>

        <button
          onClick={downloadQRCode}
          disabled={!qrCodeDataUrl}
          className={`mt-4 px-4 py-2 rounded-md transition ${
            qrCodeDataUrl
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Download QR Code
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
