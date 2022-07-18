import { Dropdown } from "adwaita-web";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { githubRepo } from "../../quarks/github-repo/github-repo";

export const VersionSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const repo = githubRepo.use();
  const [selectedBranch, setSelectedBranch] = React.useState(
    repo.value.currentBranch
  );

  const onBranchSelect = (branch?: string) => {
    if (branch) {
      const prevParamVersion = searchParams.get("version");

      setSearchParams({ version: branch });
      setSelectedBranch(branch);
      githubRepo.selectBranch(branch).catch(() => {
        setSearchParams({ version: prevParamVersion ?? "" });
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
