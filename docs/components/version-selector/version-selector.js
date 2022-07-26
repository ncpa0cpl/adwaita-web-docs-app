import {Dropdown} from "../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../_snowpack/pkg/react.v18.2.0.js";
import {useSearchParams} from "../../_snowpack/pkg/react-router-dom.v6.3.0.js";
import {githubRepo} from "../../quarks/github-repo/github-repo.js";
export const VersionSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const repo = githubRepo.use();
  const [selectedBranch, setSelectedBranch] = React.useState(repo.value.currentBranch);
  const onBranchSelect = (branch) => {
    if (branch) {
      const prevParamVersion = searchParams.get("version");
      setSearchParams({version: branch});
      setSelectedBranch(branch);
      githubRepo.selectBranch(branch).catch(() => {
        setSearchParams({version: prevParamVersion ?? ""});
        setSelectedBranch(selectedBranch);
      });
    }
  };
  React.useEffect(() => {
    setSelectedBranch(repo.value.currentBranch);
  }, [repo.value.currentBranch]);
  React.useEffect(() => {
    const v = searchParams.get("version");
    if (v && repo.value.branches.length > 0) {
      onBranchSelect(v);
    }
  }, [repo.value.branches]);
  return /* @__PURE__ */ React.createElement(Dropdown, {
    options: repo.value.branches.map((branch) => ({
      label: branch.label,
      value: branch.name
    })),
    value: repo.value.currentBranch,
    onChange: onBranchSelect,
    allowClear: false
  });
};
