import { useState } from "react";

interface Props {
  svgLiteral?: string;
}

const ImageProcessor = ({ svgLiteral }: Props) => {
  //const svg = svgLiteral?.replace(/"/g, "'");
  //   const [svg, setSvg] = useState<string | undefined>(
  //     svgLiteral?.replace(/"/g, "'")
  //   );
  console.log(svgLiteral);
  return (
    <div className="h-3xl flex max-h-screen w-6/12 border-2 border-gray-800 p-4 text-justify">
      {svgLiteral ? (
        <div className="w-3xl h-4xl">
          {/* Dangerous html */}
          <div dangerouslySetInnerHTML={{ __html: svgLiteral }} />
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
