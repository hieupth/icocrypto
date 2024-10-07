import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

interface ParticleBackgroundProps {
  count?: number;
  color?: string;
  maxRadius?: number;
  minRadius?: number;
  speed?: number;
  lineColor?: string;
  lineOpacity?: number;
  linksDistance?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  count = 100,
  color = '#ffffff',
  maxRadius = 3,
  minRadius = 1,
  speed = 0.5,
  lineColor = '255, 255, 255',
  lineOpacity = 0.1,
  linksDistance = 150,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const parseColor = (colorString: string): string => {
    if (colorString.startsWith('#')) {
      return colorString;
    } else {
      const parts = colorString.split(',').map(part => part.trim());
      if (parts.length === 3) {
        return `rgb(${parts.join(',')})`;
      } else if (parts.length === 4) {
        return `rgba(${parts.join(',')})`;
      }
    }
    return colorString;
  };

  const createParticle = (canvas: HTMLCanvasElement): Particle => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * (maxRadius - minRadius) + minRadius,
    color: parseColor(color),
    vx: (Math.random() - 0.5) * speed,
    vy: (Math.random() - 0.5) * speed,
  });

  const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
  };

  const drawLinks = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const dx = particlesRef.current[i].x - particlesRef.current[j].x;
        const dy = particlesRef.current[i].y - particlesRef.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < linksDistance) {
          ctx.beginPath();
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
          ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
          ctx.strokeStyle = `rgba(${lineColor}, ${lineOpacity})`;
          ctx.stroke();
        }
      }
    }
  };

  const updateParticles = (canvas: HTMLCanvasElement) => {
    particlesRef.current.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateParticles(canvas);
    particlesRef.current.forEach((particle) => drawParticle(ctx, particle));
    drawLinks(ctx);

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = Array.from({ length: count }, () => createParticle(canvas));
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [count, color, maxRadius, minRadius, speed, lineColor, lineOpacity, linksDistance]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBackground;