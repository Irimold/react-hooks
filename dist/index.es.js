import { useState as v, useCallback as i, useEffect as u, useRef as f } from "react";
const y = (e) => {
  const [c, r] = v(!1), a = i(() => {
    !document.fullscreenElement ? document.documentElement.requestFullscreen({ navigationUI: e || "hide" }) : document.exitFullscreen();
  }, [e]);
  return u(() => {
    const t = () => {
      r(!!document.fullscreenElement);
    };
    return document.addEventListener("fullscreenchange", t), () => document.removeEventListener("fullscreenchange", t);
  }, []), [c, a];
}, w = (e = "(min-width:1024px)") => {
  const [c, r] = v(!1);
  return u(() => {
    if (!e)
      return;
    const a = (l) => {
      r(l.matches);
    }, t = window.matchMedia(e);
    return t.addEventListener("change", a), r(t.matches), () => t.removeEventListener("change", a);
  }, [e]), c;
}, p = {
  "audio-busy": "Could not access audio device",
  "audio-hardware": "Could not detect audio device",
  canceled: "Cancelled",
  interrupted: "Interrupted",
  "invalid-argument": "Invalid options",
  "language-unavailable": "No appropriate voice for current language",
  network: "You are not connected to internet",
  "not-allowed": "The browser blocked the operation",
  "synthesis-failed": "Failed to synthesis the voice",
  "synthesis-unavailable": "No synthesis engine available",
  "text-too-long": "The inputted text is too long",
  "voice-unavailable": "The selected voice is not available"
}, E = ({
  lang: e,
  onVoiceGet: c
}) => {
  const r = f([]), a = f(), t = i(({
    text: o,
    options: s = {
      rate: 0.75,
      pitch: 1,
      volume: 1
    },
    onEnd: d,
    onError: h
  }) => {
    try {
      if (!o)
        throw new Error("Invalid text");
      if (!r.current.length)
        throw new Error("No voice available");
      const n = new SpeechSynthesisUtterance(o);
      n.pitch = s.pitch, n.rate = s.rate, n.volume = s.volume, n.voice = r.current[0], n.addEventListener("error", m), typeof d == "function" && n.addEventListener("end", d);
    } catch (n) {
      console.error(n), typeof h == "function" && h(n);
    }
  }, []), l = i(() => {
    if (!e) {
      console.error("Lang is undefined");
      return;
    }
    const o = speechSynthesis.getVoices().filter((s) => s.lang == e && (s.name.includes("Google") || s.name.includes("Natural")));
    r.current = o, typeof c == "function" && c(o);
  }, []), m = i((o) => {
    throw new Error(p[o.error]);
  }, []);
  return u(() => {
    a.current = speechSynthesis, l();
  }, []), { speak: t };
};
export {
  y as useFullscreen,
  w as useMediaQuery,
  E as useSpeechSynthesis
};
