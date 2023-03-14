import React from "react";

interface Props {
  svgLiteral?: string;
}

const ImageProcessor = ({ svgLiteral }: Props) => {
  const svg = svgLiteral?.replace(/"/g, "'");
  return (
    <div className="h-3xl flex max-h-screen w-6/12 border-2 border-gray-800 p-4 text-justify">
      {svg ? (
        <div className="w-3xl h-4xl">
          <img src={`data:image/svg+xml,${svg}`} />
        </div>
      ) : (
        <div className="w-3xl h-4xl bg-white">
          <p></p>
        </div>
      )}
    </div>
  );
};

export default ImageProcessor;
