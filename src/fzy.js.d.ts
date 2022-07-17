declare module "fzy.js" {
  export const score: (searchFor: string, inText: string) => number;
  export const hasMatch: (searchFor: string, inText: string) => boolean;
  export const positions: (searchFor: string, inText: string) => number[];
}
