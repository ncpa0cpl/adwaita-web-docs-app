import { Label } from "adwaita-web";
import clsx from "clsx";
import React from "react";

export const PropertyNameLabel = ({
  name,
  indexSignature,
}: {
  name: string;
  indexSignature?: boolean;
}) => {
  return (
    <td className="property-name-cell">
      <Label
        bold
        className={clsx("property-name", { "index-signature": indexSignature })}
      >
        {name}
      </Label>
    </td>
  );
};
