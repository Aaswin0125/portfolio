"use client";

import { Mountain, ShieldCheck, Fingerprint, Lock, Code } from 'lucide-react';

const icons = [
    { icon: <ShieldCheck className="h-8 w-8" />, position: 'top-1/4 left-1/4' },
    { icon: <Fingerprint className="h-8 w-8" />, position: 'top-1/3 right-1/4' },
    { icon: <Lock className="h-8 w-8" />, position: 'bottom-1/4 left-1/3' },
    { icon: <Code className="h-8 w-8" />, position: 'bottom-1/3 right-1/3' },
    { icon: <ShieldCheck className="h-8 w-8" />, position: 'top-3/4 left-1/2' },
    { icon: <Fingerprint className="h-8 w-8" />, position: 'top-1/2 right-3/4' },
]

export function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-foreground">
            <div className="absolute inset-0 overflow-hidden">
                {icons.map((item, index) => (
                    <div key={index} className={`absolute animate-pulse text-muted-foreground/20 ${item.position}`}>
                        {item.icon}
                    </div>
                ))}
                 <div className="absolute inset-0 bg-dot-black/[0.2] dark:bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
            </div>
            <div className="relative flex flex-col items-center gap-4 text-center animate-fade-in">
                <div className="p-4 rounded-full bg-primary/10 border-4 border-primary/20 animate-pulse">
                    <Mountain className="h-16 w-16 text-primary" />
                </div>
                <h1 className="text-2xl font-bold font-headline tracking-widest uppercase">Nikesh Bhujel</h1>
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
