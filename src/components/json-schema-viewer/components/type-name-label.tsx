import { Label } from "adwaita-web";
import React from "react";

export const TypeNameLabel = ({ name }: { name: string }) => {
  return (
    <Label info className="type-name">
      {name}
    </Label>
  );
};
