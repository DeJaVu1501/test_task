import { motion } from "framer-motion";
import React, { FC } from "react";
import { Material } from "../../../types/Material";
import correctIcon from "../../../assets/correct-mark.svg";

interface Props {
  isSelected: boolean;
  material: Material;
  onSelect: Function;
}

export const MaterialItem: FC<Props> = ({ isSelected, material, onSelect }) => {
  return (
    <motion.li
      layout
      className="flex rounded bg-white p-2 items-center gap-4 cursor-pointer shadow-2xl"
      onClick={() => onSelect(material.id)}
    >
      {isSelected
        ? <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex gap-4"
        >
          <img className="w-44 h-36 rounded" src={material.image} alt="material image"/>
          <div className="flex flex-col justify-start">
            <p className="text-xl text-green-700 font-bold">{material.name}</p>
            <ul className="mt-4">
              {material.description.map((feature, index) => (
                <span className="flex gap-2">
                  <img src={correctIcon} alt="correct icon" className="w-4" />
                  <li key={index}>{feature}</li>
                </span>
              ))}
            </ul>
          </div>
        </motion.div>
        : <>
          <img className="w-24 h-16 rounded" src={material.image} alt="material image"/>
          <p className="font-semibold">{material.name}</p>
        </>
      }
    </motion.li>
  );
};