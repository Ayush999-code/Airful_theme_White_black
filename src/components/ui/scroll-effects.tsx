"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const root = document.documentElement;
    root.classList.add("lux-js");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-lux-reveal]")
    );
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-lux-parallax]")
    );

    if (prefersReducedMotion) {
      revealElements.forEach((el) => el.classList.add("is-visible"));
      return () => {
        root.classList.remove("lux-js");
      };
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    let ticking = false;
    const updateParallax = () => {
      const viewportHeight = window.innerHeight || 1;

      parallaxElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const progress = (rect.top + rect.height * 0.5 - viewportHeight * 0.5) / viewportHeight;
        const strength = Number(el.dataset.luxParallax) || 16;
        const easedStrength = strength * 0.4;
        el.style.setProperty("--lux-parallax-offset", `${-progress * easedStrength}px`);
      });

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    };

    if (parallaxElements.length > 0) {
      updateParallax();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.classList.remove("lux-js");
    };
  }, []);

  return null;
}
