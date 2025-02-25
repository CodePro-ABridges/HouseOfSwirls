# QR Code Generator

A simple and responsive QR code generator built with Vite, React, TypeScript, and Tailwind CSS. This application allows users to input a URL and generate a downloadable QR code.

## Features

- Generate QR codes from URLs
- Real-time QR code updates as you type
- Input validation for URLs
- Download QR codes as PNG images
- Responsive design with Tailwind CSS

## Test if you dare :)

![qrcode](https://github.com/user-attachments/assets/c981960e-d7f9-43fa-9806-92295243a3df)

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository or download the source code
2. Navigate to the project directory

```bash
cd qr-code-generator
```

3. Install the dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Building for Production

To build the application for production, run:

```bash
npm run build
```

The built files will be in the `dist` directory, which you can deploy to any static file hosting service.

## Project Structure

```
qr-code-generator/
├── public/
├── src/
│   ├── components/
│   │   └── QRCodeGenerator.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

You can customize the QR code appearance by modifying the options passed to the QRCode library in `QRCodeGenerator.tsx`. Options include:

- `width`: The width of the QR code (default: 240px)
- `margin`: The margin around the QR code
- `color.dark`: The color of the QR code data (default: black)
- `color.light`: The background color (default: white)
- `errorCorrectionLevel`: The error correction level ('L', 'M', 'Q', 'H')

## Technologies Used

- [Vite](https://vitejs.dev/) - Frontend build tool
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [qrcode](https://www.npmjs.com/package/qrcode) - QR code generation library

## License

MIT
