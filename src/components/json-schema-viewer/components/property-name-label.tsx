import { Label } from "adwaita-web";
import React from "react";

export const PropertyNameLabel = ({ name }: { name: string }) => {
  return (
    <td className="property-name-cell">
      <Label bold className="property-name">
        {name}
      </Label>
    </td>
  );
};
