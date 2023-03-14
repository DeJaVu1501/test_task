import React, { FC, useCallback } from "react";
import { CirclePosition } from "../../types/Circle";
import { Input } from "../UI";
import { MaterialsList } from "./MaterialsList";

interface Props {
  circle: CirclePosition;
  setPosition: React.Dispatch<React.SetStateAction<CirclePosition>>;
}

export const CircleController: FC<Props> = ({ circle, setPosition }) => {
  const updateAxis = useCallback((event: React.ChangeEvent<HTMLInputElement>, axis: "x" | "y") => {
    const position = +event.target.value;
    if (position < 0) {
      return;
    }

    setPosition(prevState => ({ ...prevState, [axis]: position }));
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-slate-200 w-1/3 rounded-md px-8 py-4">
      <h2 className="text-2xl font-medium">Distance for Circle</h2>
      <div className="flex justify-between items-center gap-2">
        <Input
          label="X - axis"
          onChange={e => updateAxis(e, "x")}
          value={circle.x}
          type="number"
          className="px-3 text-xl w-1/2 h-12 shadow-2xl border-black border-2 rounded w-full shadow-2xl"
        />
        <Input
          label="Y - axis"
          onChange={e => updateAxis(e, "y")}
          value={circle.y}
          type="number"
          className="px-3 text-xl w-1/2 h-12 shadow-2xl border-black border-2 rounded  w-full shadow-2xl"
        />
      </div>
      <MaterialsList />
    </div>
  );
};