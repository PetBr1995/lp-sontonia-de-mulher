import { useEffect, useRef, useState } from "react";

const motionByDirection = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
};

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  threshold = 0.2,
  once = false,
  className = "",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
          return;
        }

        if (!once) setIsVisible(false);
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold]);

  const hiddenTransform = motionByDirection[direction] || motionByDirection.up;

  return (
    <div
      ref={ref}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
      className={[
        "will-change-transform transition-all ease-out",
        isVisible ? "translate-x-0 translate-y-0 opacity-100" : `${hiddenTransform} opacity-0`,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Reveal;
