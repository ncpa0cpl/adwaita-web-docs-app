export default function o(n){const t=n.split(`
`);for(;t.length&&l(t[0]);)t.shift();for(;t.length&&l(t[t.length-1]);)t.pop();let i=Infinity;t.forEach(e=>{const c=e.match(/^\s*/);if(c){const s=c[0];if(l(e))return;s&&s.length<i&&(i=s.length)}});const h=" ".repeat(i);return t.map(e=>e.replace(h,"")).join(`
`)}function l(n){return/^\s*$/.test(n)}
