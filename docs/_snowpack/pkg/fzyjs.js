var u=-Infinity,R=Infinity,S=-.005,i=-.005,m=-.01,E=1,s=.9,h=.8,I=.7,L=.6;function T(v){return v.toLowerCase()===v}function g(v){return v.toUpperCase()===v}function p(v){for(var f=v.length,r=new Array(f),a="/",n=0;n<f;n++){var e=v[n];a==="/"?r[n]=s:a==="-"||a==="_"||a===" "?r[n]=h:a==="."?r[n]=L:T(a)&&g(e)?r[n]=I:r[n]=0,a=e}return r}function M(v,f,r,a){for(var n=v.length,e=f.length,C=v.toLowerCase(),A=f.toLowerCase(),_=p(f),t=0;t<n;t++){r[t]=new Array(e),a[t]=new Array(e);for(var l=u,O=t===n-1?i:m,o=0;o<e;o++)if(C[t]===A[o]){var w=u;t?o&&(w=Math.max(a[t-1][o-1]+_[o],r[t-1][o-1]+E)):w=o*S+_[o],r[t][o]=w,a[t][o]=l=Math.max(w,l+O)}else r[t][o]=u,a[t][o]=l=l+O}}function H(v,f){var r=v.length,a=f.length;if(!r||!a)return u;if(r===a)return R;if(a>1024)return u;var n=new Array(r),e=new Array(r);return M(v,f,n,e),e[r-1][a-1]}function N(v,f){var r=v.length,a=f.length,n=new Array(r);if(!r||!a)return n;if(r===a){for(var e=0;e<r;e++)n[e]=e;return n}if(a>1024)return n;var C=new Array(r),A=new Array(r);M(v,f,C,A);for(var _=!1,e=r-1,t=a-1;e>=0;e--)for(;t>=0;t--)if(C[e][t]!==u&&(_||C[e][t]===A[e][t])){_=e&&t&&A[e][t]===C[e-1][t-1]+E,n[e]=t--;break}return n}function G(v,f){v=v.toLowerCase(),f=f.toLowerCase();for(var r=v.length,a=0,n=0;a<r;a+=1)if(n=f.indexOf(v[a],n)+1,n===0)return!1;return!0}export{m as SCORE_GAP_INNER,S as SCORE_GAP_LEADING,i as SCORE_GAP_TRAILING,I as SCORE_MATCH_CAPITAL,E as SCORE_MATCH_CONSECUTIVE,L as SCORE_MATCH_DOT,s as SCORE_MATCH_SLASH,h as SCORE_MATCH_WORD,R as SCORE_MAX,u as SCORE_MIN,G as hasMatch,N as positions,H as score};