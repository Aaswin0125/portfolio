import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDown, ArrowRight, Briefcase, Code, GraduationCap, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const highlightCards = [
    { icon: <Briefcase className="h-8 w-8 text-primary" />, title: "5+ Years", description: "Industry Experience" },
    { icon: <Code className="h-8 w-8 text-primary" />, title: "20+", description: "Projects Completed" },
    { icon: <GraduationCap className="h-8 w-8 text-primary" />, title: "500+", description: "Students Taught" },
    { icon: <Star className="h-8 w-8 text-primary" />, title: "Open Source", description: "Contributor" },
]

export function HomeSection() {
  return (
    <section id="home" className="relative w-full h-dvh min-h-[700px] flex items-center justify-center bg-gradient-to-b from-background to-secondary/30">
        <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                    Nikesh Bhujel
                    </h1>
                    <p className="mx-auto max-w-[700px] text-primary md:text-xl font-semibold">
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
                    <Card key={card.title} className="bg-background/50 backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                           {card.icon}
                        </CardHeader>
                        <CardContent>
                           <div className="text-2xl font-bold font-headline">{card.title}</div>
                           <p className="text-xs text-muted-foreground">{card.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <Link href="#about" aria-label="Scroll to about section">
                <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
            </Link>
        </div>
    </section>
  );
}
