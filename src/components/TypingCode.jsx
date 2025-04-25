import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypingCode() {

  const lineNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="bg-richblack-800 border-[1px] border-richblack-50 rounded-md overflow-hidden shadow-lg">
      <div className="flex text-sm">
        <div
          aria-hidden="true"
          className="bg-gray-800/50 text-gray-500 p-4 pr-3 text-right select-none font-mono"
        >
          {lineNumbers.map((lineNumber) => (
            <div key={lineNumber} className="min-h-[2em] text-richblack-50">
              {lineNumber}.
            </div>
          ))}
        </div>

        <div className="flex-grow p-4 overflow-x-auto">
          <pre className="font-mono  text-yellow-50">
            <TypeAnimation
             style={{ whiteSpace: 'pre-line', width:'486px', display: 'block' }}
              sequence={[
                `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, 
    initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML page.</p>
</body>
</html>`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                1,
                "",
              ]}
              repeat={Infinity}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}
