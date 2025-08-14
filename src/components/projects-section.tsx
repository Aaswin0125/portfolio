"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projectsData = [
  {
    title: 'E-Learning Platform',
    description: 'An online platform for interactive courses and workshops with video streaming and quizzes.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'e-learning dashboard',
    tags: ['Next.js', 'React', 'Firebase', 'Stripe'],
    liveUrl: '#',
    caseStudyUrl: '#',
    repoUrl: '#',
    category: 'Apps & Software',
  },
  {
    title: 'AI-Powered Code Assistant',
    description: 'A VS Code extension that provides intelligent code suggestions and refactoring.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'AI code editor',
    tags: ['AI/ML', 'TypeScript', 'VS Code API'],
    liveUrl: '#',
    caseStudyUrl: '#',
    repoUrl: '#',
    category: 'AI/ML',
  },
  {
    title: 'Mobile Fitness Tracker',
    description: 'A cross-platform mobile app to track workouts, nutrition, and progress.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'mobile app fitness',
    tags: ['React Native', 'Firebase', 'GraphQL'],
    liveUrl: '#',
    caseStudyUrl: null,
    repoUrl: '#',
    category: 'Apps & Software',
  },
  {
    title: 'EdTech Startup',
    description: 'Co-founded a startup to provide accessible coding education to underserved communities.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'startup team meeting',
    tags: ['Business', 'Strategy', 'Product Management'],
    liveUrl: '#',
    caseStudyUrl: '#',
    repoUrl: null,
    category: 'Business Ventures',
  },
  {
    title: 'Full-Stack Development Bootcamp',
    description: 'Designed and led a 12-week immersive bootcamp covering the MERN stack.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'classroom coding',
    tags: ['Curriculum Design', 'Teaching', 'Mentorship'],
    liveUrl: null,
    caseStudyUrl: '#',
    repoUrl: null,
    category: 'Education Projects',
  },
  {
    title: 'Sentiment Analysis API',
    description: 'A RESTful API that analyzes text and returns its sentiment polarity.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'text analysis graph',
    tags: ['AI/ML', 'Python', 'Flask', 'NLTK'],
    liveUrl: '#',
    caseStudyUrl: '#',
    repoUrl: '#',
    category: 'AI/ML',
  }
];

const categories = ['All', 'Apps & Software', 'AI/ML', 'Education Projects', 'Business Ventures'];

export function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projectsData.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">My Work</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of projects that demonstrate my passion for creating meaningful technology.
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.title} className="group overflow-hidden relative">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.aiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                 <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">{tag}</Badge>)}
                    </div>
                    <CardTitle className="font-headline text-2xl text-white">{project.title}</CardTitle>
                </div>
              </div>
              <div className="absolute inset-0 bg-background/90 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex justify-center gap-4">
                      {project.liveUrl && (
                        <Button asChild>
                          <Link href={project.liveUrl} target="_blank">Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                      )}
                      {project.caseStudyUrl && (
                        <Button asChild variant="secondary">
                           <Link href={project.caseStudyUrl} target="_blank">Case Study</Link>
                        </Button>
                      )}
                      {project.repoUrl && (
                        <Button asChild variant="ghost">
                          <Link href={project.repoUrl} target="_blank">GitHub Repo</Link>
                        </Button>
                      )}
                  </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
