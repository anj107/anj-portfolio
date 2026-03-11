"use client";

import { useEffect, useMemo, useState } from "react";

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
  id: string;
  title: string;
  time: string;
  subtitle: string;
  summary: string;
  details: string[];
  coverimage: string;
  images: string[];
  tags: string[];
  techstack: string[];
};

type ApiProject = {
  id: string;
  title: string | null;
  subtitle: string | null;
  time: string | null;
  summary: string | null;
  details: string[] | null;
  coverimage: string | null;
  images: string[] | null;
  tags: string[] | null;
  techstack: string[] | null;
};

function toSectionItem(item: ApiProject): SectionItem {
  return {
    id: item.id,
    title: item.title ?? "Untitled",
    subtitle: item.subtitle ?? "",
    time: item.time ?? "",
    summary: item.summary ?? "",
    details: item.details ?? [],
    coverimage: item.coverimage ?? "/Me/profile.JPG",
    images: (item.images && item.images.length > 0 ? item.images : [item.coverimage ?? "/Me/profile.JPG"]),
    tags: item.tags ?? [],
    techstack: item.techstack ?? [],
  };
}

function isLeadershipItem(item: SectionItem) {
  const lowerTags = item.tags.map((tag) => tag.toLowerCase());
  return lowerTags.includes("leadership") || lowerTags.includes("activity");
}

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
        <Tilt className="h-full" rotationFactor={8} isRevese>
          <Card className="group h-full flex flex-col overflow-hidden border border-border/70 bg-card/90 pt-6 shadow-sm shadow-primary/5 transition-all duration-300 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/15">
            <MorphingDialogImage
              src={item.coverimage}
              alt={item.title}
              className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />

            <CardHeader className="space-y-2">
              <CardAction>
                <Badge variant="secondary">
                  {(item.tags[0] ?? "Project")} | <CalendarDays />{item.time}
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
  const [items, setItems] = useState<SectionItem[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProjects() {
      try {
        const res = await fetch("/api/projects", { signal: controller.signal });
        if (!res.ok) {
          return;
        }

        const data: ApiProject[] = await res.json();
        setItems(data.map(toSectionItem));
      } catch {
      }
    }

    loadProjects();

    return () => controller.abort();
  }, []);

  const projects = useMemo(
    () => items.filter((item) => !isLeadershipItem(item)),
    [items]
  );

  const leadership = useMemo(
    () => items.filter((item) => isLeadershipItem(item)),
    [items]
  );

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
            <GradientText animationSpeed={8.5} showBorder={false}
            className="custom-class text-center text-6xl font-extrabold lg:text-5xl" style={{ textShadow: "0 0 14px var(--ring)" }}>
                Projects
            </GradientText>
                <p className="mt-4 text-center">Projects that are built during college. </p>

          <div className="pt-10 grid auto-rows-fr gap-10 md:grid-cols-2">
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
              animationSpeed={8.5}
              showBorder={false}
              className="custom-class text-center text-6xl font-extrabold lg:text-5xl"
              style={{ textShadow: "0 0 14px var(--ring)" }}
            >
                Leadership
            </GradientText>
            <div className="pt-10 grid auto-rows-fr gap-10 md:grid-cols-2">
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
