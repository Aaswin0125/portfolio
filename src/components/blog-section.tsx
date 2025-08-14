import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"

const blogPosts = [
  {
    title: "10 Essential Coding Tips for Beginners",
    intro: "Jumpstart your coding journey with these practical tips for writing cleaner and more efficient code.",
    image: "https://placehold.co/600x400.png",
    aiHint: "code editor abstract",
    url: "#"
  },
  {
    title: "The Future of EdTech: An Entrepreneur's Perspective",
    intro: "Exploring the trends and innovations shaping the future of education technology.",
    image: "https://placehold.co/600x400.png",
    aiHint: "futuristic education technology",
    url: "#"
  },
  {
    title: "Why Every Developer Should Understand Product Management",
    intro: "Bridging the gap between development and business goals for more impactful software.",
    image: "https://placehold.co/600x400.png",
    aiHint: "whiteboard strategy session",
    url: "#"
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Blog & Insights</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">From my Desk</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Thoughts on technology, education, entrepreneurship, and innovation.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {blogPosts.map(post => (
            <Card key={post.title} className="overflow-hidden flex flex-col group">
              <CardHeader className="p-0">
                <Link href={post.url} className="block aspect-video relative overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={post.aiHint} />
                </Link>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">
                  <Link href={post.url} className="hover:text-primary transition-colors">{post.title}</Link>
                </CardTitle>
                <p className="text-muted-foreground">{post.intro}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto group-hover:text-primary transition-colors">
                  <Link href={post.url}>
                    Read More <ArrowUpRight className="ml-1 h-4 w-4 transform-gpu group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
