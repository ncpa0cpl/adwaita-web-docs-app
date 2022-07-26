import {
  Box,
  Icon,
  Input,
  Label,
  List,
  ListItem as AWListItem
} from "../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import * as fzy from "../../_snowpack/pkg/fzyjs.v0.4.1.js";
import {sortBy} from "../../_snowpack/pkg/rambda.v6.9.0.js";
import React, {useState} from "../../_snowpack/pkg/react.v18.2.0.js";
import {useMatch} from "../../_snowpack/pkg/react-router-dom.v6.3.0.js";
import {useNav} from "../../hooks/use-nav.js";
import {typeDocs} from "../../quarks/typedocs/typedocs.js";
import {VersionSelector} from "../version-selector/version-selector.js";
import {ListItem} from "./list-item.js";
import "./styles.css.proxy.js";
const getLinkTo = (componentName) => {
  return `/${componentName}`;
};
export function Sidebar() {
  const {params} = useMatch("/:componentName") ?? {};
  const navigate = useNav();
  const [searchValue, setSearch] = useState("");
  const search = searchValue.trim();
  const componentNames = typeDocs.useComponentNames();
  const filteredRoutes = React.useMemo(() => search ? sortBy((name) => -fzy.score(search, name), componentNames.filter((name) => fzy.hasMatch(search, name))) : componentNames, [search, componentNames]);
  const onSubmit = (ev) => {
    ev.preventDefault();
    const selectedRoute = filteredRoutes[0];
    if (!selectedRoute)
      return;
    navigate(getLinkTo(selectedRoute), {preserveQuery: true});
    setTimeout(() => document.getElementById("main")?.focus(), 200);
    setSearch("");
  };
  return /* @__PURE__ */ React.createElement(Box, {
    vertical: true,
    compact: true,
    className: "sidebar-root"
  }, /* @__PURE__ */ React.createElement(Box, {
    vertical: true,
    padded: true,
    className: "background-dark"
  }, /* @__PURE__ */ React.createElement(VersionSelector, null)), /* @__PURE__ */ React.createElement(Box, {
    vertical: true,
    padded: true,
    className: "background-dark"
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit
  }, /* @__PURE__ */ React.createElement(Input, {
    allowClear: true,
    icon: Icon.SystemSearch,
    placeholder: "Search documentation",
    value: search,
    onChange: setSearch
  }))), /* @__PURE__ */ React.createElement(List, {
    border: false,
    fill: true,
    sidebar: "navigation",
    className: "list"
  }, filteredRoutes.map((route) => /* @__PURE__ */ React.createElement(ListItem, {
    key: route,
    route,
    search,
    currentItem: params?.componentName ?? ""
  })), filteredRoutes.length === 0 && /* @__PURE__ */ React.createElement(AWListItem, {
    className: "align"
  }, /* @__PURE__ */ React.createElement(Label, {
    muted: true,
    italic: true
  }, /* @__PURE__ */ React.createElement("small", null, "No results found. Try searching for something else.")))));
}
