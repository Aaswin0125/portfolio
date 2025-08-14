import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, GraduationCap, Briefcase, Database, Cloud, GitBranch, Mic, Presentation, Users, Lightbulb, TrendingUp, Target } from "lucide-react";

const technicalSkills = [
  { icon: <Code className="h-6 w-6 text-primary" />, name: "Frontend", description: "React, Next.js, TypeScript, TailwindCSS" },
  { icon: <Database className="h-6 w-6 text-primary" />, name: "Backend", description: "Node.js, Python, Firebase, SQL/NoSQL" },
  { icon: <Cloud className="h-6 w-6 text-primary" />, name: "DevOps & Cloud", description: "Docker, GCP, Vercel, CI/CD" },
  { icon: <GitBranch className="h-6 w-6 text-primary" />, name: "Version Control", description: "Git, GitHub" },
];

const teachingSkills = [
  { icon: <Mic className="h-6 w-6 text-primary" />, name: "Public Speaking" },
  { icon: <Presentation className="h-6 w-6 text-primary" />, name: "Curriculum Design" },
  { icon: <Users className="h-6 w-6 text-primary" />, name: "Workshop Facilitation" },
  { icon: <GraduationCap className="h-6 w-6 text-primary" />, name: "Student Mentorship" },
];

const businessSkills = [
  { icon: <Lightbulb className="h-6 w-6 text-primary" />, name: "Product Management" },
  { icon: <TrendingUp className="h-6 w-6 text-primary" />, name: "Startup Strategy" },
  { icon: <Target className="h-6 w-6 text-primary" />, name: "Agile Methodologies" },
  { icon: <Briefcase className="h-6 w-6 text-primary" />, name: "Project Leadership" },
];


export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">My Skills</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Areas of Expertise</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A versatile skill set spanning technology, education, and business.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <Card>
            <CardHeader className="items-center">
              <Briefcase className="h-10 w-10 mb-2 text-primary" />
              <CardTitle className="font-headline text-2xl">Technical</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="flex items-start gap-4">
                  {skill.icon}
                  <div>
                    <h3 className="font-semibold">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center">
              <GraduationCap className="h-10 w-10 mb-2 text-primary" />
              <CardTitle className="font-headline text-2xl">Teaching &amp; Mentorship</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               {teachingSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4">
                  {skill.icon}
                  <p className="font-medium">{skill.name}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center">
              <TrendingUp className="h-10 w-10 mb-2 text-primary" />
              <CardTitle className="font-headline text-2xl">Business &amp; Entrepreneurship</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {businessSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4">
                  {skill.icon}
                  <p className="font-medium">{skill.name}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
