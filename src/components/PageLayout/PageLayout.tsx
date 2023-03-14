import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen px-10 py-5 overflow-x-hidden">
      {children}
    </div>
  )
}