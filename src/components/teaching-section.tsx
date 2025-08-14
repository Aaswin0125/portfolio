import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Users, Video, Award, BookOpen, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

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
  { icon: <Users className="h-8 w-8 text-brand-blue" />, value: "500+", label: "Students Taught" },
  { icon: <Video className="h-8 w-8 text-brand-emerald" />, value: "50+", label: "Workshops Conducted" },
  { icon: <Award className="h-8 w-8 text-brand-purple" />, value: "4.9/5", label: "Average Rating" },
  { icon: <Star className="h-8 w-8 text-brand-orange" />, value: "Top Instructor", label: "2023 Award" },
]

const testimonials = [
  { name: "Alice Johnson", role: "Student", text: "Nikesh has a unique ability to break down complex topics into understandable concepts. His workshops were a game-changer for my career.", avatar: "https://placehold.co/100x100.png", aiHint: "woman portrait" },
  { name: "Bob Williams", role: "Software Engineer", text: "The best instructor I've ever had. Nikesh is incredibly knowledgeable and supportive.", avatar: "https://placehold.co/100x100.png", aiHint: "man portrait" },
  { name: "Carol Davis", role: "Student", text: "I went from knowing nothing about code to building my own web app thanks to Nikesh's mentorship.", avatar: "https://placehold.co/100x100.png", aiHint: "woman smiling" },
]

const workshopImages = [
    { src: "https://placehold.co/600x400.png", alt: "Workshop photo 1", aiHint: "workshop in progress" },
    { src: "https://placehold.co/600x400.png", alt: "Workshop photo 2", aiHint: "speaker on stage" },
    { src: "https://placehold.co/600x400.png", alt: "Workshop photo 3", aiHint: "students collaborating" },
    { src: "https://placehold.co/600x400.png", alt: "Workshop photo 4", aiHint: "whiteboard discussion" },
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
            <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-primary/20 dark:after:bg-primary/10 after:left-0">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative mb-8 grid grid-cols-[auto_1fr] items-start gap-4">
                  <div className="relative z-10 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-tr from-brand-blue to-brand-emerald">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                    <h4 className="font-bold text-lg">{event.title}</h4>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 space-y-12">
            <Card className="w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold font-headline">Photo Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {workshopImages.map((img, index) => (
                      <Image key={index} src={img.src} alt={img.alt} width={600} height={400} className="rounded-lg object-cover hover:scale-105 transition-transform duration-300" data-ai-hint={img.aiHint} />
                  ))}
              </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="w-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold font-headline">Impact by the Numbers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map(stat => (
                        <div key={stat.label} className="text-center p-4 flex flex-col items-center justify-center rounded-lg bg-secondary">
                          {stat.icon}
                          <p className="text-2xl font-bold mt-2">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold font-headline">What Students Say</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Carousel>
                      <CarouselContent>
                        {testimonials.map((t) => (
                          <CarouselItem key={t.name}>
                            <div className="border-l-4 border-primary bg-secondary/30 p-6 rounded-r-lg h-full flex flex-col justify-center">
                              <p className="mb-4 text-lg italic">"{t.text}"</p>
                              <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                  <AvatarImage src={t.avatar} alt={t.name} data-ai-hint={t.aiHint} />
                                  <AvatarFallback>{t.name.substring(0,2)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-semibold text-lg">{t.name}</p>
                                  <p className="text-sm text-muted-foreground">{t.role}</p>
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-[-1rem] top-1/2 -translate-y-1/2" />
                      <CarouselNext className="right-[-1rem] top-1/2 -translate-y-1/2" />
                    </Carousel>
                  </CardContent>
                </Card>
            </div>
            <Card className="w-full">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4 font-headline">Ready to Learn?</h3>
                <p className="text-muted-foreground mb-6">Check out my upcoming workshops or request a custom training session.</p>
                <div className="flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="#">
                            <BookOpen className="mr-2 h-5 w-5" /> View Workshops
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="#contact">Corporate Training</Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
