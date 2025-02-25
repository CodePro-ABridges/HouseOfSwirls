import QRCodeGenerator from "./components/QRCodeGenerator";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          QR Code Generator
        </h1>
        <QRCodeGenerator />
      </div>
    </div>
  );
}

export default App;
