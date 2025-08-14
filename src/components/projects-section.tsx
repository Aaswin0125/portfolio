"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowUpRight } from 'lucide-react';

const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive personal portfolio to showcase my skills and projects.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'website screenshot',
    tags: ['Web App', 'Next.js', 'React', 'TailwindCSS'],
    liveUrl: '#',
    repoUrl: '#',
    category: 'Web App',
  },
  {
    title: 'E-Learning Platform',
    description: 'An online platform for interactive courses and workshops with video streaming and quizzes.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'e-learning dashboard',
    tags: ['Web App', 'Python', 'Django', 'React'],
    liveUrl: '#',
    repoUrl: '#',
    category: 'Web App',
  },
  {
    title: 'Mobile Fitness Tracker',
    description: 'A cross-platform mobile app to track workouts, nutrition, and progress.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'mobile app fitness',
    tags: ['Mobile', 'React Native', 'Firebase'],
    liveUrl: '#',
    repoUrl: null,
    category: 'Mobile',
  },
  {
    title: 'Open Source Sorting Visualizer',
    description: 'A tool to visualize various sorting algorithms, contributed to the open-source community.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'data visualization chart',
    tags: ['Open Source', 'JavaScript', 'HTML5 Canvas'],
    liveUrl: '#',
    repoUrl: '#',
    category: 'Open Source',
  },
];

const categories = ['All', 'Web App', 'Mobile', 'Open Source'];

export function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projectsData.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">My Work</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of projects that demonstrate my passion for creating meaningful technology.
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-8">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.title} className="overflow-hidden flex flex-col">
              <CardHeader>
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-4">
                {project.liveUrl && (
                  <Button asChild>
                    <Link href={project.liveUrl}>Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button asChild variant="ghost">
                    <Link href={project.repoUrl}>GitHub Repo</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
