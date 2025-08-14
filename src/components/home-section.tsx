import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDown, ArrowRight, Briefcase, Code, GraduationCap, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const highlightCards = [
    { icon: <Briefcase className="h-8 w-8 text-brand-blue" />, title: "5+ Years", description: "Industry Experience" },
    { icon: <Code className="h-8 w-8 text-brand-emerald" />, title: "20+", description: "Projects Completed" },
    { icon: <GraduationCap className="h-8 w-8 text-brand-purple" />, title: "500+", description: "Students Taught" },
    { icon: <Star className="h-8 w-8 text-brand-orange" />, title: "Open Source", description: "Contributor" },
]

export function HomeSection() {
  return (
    <section id="home" className="relative w-full h-dvh min-h-[700px] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 py-2">
                    Nikesh Bhujel
                    </h1>
                    <p className="mx-auto max-w-[700px] text-primary md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-emerald">
                    Computer Engineer, Educator, Entrepreneur
                    </p>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Building innovative solutions and empowering the next generation of tech leaders.
                    </p>
                </div>
                <div className="space-x-4 pt-4">
                    <Button asChild size="lg">
                    <Link href="#projects">
                        View My Work
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                    <Link href="#contact">Get In Touch</Link>
                    </Button>
                </div>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {highlightCards.map(card => (
                    <Card key={card.title} className="bg-background/20 dark:bg-black/10 backdrop-blur-lg border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                           {card.icon}
                           <div>
                            <div className="text-2xl font-bold font-headline">{card.title}</div>
                            <p className="text-xs text-muted-foreground">{card.description}</p>
                           </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <Link href="#about" aria-label="Scroll to about section">
                <div className="p-1 rounded-full bg-gradient-to-tr from-brand-blue to-brand-emerald animate-bounce">
                    <ArrowDown className="h-6 w-6 text-primary-foreground" />
                </div>
            </Link>
        </div>
    </section>
  );
}
