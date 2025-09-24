import React, { useRef, useEffect, useState } from "react";

export default function SimpleDinoGame() {
  const canvasRef = useRef(null);
  const gameOverRef = useRef(false); // keep latest gameOver state

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const WIDTH = 900;
  const HEIGHT = 200;
  const FLOOR = 160;
  const DINO = { x: 50, y: FLOOR - 50, w: 30, h: 40, vy: 0 };
  const GRAVITY = 0.8;
  const JUMP = -14;

  let obstacles = [];
  let frame = 0;

  function resetGame() {
    DINO.y = FLOOR - DINO.h;
    DINO.vy = 0;
    obstacles = [];
    frame = 0;
    setScore(0);
    setGameOver(false);
    gameOverRef.current = false; //  update ref(ig)
  }

  function isHit(a, b) {
    return !(
      a.x + a.w < b.x ||
      a.x > b.x + b.w ||
      a.y + a.h < b.y ||
      a.y > b.y + b.h
    );
  }

  function gameLoop(ctx) {
    if (gameOverRef.current) return; 

    frame++;

    
    DINO.vy += GRAVITY;
    DINO.y += DINO.vy;
    if (DINO.y + DINO.h >= FLOOR) {
      DINO.y = FLOOR - DINO.h;
      DINO.vy = 0;
    }

    //  obstacles
    if (frame % 100 === 0) {
      const w = 20 + Math.random() * 20;
      const h = 20 + Math.random() * 30;
      obstacles.push({
        x: WIDTH,
        y: FLOOR - h,
        w,
        h,
        speed: 4,
        passed: false,
      });
    }

    // Move obstacles
    obstacles.forEach((o) => {
      o.x -= o.speed;
      if (!o.passed && o.x + o.w < DINO.x) {
        o.passed = true;
        setScore((s) => s + 1);
      }
    });

    obstacles = obstacles.filter((o) => o.x + o.w > 0);

    
    for (let o of obstacles) {
      if (isHit(DINO, o)) {
        setGameOver(true);
        gameOverRef.current = true; 
        return;
      }
    }

    // Draw background
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Floor
    ctx.fillStyle = "black";
    ctx.fillRect(0, FLOOR, WIDTH, 6);

    // Dino
    ctx.fillStyle = "red";
    ctx.fillRect(DINO.x, DINO.y, DINO.w, DINO.h);

    // Obstacles
    ctx.fillStyle = "blue";
    obstacles.forEach((o) => ctx.fillRect(o.x, o.y, o.w, o.h));
    
    // Score
    ctx.fillStyle = "black";
    ctx.font = "16px sans-serif";
    ctx.fillText("Score: " + score, WIDTH - 120, 20);

    requestAnimationFrame(() => gameLoop(ctx));
  }

  
  useEffect(() => {
    function handleKey(e) {
      if (e.code === "Space") {
        if (gameOverRef.current) {
          resetGame();
          const ctx = canvasRef.current.getContext("2d");
          requestAnimationFrame(() => gameLoop(ctx));
        } else if (DINO.vy === 0) {
          DINO.vy = JUMP;
        }
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext("2d");
    requestAnimationFrame(() => gameLoop(ctx));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-8">
    <h3 className="text-2xl font-bold mb-4 text-red-500">
        Simple Dino Game
    </h3>

      <canvas
        ref={canvasRef}
        className="border-4 border-gray-300 rounded-lg shadow-lg"/>

      {gameOver && (
        <div className="mt-4 text-center text-red-600">
          <h4 className="text-xl font-semibold">
            Game Over Final Score: {score}
          </h4>
          <p className="text-gray-700">
            Press <span className="font-bold">Space</span> to Restart
          </p>
        </div>
      )}
    </div>
  );
}
