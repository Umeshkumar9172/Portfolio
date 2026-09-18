import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../context/ThemeContext';

let slimLoaded = false;

async function ensureSlim(): Promise<void> {
  if (slimLoaded) return;
  try {
    const mod = await import('@tsparticles/slim');
    const { loadSlim: ls } = mod;
    // loadSlim expects an engine, but we call it with the global engine
    // the first time <Particles> mounts, it will pick up the loaded preset.
    // So we just mark it as loaded here and let the component load it via init cb.
    slimLoaded = true;
    void ls;
  } catch {
    slimLoaded = true;
  }
}

export const ParticleBackground: FC = () => {
  const { theme } = useTheme();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    ensureSlim().then(() => setReady(true));
  }, []);

  const particlesInit = useCallback(async (engine: unknown) => {
    try {
      await loadSlim(engine as Parameters<typeof loadSlim>[0]);
    } catch {
      /* ignore preset reload errors */
    }
  }, []);

  const options: ISourceOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 120,
    fullScreen: { enable: false },
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
        resize: { enable: true },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: theme === 'dark' ? '#3b82f6' : '#06b6d4' },
      links: {
        color: theme === 'dark' ? '#3b82f6' : '#06b6d4',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 1,
        straight: false,
      },
      number: { density: { enable: true }, value: 80 },
      opacity: { value: 0.3 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (typeof window === 'undefined' || !ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      // Pass both init patterns (different v3.x minor versions use different prop names)
      // We cast via unknown first to avoid direct TS errors with any
      {...({
        init: particlesInit,
        particlesInit: particlesInit,
      } as Record<string, unknown>)}
      className="absolute inset-0 -z-10"
    />
  );
};
