"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from "@/components/motion-primitives/morphing-dialog";
import { CalendarDays } from "lucide-react";
import { InView } from "./ui/in-view";
import { Tilt } from '@/components/motion-primitives/tilt';
import GradientText from '@/components/GradientText';
import { motion } from 'motion/react';


type SectionItem = {
  id: number;
  title: string;
  time: string;
  subtitle: string;
  summary: string;
  details: string[];
  coverImage: string;
  images: string[];
  tag: string;
  techstack: string[];
};

const projects: SectionItem[] = [
  {
    id: 1,
    title: "GLOBALINKED: A Linkage Agreement Monitoring System",
    subtitle: "Project Manager & Backend Developer",
    time: "2025 - Present",
    summary:
      "Built Globalinked for the Office of International Affairs to monitor and manage linkage agreements.",
    details: [
      "Led a 4-member team through planning, task delegation, and progress monitoring.",
      "Designed and implemented Python backend components using MVC architecture.",
      "Handled QA with module testing, test cases, troubleshooting, and deployment.",
    ],
    coverImage: "/imgs-proj/Globalinked/homepage.png", 
        images: [
            "/imgs-proj/Globalinked/homepage.png",
            "/imgs-proj/Globalinked/partners.png", 
            "/imgs-proj/Globalinked/overview.png",
            "/imgs-proj/Globalinked/active.png"
    ],
    tag: "Capstone",
    techstack: ["HTML", "CSS", "Python", "Javascript"],
  },
  {
    id: 2,
    title: "CCIS Student Management System",
    subtitle: "Project Manager and Developer",
    time: "2023 - 2024",
    summary:
      "An academic portal for course management, assessments, grading, and attendance.",
    details: [
      "Developed core modules using HTML, CSS, and PHP.",
      "Led a team of 7 in planning, task delegation, and progress monitoring.",
      "Contributed features for course, grading, and attendance workflows."
      
    ],
    coverImage: "/imgs-proj/CCIS-SMS/homepage-sms.png",
    images: [
      "/imgs-proj/CCIS-SMS/homepage-sms.png",
      "/imgs-proj/CCIS-SMS/login-sms.png",
      "/imgs-proj/CCIS-SMS/dashboard-sms.png",
      "/imgs-proj/CCIS-SMS/teacher-tab.png",
      "/imgs-proj/CCIS-SMS/messages-sms.png"
    ],
    tag: "Project",
    techstack: ["HTML", "CSS", "PHP"],
  },
];

const leadership: SectionItem[] = [
  {
    id: 1,
    title: "IT Students Research Colloquium",
    time: "2025",
    subtitle: "Student Speaker",
    summary:
      "Presented GLOBALINKED at the CCIS 39th Anniversary event at PUP.",
    details: [
      "Presented the capstone study titled GLOBALINKED: A Linkage Agreement Monitoring System for CCIS's 3rd year students.",
      "Recognized with a Certificate of Recognition for academic presentation."
    ],
    coverImage: "/imgs-proj/Leadership/rq2.JPG",
    images: [
      "/imgs-proj/Leadership/rq2.JPG",
      "/imgs-proj/Leadership/rq3.JPG",
    "/imgs-proj/Leadership/rq4.JPG",
      "/imgs-proj/Leadership/rq5.JPG",
    ],
    tag: "Activity",
    techstack: ["Leadership", "Communication"],
  },
  {
    id: 2,
    title: "PUP The Programmers Guild",
    subtitle: "Assistant VP for Membership & Student Affairs",
    time: "2023 - 2024",
    summary:
      "Managed onboarding and supported activities for members each semester.",
    details: [
      "Managed member onboarding for 50+ applicants with the MSA team.",
      "Maintained and updated the organization's digital membership database.",
      "Assisted in planning and supporting organizational events and activities."
      
    ],
    coverImage: "/imgs-proj/Leadership/TPG.JPG",
    images: [
      "/imgs-proj/Leadership/TPG.JPG",
      "/imgs-proj/Leadership/TPG1.JPG",
    ],
    tag: "Leadership",
    techstack: ["Leadership", "Organization"],
  
  },
];

function DetailDialogCard({ item, index }: { item: SectionItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -120px 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <MorphingDialog>
        <Tilt rotationFactor={8} isRevese>
          <Card className={cardClassName}>
            <MorphingDialogImage
              src={item.coverImage}
              alt={item.title}
              className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />

            <CardHeader className="space-y-2">
              <CardAction>
                <Badge variant="secondary">
                  {item.tag} | <CalendarDays />{item.time}
                </Badge>
              </CardAction>
              <CardTitle className="text-base md:text-lg">{item.title}</CardTitle>
              <CardDescription className="text-sm">{item.subtitle}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col justify-between space-y-3">
              <p className="text-sm text-muted-foreground">{item.summary}</p>
              <div className="flex flex-wrap gap-2">
                {item.techstack.map((techstack, techIndex) => (
                  <Badge key={techIndex} variant="outline">
                    {techstack}
                  </Badge>
                ))}
              </div>
              <div className="border-t pt-4 flex justify-center">
                <MorphingDialogTrigger>
                  <Button size="sm" variant="default" className="py-2 hover:bg-accent-foreground">
                    View details
                  </Button>
                </MorphingDialogTrigger>
              </div>
            </CardContent>
          </Card>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative w-[min(92vw,820px)] rounded-2xl border bg-background shadow-2xl">
          <MorphingDialogClose className="right-4 top-4 rounded-full border bg-background p-1.5" />
          <div className="space-y-5 p-6">
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground ">{item.subtitle} | {item.time}</p>

            <Carousel className="w-full">
              <CarouselContent>
                {item.images.map((image, index) => (
                  <CarouselItem key={`${item.id}-${index}`}>
                    <img
                      src={image}
                      alt={`${item.title} image ${index + 1}`}
                      className="aspect-video w-full rounded-lg object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-1/2 z-10 -translate-y-1/2" />
              <CarouselNext className="right-2 top-1/2 z-10 -translate-y-1/2" />
            </Carousel>

            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              {item.details.map((detail, index) => (
                <li key={`${item.id}-detail-${index}`}>{detail}</li>
              ))}
            </ul>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
      </Tilt>
      </MorphingDialog>
    </motion.div>
  );
}

export function ProjectSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-12 md:py-20 sm:py-24">
      <div className="@container mx-auto max-w-5xl px-6 ">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <GradientText colors={["#5227FF","#9d659d", "#1b1235"]} animationSpeed={8.5} showBorder={false}
            className="custom-class text-center text-6xl font-extrabold lg:text-5xl" style={{ textShadow: "0 0 14px var(--ring)" }}>
                Projects
            </GradientText>
                <p className="mt-4 text-center">Projects that are built during college. </p>

          <div className="pt-10 grid gap-10 md:grid-cols-2">
            {projects.map((item, index) => (
              <DetailDialogCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="pt-15 space-y-8">
            <GradientText
              colors={["#5227FF", "#9d659d", "#1b1235"]}
              animationSpeed={8.5}
              showBorder={false}
              className="custom-class text-center text-6xl font-extrabold lg:text-5xl"
              style={{ textShadow: "0 0 14px var(--ring)" }}
            >
                Leadership
            </GradientText>
            <div className="pt-10 grid gap-10 md:grid-cols-2">
              {leadership.map((item, index) => (
                <DetailDialogCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
