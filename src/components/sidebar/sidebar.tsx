import { Box, Icon, Input, Label, List } from "adwaita-web";
import * as fzy from "fzy.js";
import { sortBy } from "rambda";
import React, { useState } from "react";
import { useMatch } from "react-router-dom";
import { useNav } from "../../hooks/use-nav";
import { typeDocs } from "../../quarks/typedocs/typedocs";
import { VersionSelector } from "../version-selector/version-selector";
import { ListItem } from "./list-item";
import "./styles.scss";

const getLinkTo = (componentName: string) => {
  return `/${componentName}`;
};

export function Sidebar() {
  const { params } = useMatch("/:componentName") ?? {};
  const navigate = useNav();
  const [searchValue, setSearch] = useState("");
  const search = searchValue.trim();
  const componentNames = typeDocs.useComponentNames();

  const filteredRoutes = React.useMemo(
    () =>
      search
        ? sortBy(
            (name: string) => -fzy.score(search, name),
            componentNames.filter((name) => fzy.hasMatch(search, name))
          )
        : componentNames,
    [search, componentNames]
  );

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const selectedRoute = filteredRoutes[0];
    if (!selectedRoute) return;
    navigate(getLinkTo(selectedRoute), { preserveQuery: true });
    setTimeout(() => document.getElementById("main")?.focus(), 200);
    setSearch("");
  };

  return (
    <Box vertical compact className="sidebar-root">
      <Box vertical padded className="background-dark">
        <VersionSelector />
      </Box>
      <Box vertical padded className="background-dark">
        <form onSubmit={onSubmit}>
          <Input
            allowClear
            icon={Icon.SystemSearch}
            placeholder="Search documentation"
            value={search}
            onChange={setSearch}
          />
        </form>
      </Box>
      <List border={false} fill sidebar="navigation" className="list">
        {filteredRoutes.map((route) => (
          <ListItem
            key={route}
            route={route}
            search={search}
            currentItem={params?.componentName ?? ""}
          />
        ))}
        {filteredRoutes.length === 0 && (
          <List.Item className="align">
            <Label muted italic>
              <small>No results found. Try searching for something else.</small>
            </Label>
          </List.Item>
        )}
      </List>
    </Box>
  );
}
