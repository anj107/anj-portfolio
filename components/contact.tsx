
import { Card, CardContent, CardHeader,CardDecorator } from '@/components/ui/card'
import { Mail, Facebook, Github, Linkedin, Phone } from 'lucide-react'
import { ReactNode } from 'react'
import { InView } from './ui/in-view'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group';


export default function ContactSection() {
    return (
        <section id="contact" className="scroll-mt-24 border-t py-12 md:py-20 sm:py-24">
        <InView
                    variants={{
                      hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    }}
                    viewOptions={{ margin: '0px 0px -200px 0px' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >

            <div className="@container mx-auto max-w-5xl px-6 " >
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">Contact Me</h1>
                <p className="mt-4 text-center">Let's get to know each other.</p>

            <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid w-full max-w-6xl gap-6 *:text-center md:mt-16 md:grid-cols-2 lg:grid-cols-3">
                      <Card className="group h-[150px] shadow-zinc-950/5">
                          <CardHeader className="gap-2 pb-3">
                        <CardDecorator>
                            <Mail
                                className="size-6"
                                aria-hidden
                            />
                        </CardDecorator>

                        <h3 className="mt-0 font-medium">
                            <a href="mailto:angelivaldezrivera@gmail.com" target="_blank" rel="noopener noreferrer" className='hover:text-primary'>
                                angelivaldezrivera@gmail.com
                            </a>
                        </h3>
                    </CardHeader>
                </Card>

                <Card className="group h-[150px] shadow-zinc-950/5">
                    <CardHeader className="gap-2 pb-3">
                        <CardDecorator>
                            <Phone
                                className="size-6"
                                aria-hidden
                            />
                            
                        </CardDecorator>

                        <h3 className="mt-0 font-medium">
                            <a href="tel:+639254883603" target="_blank" rel="noopener noreferrer" className='hover:text-primary'>
                                0925 488 3603
                            </a>
                        </h3>
                    </CardHeader>
                </Card>

                <Card className="group h-[150px] shadow-zinc-950/5">
                    <CardHeader className="gap-2 pb-3">
                        <CardDecorator>
                            <Linkedin
                                className="size-6"
                                aria-hidden
                            />
                        </CardDecorator>

                        <h3 className="mt-0 font-medium">
                            <a href="https://www.linkedin.com/in/angeli-rivera-171930" target="_blank" rel="noopener noreferrer" className='hover:text-primary'>
                                LinkedIn
                            </a>
                        </h3>
                    </CardHeader>
                </Card>

                <Card className="group h-[150px] shadow-zinc-950/5">
                    <CardHeader className="gap-2 pb-3">
                        <CardDecorator>
                            <Facebook
                                className="size-6"
                                aria-hidden
                            />
                        </CardDecorator>

                        <h3 className="mt-0 font-medium">
                            <a href="https://www.facebook.com/angeli.rivera.171930" target="_blank" rel="noopener noreferrer" className='hover:text-primary'>
                                Facebook
                            </a>
                        </h3>
                    </CardHeader>
                </Card>

                <Card className="group h-[150px] shadow-zinc-950/5">
                    <CardHeader className="gap-2 pb-3">
                        <CardDecorator>
                            <Github
                                className="size-6"
                                aria-hidden
                            />
                        </CardDecorator>
                        <h3 className="mt-0 font-medium">
                            <a href="https://github.com/anj107" target="_blank" rel="noopener noreferrer" className='hover:text-primary'>
                                Github
                            </a>
                        </h3>
                    </CardHeader>
                </Card>
            </div>
            </div>
            </InView>
        </section>
    )
}


