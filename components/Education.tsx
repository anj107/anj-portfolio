import { Timeline, TimelineItem, TimelineHeader, TimelineTime, TimelineTitle, TimelineDescription, TimelineContent } from '@/components/ui/timeline';
import {CalendarDays} from 'lucide-react'
import { InView } from '@/components/ui/in-view';
import Image from 'next/image';
import GradientText from '@/components/GradientText';


const timelineData = [
  {
    id: 1,
    title: 'POLYTECHNIC UNIVERSITY OF THE PHILIPPINES',
    description:
      <p>Bachelor of Science in Information Technology<br/>President's Lister (2022-Present)</p>,
    time: '2022 – Present',
    src: '/Me/pup.svg',
  },
  {
    id: 2,
    title: 'NUEVA ECIJA HIGH SCHOOL - SENIOR HIGH SCHOOL',
    description:
      <p>STEM - Senior High School<br/>With High Honors</p>,
    time: '2020 – 2022',
    src: '/Me/nehs.png',
  },
  {
    id: 3,
    title: 'NUEVA ECIJA HIGH SCHOOL',
    description: <p>Junior High School<br/>With Honors</p>,
    time: '2016 – 2020',
    src: '/Me/nehs.png',
  },
];

export default function EducationSection() {
    return (
        <section id="about" className="scroll-mt-24 py-12 md:py-20 sm:py-24">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
              <div>
                  <InView
                    variants={{
                      hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    }}
                    viewOptions={{ margin: '0px 0px -200px 0px' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                  <div className="relative">
                        <GradientText animationSpeed={8.5} showBorder={false} className="text-center text-4xl font-extrabold lg:text-5xl" style={{ textShadow: "0 0 14px var(--ring)" }}>
                          About Me
                      </GradientText>
                      <p className="text-sm text-xl border-l-4 pl-5 py-6 text-justify">Hi, I am <strong>Angeli V. Rivera</strong>! A 21-year-old from Nueva Ecija, Cabanatuan City, I'm currently a 4th-year Information Technology student at PUP, living in Sta. Mesa. With hands-on experience in project coordination and team leadership within academic IT projects. I have proven ability to manage timelines, ensure system quality, and communicate effectively across teams. My days are filled with coding and learning, but I always make time for my hobbies – listening to music. gaming, and talking to people online. I'm excited to see what the future holds and ready for new challenges!</p>
                  </div>
                  </InView>
              </div>
            <div className="relative z-10 mx-auto w-full max-w-4xl">
                <InView
                  variants={{
                    hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  }}
                  viewOptions={{ margin: '0px 0px -200px 0px' }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                <GradientText animationSpeed={8.5} showBorder={false} className="text-center text-4xl font-extrabold lg:text-5xl" style={{ textShadow: "0 0 14px var(--ring)" }}>
                  Education</GradientText>
                  <div className="justify-center">
                    <Timeline className="mt-6 w-full max-w-4xl py-6">
                      {timelineData.map((item) => (
                        <TimelineItem key={item.id} className="pb-12 md:pb-14 last:pb-0">
                          <TimelineHeader>
                            <TimelineTime><CalendarDays />{item.time}</TimelineTime>
                            <TimelineTitle>{item.title}</TimelineTitle>
                          </TimelineHeader>
                          {item.description && (
                            <TimelineDescription>
                              <TimelineContent>
                                <div className="space-y-1 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</div>
                                <div className="h-20 w-20 shrink-0 items-center justify-center rounded-xl shadow-sm md:flex">
                                  <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={64}
                                    height={64}
                                    className="h-20 w-auto object-contain rounded-full"
                                  />
                                </div>
                              </TimelineContent>
                            </TimelineDescription>
                          )}
                        </TimelineItem>
                      ))}
                    </Timeline>
                  </div>
                </InView>
              </div>
            </div>
        </section>
    )
}
