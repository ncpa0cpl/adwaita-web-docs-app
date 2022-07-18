import { Text } from "adwaita-web";
import React from "react";

export const Description = ({ description }: { description?: string }) => {
  if (description) return <Text>{description}</Text>;
  return <></>;
};
