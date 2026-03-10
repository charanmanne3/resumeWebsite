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
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            area: 1000,
          },
        },
        color: {
          value: "#38BDF8",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.15, max: 0.5 },
          animation: {
            enable: true,
            speed: 0.4,
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3.5 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.5,
            sync: false,
          },
        },
        shadow: {
          blur: 8,
          color: "rgba(56,189,248,0.5)",
          enable: true,
        },
        links: {
          enable: true,
          distance: 160,
          color: "#0EA5E9",
          opacity: 0.12,
          width: 1,
          triangles: {
            enable: true,
            opacity: 0.015,
            color: "#0EA5E9",
          },
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce",
          },
          attract: {
            enable: false,
          },
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
          onClick: {
            enable: false,
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.25,
              color: "#38BDF8",
            },
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
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#020617" }}
      />

      <div className="absolute inset-0 blur-[0.5px]">
        <Particles
          id="data-engineering-particles"
          init={particlesInit}
          options={options}
          className="h-full w-full"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
    </div>
  );
}
