import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowUpRight, Mail } from "lucide-react"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"

const featuredPost = {
  title: "The Future of EdTech: An Entrepreneur's Perspective",
  intro: "Exploring the trends and innovations shaping the future of education technology, from AI-powered learning platforms to the metaverse classroom.",
  image: "https://placehold.co/1200x600.png",
  aiHint: "futuristic education technology",
  url: "#",
  tags: ["EdTech", "Entrepreneurship", "Innovation"],
}

const blogPosts = [
  {
    title: "10 Essential Coding Tips for Beginners",
    intro: "Jumpstart your coding journey with these practical tips for writing cleaner and more efficient code.",
    image: "https://placehold.co/600x400.png",
    aiHint: "code editor abstract",
    url: "#",
    tags: ["Coding", "Beginners"],
  },
  {
    title: "Why Every Developer Should Understand Product Management",
    intro: "Bridging the gap between development and business goals for more impactful software.",
    image: "https://placehold.co/600x400.png",
    aiHint: "whiteboard strategy session",
    url: "#",
    tags: ["Development", "Product"],
  },
  {
    title: "My Journey into Machine Learning",
    intro: "A personal account of diving into the world of AI, from the first algorithm to building complex models.",
    image: "https://placehold.co/600x400.png",
    aiHint: "neural network visualization",
    url: "#",
    tags: ["AI/ML", "Career"],
  },
]

const allTags = ["EdTech", "Entrepreneurship", "Innovation", "Coding", "Beginners", "Development", "Product", "AI/ML", "Career"];

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

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="grid lg:grid-cols-2 overflow-hidden group">
            <div className="relative aspect-video">
                <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={featuredPost.aiHint}/>
            </div>
            <div className="p-8 flex flex-col justify-center">
                 <div className="flex flex-wrap gap-2 mb-2">
                    {featuredPost.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                 </div>
                <CardTitle className="font-headline text-3xl mb-4">{featuredPost.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground mb-6">{featuredPost.intro}</CardDescription>
                <CardFooter className="p-0">
                    <Button asChild size="lg">
                        <Link href={featuredPost.url}>
                            Read Full Story <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </CardFooter>
            </div>
          </Card>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-16">
            <aside className="lg:col-span-4">
                <div className="sticky top-28 space-y-8">
                     <div>
                        <h3 className="text-2xl font-bold font-headline mb-4">Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            {allTags.map(tag => (
                                <Button key={tag} variant="ghost" size="sm" className="bg-secondary hover:bg-secondary/80">{tag} (3)</Button>
                            ))}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold font-headline mb-4">Stay Updated</h3>
                        <Card>
                            <CardHeader>
                                <CardTitle>Newsletter</CardTitle>
                                <CardDescription>Get my latest articles delivered to your inbox.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="flex space-x-2">
                                    <Input type="email" placeholder="Enter your email" className="flex-1" />
                                    <Button type="submit"><Mail className="h-4 w-4" /></Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </aside>
            <div className="lg:col-span-8">
                <div className="grid gap-8 sm:grid-cols-1">
                  {blogPosts.map(post => (
                    <Card key={post.title} className="overflow-hidden flex flex-col sm:flex-row group">
                      <div className="sm:w-1/3 relative aspect-video sm:aspect-square">
                        <Link href={post.url} className="block h-full w-full">
                          <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={post.aiHint} />
                        </Link>
                      </div>
                      <div className="sm:w-2/3 flex flex-col">
                        <CardHeader className="flex-grow">
                          <CardTitle className="font-headline text-xl mb-2">
                            <Link href={post.url} className="hover:text-primary transition-colors">{post.title}</Link>
                          </CardTitle>
                          <CardDescription className="text-muted-foreground">{post.intro}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button asChild variant="link" className="p-0 h-auto group-hover:text-primary transition-colors">
                            <Link href={post.url}>
                              Read More <ArrowUpRight className="ml-1 h-4 w-4 transform-gpu group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </div>
                    </Card>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
