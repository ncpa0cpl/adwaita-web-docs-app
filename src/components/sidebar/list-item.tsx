import { Label, ListItem as AWListItem } from "adwaita-web";
import * as fzy from "fzy.js";
import React from "react";
import { useNav } from "../../hooks/use-nav";
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
    const navigate = useNav();

    return (
      <AWListItem
        as={"span"}
        key={route}
        className="align component-link"
        activatable
        selected={currentItem === route}
        onClick={() => navigate(getLinkTo(route), { preserveQuery: true })}
      >
        <Label>
          {search === ""
            ? route
            : highlight("mark", route, fzy.positions(search, route))}
        </Label>
      </AWListItem>
    );
  }
);
