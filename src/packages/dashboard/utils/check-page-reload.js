export function navigationType() {
  let result;
  let p;

  if (window.performance.navigation) {
    result = window.performance.navigation;
    if (result === 255) {
      result = 4;
    } // 4 is my invention!
  }

  if (window.performance.getEntriesByType("navigation")) {
    p = window.performance.getEntriesByType("navigation")[0].type;

    if (p === "navigate") {
      result = 0;
    }
    if (p === "reload") {
      result = 1;
      localStorage.removeItem("sessionExpiry");
    }
    if (p === "back_forward") {
      result = 2;
      localStorage.removeItem("sessionExpiry");
    }
    if (p === "prerender") {
      result = 3;
    } //3 is my invention!
  }
  return result;
}
