import {Dropdown} from "../../_snowpack/pkg/adwaita-web.js";
import React from "../../_snowpack/pkg/react.js";
import {githubRepo} from "../../quarks/github-repo/github-repo.js";
export const VersionSelector = () => {
  const repo = githubRepo.use();
  const [selectedBranch, setSelectedBranch] = React.useState(repo.value.currentBranch);
  const onBranchSelect = (branch) => {
    if (branch) {
      setSelectedBranch(branch);
      githubRepo.selectBranch(branch).catch(() => {
        setSelectedBranch(selectedBranch);
      });
    }
  };
  React.useEffect(() => {
    setSelectedBranch(repo.value.currentBranch);
  }, [repo.value.currentBranch]);
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
