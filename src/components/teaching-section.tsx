import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Users, Video, Award } from "lucide-react"
import Image from "next/image"

const timelineEvents = [
  {
    date: "2023 - Present",
    title: "Senior Technical Instructor, Tech Academy",
    description: "Developing and delivering advanced curriculum on full-stack web development and cloud computing.",
  },
  {
    date: "2021 - 2023",
    title: "Corporate Trainer, CodeCorp",
    description: "Provided on-site training for engineering teams on modern JavaScript frameworks and best practices.",
  },
  {
    date: "2019 - 2021",
    title: "Workshop Facilitator, University of Technology",
    description: "Led weekly coding workshops for undergraduate students, covering topics from data structures to web fundamentals.",
  },
]

const stats = [
  { icon: <Users className="h-8 w-8 text-primary" />, value: "500+", label: "Students Taught" },
  { icon: <Video className="h-8 w-8 text-primary" />, value: "50+", label: "Workshops Conducted" },
  { icon: <Award className="h-8 w-8 text-primary" />, value: "4.9/5", label: "Average Rating" },
]

const testimonials = [
  { name: "Alice Johnson", role: "Student", text: "Nikesh has a unique ability to break down complex topics into understandable concepts. His workshops were a game-changer for my career.", avatar: "https://placehold.co/100x100.png", aiHint: "woman portrait" },
  { name: "Bob Williams", role: "Software Engineer", text: "The best instructor I've ever had. Nikesh is incredibly knowledgeable and supportive.", avatar: "https://placehold.co/100x100.png", aiHint: "man portrait" },
  { name: "Carol Davis", role: "Student", text: "I went from knowing nothing about code to building my own web app thanks to Nikesh's mentorship.", avatar: "https://placehold.co/100x100.png", aiHint: "woman smiling" },
]

export function TeachingSection() {
  return (
    <section id="teaching" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Workshops & Teaching</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Sharing Knowledge, Inspiring Growth</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My journey in education is driven by a passion for empowering others to succeed in the tech industry.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-5 lg:gap-8 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 font-headline">Experience Timeline</h3>
            <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-primary after:left-0">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative mb-8 grid grid-cols-[auto_1fr] items-start gap-4">
                  <div className="relative z-10 grid h-6 w-6 place-items-center rounded-full bg-primary">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                    <h4 className="font-bold">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 space-y-12">
            <div className="grid grid-cols-2 gap-4">
                <Image src="https://placehold.co/600x400.png" alt="Workshop photo 1" width={600} height={400} className="rounded-lg object-cover" data-ai-hint="workshop in progress" />
                <Image src="https://placehold.co/600x400.png" alt="Workshop photo 2" width={600} height={400} className="rounded-lg object-cover" data-ai-hint="speaker on stage" />
            </div>
             <div>
              <h3 className="text-2xl font-bold mb-6 font-headline">Impact by the Numbers</h3>
              <div className="grid grid-cols-3 gap-4">
                {stats.map(stat => (
                  <Card key={stat.label} className="text-center p-4">
                    {stat.icon}
                    <p className="text-2xl font-bold mt-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 font-headline">What Students Say</h3>
              <Carousel>
                <CarouselContent>
                  {testimonials.map((t) => (
                    <CarouselItem key={t.name}>
                      <Card>
                        <CardContent className="p-6">
                          <p className="mb-4 italic">"{t.text}"</p>
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarImage src={t.avatar} alt={t.name} data-ai-hint={t.aiHint} />
                              <AvatarFallback>{t.name.substring(0,2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{t.name}</p>
                              <p className="text-sm text-muted-foreground">{t.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-[-1rem]" />
                <CarouselNext className="right-[-1rem]" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
