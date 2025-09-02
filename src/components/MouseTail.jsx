import React, { useRef, useEffect } from "react";

export default function GlitterTrailOnMove() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const colors = ["#ffffff", "#f0f0f0", "#ffeedd", "#fffacd"];
    const trail = [];

    const mouse = { x: 0, y: 0, moving: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.moving = true;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Only create particles if mouse is moving
      if (mouse.moving) {
        for (let i = 0; i < 3; i++) {
          trail.push({
            x: mouse.x + (Math.random() * 10 - 5),
            y: mouse.y + (Math.random() * 10 - 5),
            radius: Math.random() * 2 + 1,
            alpha: Math.random() * 0.8 + 0.3,
            dx: Math.random() * 0.5 - 0.25,
            dy: Math.random() * 0.5 - 0.25,
            color: colors[Math.floor(Math.random() * colors.length)],
            flicker: Math.random() * 0.05 + 0.01,
          });
        }
        mouse.moving = false; // reset until next move
      }

      // Draw trail particles
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.shadowBlur = p.radius * 2;
        ctx.shadowColor = p.color;
        ctx.fill();

        // Update particle
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= p.flicker;
        p.radius *= 0.98;

        if (p.alpha <= 0.05 || p.radius <= 0.2) trail.splice(i, 1);
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
