import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin, Instagram, Calendar } from "lucide-react";
import { ContactForm } from "./contact-form";

const socialLinks = [
  { name: "GitHub", icon: <Github />, url: "#" },
  { name: "LinkedIn", icon: <Linkedin />, url: "#" },
  { name: "Instagram", icon: <Instagram />, url: "#" },
];

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Let's Connect</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind, a question, or just want to say hi? I'm always open to discussing new opportunities and collaborations.
            </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactForm />
          </div>
          <div className="space-y-6 flex flex-col items-center justify-center text-center">
             <div className="space-y-4">
                <h3 className="text-2xl font-bold font-headline">Schedule a Chat</h3>
                <p className="text-muted-foreground">Find a time on my calendar that works for you.</p>
                <Button size="lg" asChild>
                    <Link href="#" target="_blank">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book via Calendly
                    </Link>
                </Button>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold font-headline">Follow Me</h3>
                 <div className="flex items-center justify-center space-x-4">
                    {socialLinks.map(social => (
                        <Button key={social.name} variant="outline" size="icon" asChild>
                        <Link href={social.url} target="_blank" aria-label={social.name}>
                            {social.icon}
                        </Link>
                        </Button>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
