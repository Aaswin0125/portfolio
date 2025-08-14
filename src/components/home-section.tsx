import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function HomeSection() {
  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Nikesh Raj Bhujel
            </h1>
            <p className="mx-auto max-w-[700px] text-primary md:text-xl font-semibold">
              Computer Engineer, Educator, Entrepreneur
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Building innovative solutions and empowering the next generation of tech leaders.
            </p>
          </div>
          <div className="space-x-4 pt-6">
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
      </div>
    </section>
  );
}
