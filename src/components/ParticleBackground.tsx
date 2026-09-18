import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import type { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../context/ThemeContext';

export const ParticleBackground: FC = () => {
  const { theme } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    (async () => {
      await loadSlim(undefined as unknown as Engine);
    })()
      .then(() => setInit(true))
      .catch(() => setInit(true));
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadSlim(engine);
    } catch {
      /* engine already loaded globally */
    }
  }, []);

  const particlesLoaded = useCallback(async () => {
    // particles loaded
  }, []);

  if (typeof window === 'undefined' || !init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit as any}
      particlesLoaded={particlesLoaded as any}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: {
                enable: true
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: theme === 'dark' ? "#3b82f6" : "#06b6d4",
          },
          links: {
            color: theme === 'dark' ? "#3b82f6" : "#06b6d4",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
};
