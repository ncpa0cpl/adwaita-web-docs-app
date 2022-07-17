var SCORE_MIN = -Infinity;
var SCORE_MAX = Infinity;
var SCORE_GAP_LEADING = -5e-3;
var SCORE_GAP_TRAILING = -5e-3;
var SCORE_GAP_INNER = -0.01;
var SCORE_MATCH_CONSECUTIVE = 1;
var SCORE_MATCH_SLASH = 0.9;
var SCORE_MATCH_WORD = 0.8;
var SCORE_MATCH_CAPITAL = 0.7;
var SCORE_MATCH_DOT = 0.6;
function islower(s) {
  return s.toLowerCase() === s;
}
function isupper(s) {
  return s.toUpperCase() === s;
}
function precompute_bonus(haystack) {
  var m = haystack.length;
  var match_bonus = new Array(m);
  var last_ch = "/";
  for (var i = 0; i < m; i++) {
    var ch = haystack[i];
    if (last_ch === "/") {
      match_bonus[i] = SCORE_MATCH_SLASH;
    } else if (last_ch === "-" || last_ch === "_" || last_ch === " ") {
      match_bonus[i] = SCORE_MATCH_WORD;
    } else if (last_ch === ".") {
      match_bonus[i] = SCORE_MATCH_DOT;
    } else if (islower(last_ch) && isupper(ch)) {
      match_bonus[i] = SCORE_MATCH_CAPITAL;
    } else {
      match_bonus[i] = 0;
    }
    last_ch = ch;
  }
  return match_bonus;
}
function compute(needle, haystack, D, M) {
  var n = needle.length;
  var m = haystack.length;
  var lower_needle = needle.toLowerCase();
  var lower_haystack = haystack.toLowerCase();
  var match_bonus = precompute_bonus(haystack);
  for (var i = 0; i < n; i++) {
    D[i] = new Array(m);
    M[i] = new Array(m);
    var prev_score = SCORE_MIN;
    var gap_score = i === n - 1 ? SCORE_GAP_TRAILING : SCORE_GAP_INNER;
    for (var j = 0; j < m; j++) {
      if (lower_needle[i] === lower_haystack[j]) {
        var score2 = SCORE_MIN;
        if (!i) {
          score2 = j * SCORE_GAP_LEADING + match_bonus[j];
        } else if (j) {
          score2 = Math.max(M[i - 1][j - 1] + match_bonus[j], D[i - 1][j - 1] + SCORE_MATCH_CONSECUTIVE);
        }
        D[i][j] = score2;
        M[i][j] = prev_score = Math.max(score2, prev_score + gap_score);
      } else {
        D[i][j] = SCORE_MIN;
        M[i][j] = prev_score = prev_score + gap_score;
      }
    }
  }
}
function score(needle, haystack) {
  var n = needle.length;
  var m = haystack.length;
  if (!n || !m)
    return SCORE_MIN;
  if (n === m) {
    return SCORE_MAX;
  }
  if (m > 1024) {
    return SCORE_MIN;
  }
  var D = new Array(n);
  var M = new Array(n);
  compute(needle, haystack, D, M);
  return M[n - 1][m - 1];
}
function positions(needle, haystack) {
  var n = needle.length;
  var m = haystack.length;
  var positions2 = new Array(n);
  if (!n || !m)
    return positions2;
  if (n === m) {
    for (var i = 0; i < n; i++)
      positions2[i] = i;
    return positions2;
  }
  if (m > 1024) {
    return positions2;
  }
  var D = new Array(n);
  var M = new Array(n);
  compute(needle, haystack, D, M);
  var match_required = false;
  for (var i = n - 1, j = m - 1; i >= 0; i--) {
    for (; j >= 0; j--) {
      if (D[i][j] !== SCORE_MIN && (match_required || D[i][j] === M[i][j])) {
        match_required = i && j && M[i][j] === D[i - 1][j - 1] + SCORE_MATCH_CONSECUTIVE;
        positions2[i] = j--;
        break;
      }
    }
  }
  return positions2;
}
function hasMatch(needle, haystack) {
  needle = needle.toLowerCase();
  haystack = haystack.toLowerCase();
  var l = needle.length;
  for (var i = 0, j = 0; i < l; i += 1) {
    j = haystack.indexOf(needle[i], j) + 1;
    if (j === 0)
      return false;
  }
  return true;
}
export {SCORE_GAP_INNER, SCORE_GAP_LEADING, SCORE_GAP_TRAILING, SCORE_MATCH_CAPITAL, SCORE_MATCH_CONSECUTIVE, SCORE_MATCH_DOT, SCORE_MATCH_SLASH, SCORE_MATCH_WORD, SCORE_MAX, SCORE_MIN, hasMatch, positions, score};
