import { Text } from "adwaita-web";
import React from "react";
import { interpolateJSDocLinks } from "../../../utilities/interpolate-links";

export const Description = React.memo(
  ({ description }: { description?: string }) => {
    if (description)
      return (
        <Text as="pre" className="description">
          {interpolateJSDocLinks(
            description.trim().replace(/([^\n])\n([^\n])/g, "$1 $2")
          )}
        </Text>
      );
    return <></>;
  }
);
