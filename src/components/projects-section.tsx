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
];

const categories = ['All', 'Apps & Software', 'Education Projects', 'Business Ventures'];

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
            <Card key={project.title} className="overflow-hidden flex flex-col group">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-start gap-4">
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
