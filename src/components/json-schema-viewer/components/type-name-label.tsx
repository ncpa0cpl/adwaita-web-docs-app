import { Label } from "adwaita-web";
import React from "react";

export const TypeNameLabel = ({ name }: { name: React.ReactNode }) => {
  return (
    <Label info className="type-name">
      {name}
    </Label>
  );
};
