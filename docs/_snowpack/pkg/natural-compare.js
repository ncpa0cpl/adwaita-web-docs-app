import{c as j}from"./common/_commonjsHelpers-b3efd043.js";var s=j(function(g){/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */var h=function(i,p){var a,n,t=1,u=0,C=0,A=String.alphabet;function f(m,l,r){if(r){for(a=l;r=f(m,a),r<76&&r>65;)++a;return+m.slice(l-1,a)}return r=A&&A.indexOf(m.charAt(l)),r>-1?r+76:(r=m.charCodeAt(l)||0,r<45||r>127?r:r<46?65:r<48?r-1:r<58?r+18:r<65?r-11:r<91?r+11:r<97?r-37:r<123?r+5:r-63)}if((i+="")!=(p+="")){for(;t;)if(n=f(i,u++),t=f(p,C++),n<76&&t<76&&n>66&&t>66&&(n=f(i,u,u),t=f(p,C,u=a),C=a),n!=t)return n<t?-1:1}return 0};try{g.exports=h}catch(i){String.naturalCompare=h}});export default s;
