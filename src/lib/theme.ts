export const THEME_STORAGE_KEY = "tevonax-theme";

/**
 * Runs synchronously in <head> before first paint so the page never flashes
 * the wrong theme. Uses the saved choice if any, otherwise the OS preference.
 * Also flags the document as JS-enabled for the scroll-reveal styles.
 */
export const themeInitScript = `(function(){var d=document.documentElement,t=null;try{t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)})}catch(e){}if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.dataset.theme=t;d.classList.add("js")})();`;
