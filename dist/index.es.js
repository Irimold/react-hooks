import { useState as l, useCallback as o, useEffect as r } from "react";
const d = (e) => {
  const [s, c] = l(!1), t = o(() => {
    !document.fullscreenElement ? document.body.requestFullscreen({ navigationUI: e || "hide" }) : document.exitFullscreen();
  }, [e]);
  return r(() => {
    const n = () => {
      c(!!document.fullscreenElement);
    };
    return document.addEventListener("fullscreenchange", n), () => document.removeEventListener("fullscreenchange", n);
  }, []), [s, t];
}, m = (e = "(min-width:1024px)") => {
  const [s, c] = l(!1);
  return r(() => {
    if (!e)
      return;
    const t = (u) => {
      c(u.matches);
    }, n = window.matchMedia(e);
    return n.addEventListener("change", t), () => n.removeEventListener("change", t);
  }, [e]), s;
};
export {
  d as useFullscreen,
  m as useMediaQuery
};
