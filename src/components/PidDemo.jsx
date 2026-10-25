import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const resolveAsset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export default function PidDemo() {
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);
  const [isPaused, setIsPaused] = useState(prefersReducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handlePreferenceChange = (event) => {
      setReducedMotion(event.matches);
      if (event.matches) {
        setIsPaused(true);
      }
    };

    handlePreferenceChange(mediaQuery);
    mediaQuery.addEventListener?.("change", handlePreferenceChange);
    return () => mediaQuery.removeEventListener?.("change", handlePreferenceChange);
  }, []);

  const description = "Autonomous line-following car moving during a lab test.";

  return (
    <figure className={`pid-demo${isPaused ? " is-paused" : ""}`}>
      <div className="media-kicker">
        <span>HARDWARE IN MOTION</span>
        <span>LAB TEST</span>
      </div>
      <div className="pid-frame">
        <img
          className="pid-motion"
          src={resolveAsset("/assets/pid-car-demo.webp")}
          width="320"
          height="568"
          alt={isPaused ? "" : description}
          aria-hidden={isPaused}
          decoding="async"
        />
        <img
          className="pid-still"
          src={resolveAsset("/assets/pid-car-demo-still.jpg")}
          width="320"
          height="568"
          alt={isPaused ? description : ""}
          aria-hidden={!isPaused}
          decoding="async"
        />
      </div>
      <figcaption>
        <span>Real hardware test</span>
        <button
          className="motion-toggle"
          type="button"
          aria-pressed={isPaused}
          disabled={reducedMotion}
          onClick={() => setIsPaused((paused) => !paused)}
        >
          {reducedMotion
            ? "Paused for reduced motion"
            : isPaused
              ? "Play animation"
              : "Pause animation"}
        </button>
      </figcaption>
    </figure>
  );
}
