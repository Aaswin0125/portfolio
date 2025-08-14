import Image from "next/image";
import { Button } from "./ui/button";
import { Download, Coffee, Zap, Rocket } from "lucide-react";

const funFacts = [
  { icon: <Coffee className="h-5 w-5 text-primary" />, text: "Fueled by coffee and a love for clean code." },
  { icon: <Zap className="h-5 w-5 text-primary" />, text: "Enjoys experimenting with new technologies on weekends." },
  { icon: <Rocket className="h-5 w-5 text-primary" />, text: "Passionate about space exploration and sci-fi movies." },
]

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">About Me</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Story: Code, Teach, Innovate</h2>
              <div className="space-y-4 text-muted-foreground md:text-lg/relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Who I am</h3>
                  <p>I'm a Computer Engineer by training and an entrepreneur at heart. My journey into the world of technology was sparked by a deep curiosity for how things work, which quickly evolved into a passion for building and creating.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">What I do</h3>
                  <p>I build robust software solutions that solve real-world problems. As an educator, I design and deliver engaging technical workshops. As an entrepreneur, I lead ventures that aim to innovate within the tech and education spaces.</p>
                </div>
                 <div>
                  <h3 className="font-semibold text-foreground mb-1">Why I do it</h3>
                  <p>I believe in the power of technology to be a great equalizer. My goal is to not only build impactful products but also to empower others with the knowledge and skills to create their own innovations.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
                <h3 className="font-headline text-xl font-semibold">A Few Fun Facts</h3>
                <ul className="space-y-2">
                    {funFacts.map(fact => (
                        <li key={fact.text} className="flex items-center gap-3">
                            {fact.icon}
                            <span className="text-muted-foreground">{fact.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="/nikesh-bhujel-cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
             <Image
              src="https://placehold.co/450x450.png"
              width={450}
              height={450}
              alt="Nikesh Bhujel"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
