import React, { FC } from "react";

interface Props {
  label?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  className: string;
}

export const Input: FC<Props> = ({ label, type, value, onChange, className }) => {
  return (
    <div className="flex flex-col">
      <input
        onChange={onChange}
        value={value}
        type={type}
        className={className}
      />
      {Boolean(label) && <label className="font-bold">{label}</label>}
    </div>
  );
};