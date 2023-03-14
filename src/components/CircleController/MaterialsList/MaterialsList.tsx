import React, { FC, memo, useCallback, useState } from "react";
import { materials } from "../../../utils/mocks/materials";
import { MaterialItem } from "./MaterialItem";

export const MaterialsList: FC = memo(() => {
  const [selectedMaterial, setSelectedMaterial] = useState<number>(1);

  const selectMaterial = useCallback((id: number) => {
    if (selectedMaterial === id) {
      return;
    }

    setSelectedMaterial(id);
  }, [selectedMaterial]);

  return (
    <div>
      <h2 className="text-2xl font-medium">Material Selection</h2>
      <ul className="flex flex-col gap-4 mt-6">
        {materials.map(material => (
          <MaterialItem
            material={material}
            key={material.id}
            isSelected={material.id === selectedMaterial}
            onSelect={selectMaterial}
          />
        ))}
      </ul>
    </div>
  );
});