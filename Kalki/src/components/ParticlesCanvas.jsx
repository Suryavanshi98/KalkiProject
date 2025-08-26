import { useEffect, useRef } from "react";

export default function ParticlesCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const random = (min, max) => Math.random() * (max - min) + min;

    class Particle {
      constructor() {
        this.x = random(0, canvas.width);
        this.y = random(0, canvas.height);
        this.vx = random(-0.3, 0.3);
        this.vy = random(-0.3, 0.3);
        this.radius = random(1, 3);
        this.opacity = random(0.1, 0.6);
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.fillStyle = `rgba(155, 28, 47, ${this.opacity})`;
        ctx.shadowColor = `rgba(155, 28, 47, 0.7)`;
        ctx.shadowBlur = 8;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const generateParticles = (num) => {
      particles = Array.from({ length: num }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateParticles(90);
    };

    handleResize();
    animate();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}
