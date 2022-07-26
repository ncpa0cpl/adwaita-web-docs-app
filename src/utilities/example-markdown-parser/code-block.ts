import { v4 } from "uuid";

export class CodeBlock {
  public readonly id = v4();
  public readonly type = "code-block";
  constructor(private readonly code: string) {}

  /**
   * Each metadata line might contain information about the exact
   * dependency version that should be used. Each line is
   * expected to contain that data in a format
   * `<dependency-name>@<version>`.
   */
  private parseMetadata(metadata: string[]) {
    const dependencies = new Map<string, string>();

    for (const line of metadata) {
      const match = line.match(/\s*([^@]+)@([^\s]+)\s*/);
      if (match && match[1] && match[2]) {
        dependencies.set(match[1], match[2]);
      }
    }

    return dependencies;
  }

  private resolveDependencyVersion(
    depsMap: Map<string, string>,
    dependency: string
  ) {
    if (depsMap.has(dependency)) {
      return depsMap.get(dependency)!;
    }

    return "latest";
  }

  public getCode(): string {
    const lines = this.code.split("\n");

    let metadataLines = 0;

    for (const line of lines) {
      if (line.startsWith("//")) {
        metadataLines++;
      } else break;
    }

    return lines.slice(metadataLines).join("\n");
  }

  public getDependencies() {
    const lines = this.code.split("\n");

    const metadata: string[] = [];

    for (const line of lines) {
      if (line.startsWith("//")) {
        metadata.push(line.slice(2).trim());
      } else break;
    }

    const importedPackages: string[] = [];

    const reg = /import\s+.+?\s+from\s+['"](.+?)['"]/gms;
    let result: RegExpExecArray | null;

    while ((result = reg.exec(this.code)) !== null) {
      if (result[1]) {
        importedPackages.push(result[1]);
      }
    }

    const dependencyVersions = this.parseMetadata(metadata);

    // add a package as dependency if the package is in the metadata but is
    // not imported
    for (const dep of dependencyVersions) {
      if (!importedPackages.includes(dep[0])) {
        importedPackages.push(dep[0]);
      }
    }

    return importedPackages.map((pkg) => ({
      package: pkg,
      version: this.resolveDependencyVersion(dependencyVersions, pkg),
    }));
  }
}
