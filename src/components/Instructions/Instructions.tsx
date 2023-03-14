import data from "./data.json";
import React from "react";

interface Command {
  name: string;
  description: string;
  example: string;
}

const Instructions = () => {
  const Actions = data["Actions"] as Command[];
  const Instructions = data["Logics"] as Command[];
  return (
    <div className="max-h-[36rem] max-w-md overflow-y-auto border-2 border-gray-800 p-4 text-justify">
      <h1 className="text-4xl font-bold">Instructiones</h1>
      <h3 className="text-2xl font-bold">Acctions</h3>
      <p className="text-md">
        {Actions.map((action) => (
          <span key={action["name"]}>
            <code className="rounded-lg bg-slate-300 p-1 font-bold">
              {action["name"]}
            </code>{" "}
            - {action["description"]}.
            <br />
            <span className="font-bold">Example:</span>{" "}
            <code className="rounded-lg bg-slate-300 p-1">
              {action["example"]}
            </code>
            <br />
          </span>
        ))}
      </p>
      <h3 className="text-2xl font-bold">Instructions</h3>
      <p className="text-md">
        {Instructions.map((instruction) => (
          <span key={instruction["name"]}>
            <span className="font-bold">
              <code className="rounded-lg bg-slate-300 p-1 font-bold">
                {instruction["name"]}
              </code>
            </span>{" "}
            - {instruction["description"]}
            .
            <br />
            <span className="font-bold">Example:</span>
            <code className="rounded-lg bg-slate-300 p-1">
              {/* respetar los \n */}
              {instruction["example"].split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </code>
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default Instructions;
