import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"

const blogPosts = [
  {
    title: "Demystifying Async/Await in JavaScript",
    intro: "A deep dive into how asynchronous operations work in JavaScript and how to master them.",
    image: "https://placehold.co/600x400.png",
    aiHint: "code abstract",
    url: "#"
  },
  {
    title: "My Entrepreneurial Journey: Lessons Learned",
    intro: "Reflections on the ups and downs of building a startup from the ground up.",
    image: "https://placehold.co/600x400.png",
    aiHint: "startup office",
    url: "#"
  },
  {
    title: "Effective Teaching Strategies for Technical Subjects",
    intro: "Tips and techniques for educators to make complex technical topics engaging and accessible.",
    image: "https://placehold.co/600x400.png",
    aiHint: "classroom presentation",
    url: "#"
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Blog</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">From my Desk</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Thoughts on technology, education, and professional growth.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {blogPosts.map(post => (
            <Card key={post.title} className="overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <Link href={post.url} className="block aspect-video relative">
                  <Image src={post.image} alt={post.title} fill className="object-cover" data-ai-hint={post.aiHint} />
                </Link>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">
                  <Link href={post.url} className="hover:text-primary transition-colors">{post.title}</Link>
                </CardTitle>
                <p className="text-muted-foreground">{post.intro}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href={post.url}>
                    Read More <ArrowUpRight className="ml-1 h-4 w-4" />
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
