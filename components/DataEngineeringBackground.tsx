"use client";

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";

export function DataEngineeringBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 30,
      detectRetina: true,
      particles: {
        number: { value: 35 },
        color: {
          value: "#60A5FA",
        },
        shape: {
          type: "circle",
        },
        opacity: { value: 0.4 },
        size: {
          value: { min: 1.5, max: 3 },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#38BDF8",
          opacity: 0.3,
          width: 1,
          triangles: { enable: false },
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "bounce" },
        },
        collisions: {
          enable: false,
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: { enable: false },
          resize: true,
        },
        modes: {
          grab: {
            distance: 120,
            links: { opacity: 0.5 },
          },
        },
      },
      background: {
        color: "transparent",
      },
    }),
    []
  );

  return (
    <div className="fixed inset-0 -z-10" style={{ transform: "translateZ(0)" }} aria-hidden="true">
      {/* Base gradient — brighter slate/blue/indigo */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />

      {/* Radial glow accents for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(circle at 20% 30%, rgba(56,189,248,0.15), transparent 40%)",
            "radial-gradient(circle at 80% 70%, rgba(99,102,241,0.15), transparent 40%)",
            "radial-gradient(circle at 50% 50%, rgba(96,165,250,0.08), transparent 50%)",
          ].join(", "),
        }}
      />

      {/* Particle network with glow filter */}
      <div
        className="absolute inset-0"
        style={{ filter: "drop-shadow(0 0 6px rgba(96,165,250,0.6))" }}
      >
        <Particles
          id="data-engineering-particles"
          init={particlesInit}
          options={options}
          className="h-full w-full"
        />
      </div>

      {/* Light gradient overlay to preserve text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-950/60" />
    </div>
  );
}
