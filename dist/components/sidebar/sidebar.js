import {Box, Icon, Input, Label, List} from "../../_snowpack/pkg/adwaita-web.js";
import * as fzy from "../../_snowpack/pkg/fzyjs.js";
import {sortBy} from "../../_snowpack/pkg/rambda.js";
import React, {useState} from "../../_snowpack/pkg/react.js";
import {useNavigate} from "../../_snowpack/pkg/react-router-dom.js";
import {githubRepo} from "../../quarks/github-repo/github-repo.js";
import {typeDocs} from "../../quarks/typedocs/typedocs.js";
import {VersionSelector} from "../version-selector/version-selector.js";
import {ListItem} from "./list-item.js";
import "./styles.css.proxy.js";
const getLinkTo = (componentName) => {
  return `/${componentName}`;
};
export function Sidebar() {
  const navigate = useNavigate();
  const [searchValue, setSearch] = useState("");
  const search = searchValue.trim();
  const repository = githubRepo.use();
  const componentNames = typeDocs.useComponentNames();
  const filteredRoutes = React.useMemo(() => search ? sortBy((name) => -fzy.score(search, name), componentNames.filter((name) => fzy.hasMatch(search, name))) : componentNames, [search, componentNames]);
  const onSubmit = (ev) => {
    ev.preventDefault();
    const selectedRoute = filteredRoutes[0];
    if (!selectedRoute)
      return;
    navigate(getLinkTo(selectedRoute));
    setTimeout(() => {
      var _a;
      return (_a = document.getElementById("main")) == null ? void 0 : _a.focus();
    }, 200);
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
    currentBranch: repository.value.currentBranch
  })), filteredRoutes.length === 0 && /* @__PURE__ */ React.createElement(List.Item, {
    className: "align"
  }, /* @__PURE__ */ React.createElement(Label, {
    muted: true,
    italic: true
  }, /* @__PURE__ */ React.createElement("small", null, "No results found. Try searching for something else.")))));
}
