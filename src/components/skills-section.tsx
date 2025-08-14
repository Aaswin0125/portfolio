import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, GraduationCap, Briefcase, Database, Cloud, GitBranch, Mic, Presentation, Users, Lightbulb, TrendingUp, Target } from "lucide-react";
import { Progress } from "./ui/progress";


const technicalSkills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React & Next.js", level: 95 },
  { name: "Node.js & Express", level: 90 },
  { name: "Python & Django", level: 85 },
  { name: "SQL & NoSQL Databases", level: 90 },
  { name: "Docker, GCP, Firebase", level: 80 },
];

const teachingSkills = [
  { icon: <Mic className="h-8 w-8 text-primary" />, name: "Public Speaking" },
  { icon: <Presentation className="h-8 w-8 text-primary" />, name: "Curriculum Design" },
  { icon: <Users className="h-8 w-8 text-primary" />, name: "Workshop Facilitation" },
  { icon: <GraduationCap className="h-8 w-8 text-primary" />, name: "Student Mentorship" },
];

const businessSkills = [
  { icon: <Lightbulb className="h-8 w-8 text-primary" />, name: "Product Management" },
  { icon: <TrendingUp className="h-8 w-8 text-primary" />, name: "Startup Strategy" },
  { icon: <Target className="h-8 w-8 text-primary" />, name: "Agile Methodologies" },
  { icon: <Briefcase className="h-8 w-8 text-primary" />, name: "Project Leadership" },
];


export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">My Skills</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Areas of Expertise</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A versatile skill set spanning technology, education, and business.
          </p>
        </div>
        <Tabs defaultValue="technical" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="technical"><Briefcase className="mr-2 h-4 w-4" />Technical</TabsTrigger>
            <TabsTrigger value="education"><GraduationCap className="mr-2 h-4 w-4" />Education</TabsTrigger>
            <TabsTrigger value="business"><TrendingUp className="mr-2 h-4 w-4" />Business</TabsTrigger>
          </TabsList>
          <TabsContent value="technical">
            <Card>
              <CardContent className="p-6 space-y-4">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.level}%</p>
                    </div>
                    <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="education">
            <Card>
              <CardContent className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                 {teachingSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2">
                    {skill.icon}
                    <p className="font-medium">{skill.name}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="business">
            <Card>
              <CardContent className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {businessSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2">
                    {skill.icon}
                    <p className="font-medium">{skill.name}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
