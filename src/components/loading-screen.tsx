"use client";

import { Mountain } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function LoadingScreen() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const setup = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const fontSize = 16;
            const columns = Math.floor(canvas.width / fontSize);
            const drops: number[] = [];

            for (let x = 0; x < columns; x++) {
                drops[x] = 1;
            }

            const draw = () => {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = '#0F0'; // Green text
                ctx.font = `${fontSize}px monospace`;

                for (let i = 0; i < drops.length; i++) {
                    const text = characters.charAt(Math.floor(Math.random() * characters.length));
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
                animationFrameId = requestAnimationFrame(draw);
            };

            draw();
        };

        const handleResize = () => {
            cancelAnimationFrame(animationFrameId);
            setup();
        };

        setup();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);


    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-foreground">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30"></canvas>
            <div className="relative flex flex-col items-center gap-4 text-center animate-fade-in">
                <div className="p-4 rounded-full bg-primary/10 border-4 border-primary/20 animate-pulse">
                    <Mountain className="h-16 w-16 text-primary" />
                </div>
                <h1 className="text-2xl font-bold font-headline tracking-widest uppercase text-white">Nikesh Bhujel</h1>
                <p className="text-muted-foreground">Initializing Portfolio...</p>
                 <div className="w-32 h-1 bg-primary/20 rounded-full overflow-hidden mt-4">
                    <div className="w-full h-full bg-primary animate-loading-bar origin-left"></div>
                </div>
            </div>
            <style jsx>{`
                @keyframes loading-bar {
                    0% { transform: scaleX(0); }
                    50% { transform: scaleX(1); }
                    100% { transform: scaleX(0); transform-origin: right; }
                }
                .animate-loading-bar {
                    animation: loading-bar 2.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}
