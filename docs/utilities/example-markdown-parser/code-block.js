import {v4} from "../../_snowpack/pkg/uuid.v8.3.2.js";
export class CodeBlock {
  constructor(code) {
    this.code = code;
    this.id = v4();
    this.type = "code-block";
  }
  parseMetadata(metadata) {
    const dependencies = new Map();
    for (const line of metadata) {
      const match = line.match(/\s*([^@]+)@([^\s]+)\s*/);
      if (match && match[1] && match[2]) {
        dependencies.set(match[1], match[2]);
      }
    }
    return dependencies;
  }
  resolveDependencyVersion(depsMap, dependency) {
    if (depsMap.has(dependency)) {
      return depsMap.get(dependency);
    }
    return "latest";
  }
  getCode() {
    const lines = this.code.split("\n");
    let metadataLines = 0;
    for (const line of lines) {
      if (line.startsWith("//")) {
        metadataLines++;
      } else
        break;
    }
    return lines.slice(metadataLines).join("\n");
  }
  getDependencies() {
    const lines = this.code.split("\n");
    const metadata = [];
    for (const line of lines) {
      if (line.startsWith("//")) {
        metadata.push(line.slice(2).trim());
      } else
        break;
    }
    const importedPackages = [];
    const reg = /import\s+.+?\s+from\s+['"](.+?)['"]/gms;
    let result;
    while ((result = reg.exec(this.code)) !== null) {
      if (result[1]) {
        importedPackages.push(result[1]);
      }
    }
    const dependencyVersions = this.parseMetadata(metadata);
    for (const dep of dependencyVersions) {
      if (!importedPackages.includes(dep[0])) {
        importedPackages.push(dep[0]);
      }
    }
    return importedPackages.map((pkg) => ({
      package: pkg,
      version: this.resolveDependencyVersion(dependencyVersions, pkg)
    }));
  }
}
