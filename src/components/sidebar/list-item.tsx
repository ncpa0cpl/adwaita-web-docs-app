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
    currentItem,
  }: {
    route: string;
    search: string;
    currentItem: string;
  }) => {
    const navigate = useNavigate();

    return (
      <List.Item
        as={"span"}
        key={route}
        className="align component-link"
        activatable
        selected={currentItem === route}
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
