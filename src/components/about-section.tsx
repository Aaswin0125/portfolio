import Image from "next/image";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex items-center justify-center">
             <Image
              src="https://placehold.co/550x550.png"
              width={550}
              height={550}
              alt="Nikesh Raj Bhujel"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">About Me</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Passion for Technology and Education</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am a passionate Computer Engineer with a drive for building innovative solutions and sharing my knowledge with others. My journey has led me through the worlds of software development, entrepreneurship, and education, where I strive to make a positive impact by creating user-centric products and fostering learning communities. I believe in the power of technology to solve real-world problems and am dedicated to lifelong learning and growth.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="/nikesh-raj-bhujel-cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
