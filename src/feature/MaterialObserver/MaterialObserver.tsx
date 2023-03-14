import { FC, useState } from "react";
import { CircleController, Image } from "../../components";
import { CirclePosition } from "../../types/Circle";

export const MaterialObserver: FC = () => {
  const [circlePosition, setCirclePosition] = useState<CirclePosition>({ x: 25, y: 25 });

  return (
    <div className="flex gap-5 w-full h-full">
      <Image circle={circlePosition} setPosition={setCirclePosition} />
      <CircleController circle={circlePosition} setPosition={setCirclePosition} />
    </div>
  );
};