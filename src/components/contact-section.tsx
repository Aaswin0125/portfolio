import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Calendar } from "lucide-react";
import { ContactForm } from "./contact-form";

const socialLinks = [
  { name: "GitHub", icon: <Github />, url: "#" },
  { name: "LinkedIn", icon: <Linkedin />, url: "#" },
  { name: "Twitter", icon: <Twitter />, url: "#" },
];

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Let's Connect</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind, a question, or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map(social => (
                <Button key={social.name} variant="outline" size="icon" asChild>
                  <Link href={social.url} target="_blank" aria-label={social.name}>
                    {social.icon}
                  </Link>
                </Button>
              ))}
            </div>
             <div className="pt-4">
               <Button size="lg" asChild>
                <Link href="#" target="_blank">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Meeting
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
