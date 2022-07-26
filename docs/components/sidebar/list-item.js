import {Label, ListItem as AWListItem} from "../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import * as fzy from "../../_snowpack/pkg/fzyjs.v0.4.1.js";
import React from "../../_snowpack/pkg/react.v18.2.0.js";
import {useNav} from "../../hooks/use-nav.js";
import {highlight} from "./utils.js";
const getLinkTo = (componentName) => {
  return `/${componentName}`;
};
export const ListItem = React.memo(({
  route,
  search,
  currentItem
}) => {
  const navigate = useNav();
  return /* @__PURE__ */ React.createElement(AWListItem, {
    as: "span",
    key: route,
    className: "align component-link",
    activatable: true,
    selected: currentItem === route,
    onClick: () => navigate(getLinkTo(route), {preserveQuery: true})
  }, /* @__PURE__ */ React.createElement(Label, null, search === "" ? route : highlight("mark", route, fzy.positions(search, route))));
});
