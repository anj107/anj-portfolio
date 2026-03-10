
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'
import { InView } from '@/components/ui/in-view';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';
import GradientText from '@/components/GradientText';

const techLogos = [
  { name: 'Python', src: '/Techstack/python.png', width: 160, height: 80 },
  { name: 'C#', src: '/Techstack/c-sharp.png', width: 160, height: 80 },
  { name: 'CSS', src: '/Techstack/css-3.png', width: 160, height: 80 },
  { name: 'HTML', src: '/Techstack/html-5.png', width: 160, height: 80 },
  { name: 'MySQL', src: '/Techstack/mysql.png', width: 160, height: 80 },
  { name: 'PostgreSQL', src: '/Techstack/postgre.png', width: 160, height: 80 },
  { name: 'Github', src: '/Techstack/github.png', width: 160, height: 80 },
  { name: 'React', src: '/Techstack/react.png', width: 160, height: 80 },
];

export default function TechLogoSection() {
    return (
        <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ margin: '0px 0px -200px 0px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <section className="z-50 mask-y-from-80% mask-y-to-100% scroll-mt-24 py-12 md:py-20 sm:py-24 ">
                <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                    <div className="relative">
                        <GradientText colors={["#5227FF","#9d659d", "#1b1235"]} animationSpeed={8.5} showBorder={false} className="text-center text-4xl font-extrabold lg:text-5xl" style={{ textShadow: "0 0 14px var(--ring)" }}>
                        Tech Stack
                        </GradientText>
                        <p className="mt-4 text-center">Programming Languages & Tools I have used. </p>
                    </div>
                    <div className="flex flex-col items-center gap-6 md:flex-row">
                        <div className="relative isolate w-full justify-center overflow-hidden py-2 md:w-[calc(100%-5rem)]">
                            <TooltipProvider>
                                <InfiniteSlider speedOnHover={20} speed={40} gap={75}>
                                    {techLogos.map((logo) => (
                                        <Tooltip key={logo.name}>
                                            <TooltipTrigger asChild>
                                                <div className="mx-1 flex h-30 items-center justify-center rounded-md px-2 py-2 shadow-lg shadow-zinc-300/20 duration-300 hover:shadow-zinc-300/40 dark:shadow-none dark:hover:shadow-zinc-300/20">
                                                    <Image
                                                        src={logo.src}
                                                        alt={logo.name}
                                                        width={logo.width}
                                                        height={logo.height}
                                                        className="h-25 w-auto object-contain sm:h-16 md:h-20"
                                                    />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{logo.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </InfiniteSlider>
                            </TooltipProvider>
                            <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-10"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-10"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </InView>
    )
}
