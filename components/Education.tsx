import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from '@/components/timeline';
import {CalendarDays} from 'lucide-react'
import { InView } from '@/components/ui/in-view';

const timelineData = [
  {
    id: 1,
    title: 'POLYTECHNIC UNIVERSITY OF THE PHILIPPINES',
    description:
      <p>Bachelor of Science in Information Technology<br/>President's Lister (2022-Present)</p>,
    time: '2022 – Present',
  },
  {
    id: 2,
    title: 'NUEVA ECIJA HIGH SCHOOL - SENIOR HIGH SCHOOL',
    description:
      <p>STEM - Senior High School<br/>With High Honors</p>,
    time: '2020 – 2022',
  },
  {
    id: 3,
    title: 'NUEVA ECIJA HIGH SCHOOL',
    description: <p>Junior High School<br/>With Honors</p>,
    time: '2016 – 2020',
  },
];

export default function Education() {
    return (
        <section id="about" className="py-12 md:py-20">
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
                      <h2 className="text-center text-4xl font-bold lg:text-5xl">About Me</h2>
                      <p className="text-sm text-xl border-l-4 pl-5 py-6 text-justify">Hi, I am <strong>Angeli V. Rivera</strong>! A 21-year-old from Nueva Ecija, Cabanatuan City, I'm currently a 4th-year Information Technology student at PUP, living in Sta. Mesa. With hands-on experience in project coordination and team leadership within academic IT projects. I have proven ability to manage timelines, ensure system quality, and communicate effectively across teams. My days are filled with coding and learning, but I always make time for my hobbies – listening to music. gaming, and talking to people online. I'm excited to see what the future holds and ready for new challenges!</p>
                  </div>
                  </InView>
              </div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <InView
                  variants={{
                    hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  }}
                  viewOptions={{ margin: '0px 0px -200px 0px' }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <h2 className="text-center text-4xl font-bold lg:text-5xl">Education</h2>
                  <div className="justify-center">
                    <Timeline className="mt-3 w-full max-w-4xl py-8">
                      {timelineData.map((item) => (
                        <TimelineItem key={item.id} className="pb-20 last:pb-0">
                          <TimelineHeader>
                            <TimelineTime><CalendarDays />{item.time}</TimelineTime>
                            <TimelineTitle>{item.title}</TimelineTitle>
                          </TimelineHeader>
                          {item.description && (
                            <TimelineDescription>{item.description}</TimelineDescription>
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
