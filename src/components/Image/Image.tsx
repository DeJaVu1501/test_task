import React, { FC, useCallback } from "react";
import { Circle, Layer, Stage } from "react-konva";
import { CirclePosition } from "../../types/Circle";

import Konva from "konva";
import KonvaEventObject = Konva.KonvaEventObject;

interface Props {
  circle: CirclePosition;
  setPosition: React.Dispatch<React.SetStateAction<CirclePosition>>;
}

export const Image: FC<Props> = ({ circle, setPosition }) => {
  const updatePosition = useCallback((event: KonvaEventObject<DragEvent>) => {
    const xAxis = event.target.x();
    const yAxis = event.target.y();

    if (xAxis < 0 || yAxis < 0) {
      return;
    }

    setPosition({
      x: xAxis,
      y: yAxis,
    })
  }, []);


  return (
    <div className="bg-slate-200 flex justify-center items-center py-10 w-2/3 rounded-md max-h-[320px]">
      <div className="w-[520px] h-[260px] relative bg-material bg-clip">
        <Stage width={520} height={260}>
          <Layer>
            <Circle
              onDragMove={(e) => updatePosition(e)}
              onDragEnd={(e) => updatePosition(e)}
              draggable
              stroke="red"
              x={circle.x}
              y={circle.y}
              radius={15}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};