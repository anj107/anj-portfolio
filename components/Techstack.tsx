
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'
import { InView } from '@/components/ui/in-view';
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
            <section className=" mask-y-from-80% mask-y-to-100% scroll-mt-24 border-t py-12 md:py-20 sm:py-24">
                <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                    <div className="relative">
                           <h1 className="text-center text-4xl font-bold lg:text-5xl">Tech Stack</h1>
                            <p className="mt-4 text-center">Prgramming languages & Tools I have used. </p>
                    </div>
                    <div className="flex flex-col items-center gap-6 md:flex-row">
                        <div className="relative isolate w-full justify-center overflow-hidden py-2 md:w-[calc(100%-5rem)]">
                            <InfiniteSlider speedOnHover={20} speed={40} gap={75}>
                                {techLogos.map((logo) => (
                                <div
                                    key={logo.name}
                                    className="mx-1 flex h-30 items-center justify-center rounded-md  px-2 py-2"
                                >
                                    <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={logo.width}
                                    height={logo.height}
                                    className="h-30 w-auto object-contain md:h-30 lg:h-30"
                                />
                            </div>
                            ))}
                            </InfiniteSlider>
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
