import { Label, List } from "adwaita-web";
import * as fzy from "fzy.js";
import React from "react";
import { useNavigate } from "react-router-dom";
import { highlight } from "./utils";

const getLinkTo = (componentName: string) => {
  return `/${componentName}`;
};

export const ListItem = React.memo(
  ({
    route,
    search,
    currentBranch,
  }: {
    route: string;
    search: string;
    currentBranch: string;
  }) => {
    const navigate = useNavigate();

    return (
      <List.Item
        as={"span"}
        key={route}
        className="align component-link"
        activatable
        selected={currentBranch === route}
        onClick={() => navigate(getLinkTo(route))}
      >
        <Label>
          {search === ""
            ? route
            : highlight("mark", route, fzy.positions(search, route))}
        </Label>
      </List.Item>
    );
  }
);
