
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'
import Image from 'next/image';


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

export default function TechLogo() {
    return (
        <section className="bg-background border-t pb-16 pt-24 lg:py-10">
                    <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
                        <div className="flex flex-col items-center gap-6 md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-2">
                                <p className="text-4xl font-semibold lg:text-2xl"><strong>Technical Stack</strong></p>
                            </div>
                                <div className="relative w-full py-8 md:w-[calc(100%-16rem)]">
                                <InfiniteSlider speedOnHover={20} speed={40} gap={75}>
                                    {techLogos.map((logo) => (
                                    <div
                                        key={logo.name}
                                        className="mx-1 flex h-20 items-center justify-center rounded-md border border-border bg-secondary px-2 py-2"
                                    >
                                        <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={logo.width}
                                        height={logo.height}
                                        className="h-10 w-auto object-contain md:h-12 lg:h-14"
                                    />
                                </div>
                                ))}
                                </InfiniteSlider>

                                <div aria-hidden className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"/>
                                <div aria-hidden className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"/>
                                <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                                </div>
                        </div>
                    </div>
                </section>
    )
}
