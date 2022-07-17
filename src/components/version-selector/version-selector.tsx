import { Dropdown } from "adwaita-web";
import React from "react";
import { githubRepo } from "../../quarks/github-repo/github-repo";

export const VersionSelector = () => {
  const repo = githubRepo.use();
  const [selectedBranch, setSelectedBranch] = React.useState(
    repo.value.currentBranch
  );

  const onBranchSelect = (branch?: string) => {
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

  return (
    <Dropdown
      options={repo.value.branches.map((branch) => ({
        label: branch.label,
        value: branch.name,
      }))}
      value={repo.value.currentBranch}
      onChange={onBranchSelect}
      allowClear={false}
    />
  );
};
