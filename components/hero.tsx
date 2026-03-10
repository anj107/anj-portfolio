
'use client'

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import HeroHeader from "@/components/header";
import Socials from "@/components/socialmedia";
import { TextEffect } from '@/components/motion-primitives/text-effect';
import {Send, Eye} from 'lucide-react';
import { motion } from 'motion/react';



export default function HeroSection() {
        return (
        <>
        <HeroHeader />
            <main className="@container overflow-x-hidden">
                <section className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-10 sm-24">
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                               <h1 className="mt-8 max-w-2xl text-balance text-6xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                                    <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3}>
                                        Hello, my name is Angeli
                                    </TextEffect>
                                    </h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">
                                    A BSIT student at <span className="text-accent-foreground font-bold">Polytechnic University of the Philippines</span>, aspiring to become a software developer to help innovate and create impactful solutions.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="/Me/RIVERA_CV.pdf" target="_blank" rel="noopener noreferrer">
                                            <span className="text-nowrap">View Resume</span><Eye className="size-5"/>
                                        </Link>
                                    </Button>
                                    <div className= "pl-4 mt-2 flex flex-col items-center justify-center sm:flex-row lg:justify-start"><Socials/></div>
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '0px 0px -120px 0px' }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="lg:w-120 @max-lg:-translate-x-20 max-lg:size-120 max-lg:order-first max-lg:mx-auto max-lg:-mb-20 lg:absolute lg:top-[-100px] lg:right-2"
                            >
                                <div className="overflow-hidden rounded-full  shadow-lg mask-x-from-90% mask-x-to-100%">
                                    <Image
                                        className="aspect-square w-full object-cover"
                                        src="/Me/profile.JPG"
                                        alt="My profile picture"
                                        width={200}
                                        height={200}
                                        sizes="(max-width: 200px) 80vw, 40vw"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
