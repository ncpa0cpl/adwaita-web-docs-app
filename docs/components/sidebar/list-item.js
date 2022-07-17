import {Label, List} from "../../_snowpack/pkg/adwaita-web.js";
import * as fzy from "../../_snowpack/pkg/fzyjs.js";
import React from "../../_snowpack/pkg/react.js";
import {useNavigate} from "../../_snowpack/pkg/react-router-dom.js";
import {highlight} from "./utils.js";
const getLinkTo = (componentName) => {
  return `/${componentName}`;
};
export const ListItem = React.memo(({
  route,
  search,
  currentBranch
}) => {
  const navigate = useNavigate();
  return /* @__PURE__ */ React.createElement(List.Item, {
    as: "span",
    key: route,
    className: "align component-link",
    activatable: true,
    selected: currentBranch === route,
    onClick: () => navigate(getLinkTo(route))
  }, /* @__PURE__ */ React.createElement(Label, null, search === "" ? route : highlight("mark", route, fzy.positions(search, route))));
});
