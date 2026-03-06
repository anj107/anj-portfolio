
'use client'
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import HeroHeader from "@/components/header";
import Socials from "@/components/Socials";
import { TextEffect } from '@/components/motion-primitives/text-effect';



export default function HeroSection() {
        return (
        <>
        <HeroHeader />
            <main className="@container overflow-x-hidden">
                <section className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                               <h1 className="mt-8 max-w-2xl text-balance text-6xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                                    <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3}>
                                        Hello, my name is Angeli
                                    </TextEffect>
                                    </h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">A BSIT student at <strong>Polytechnic University of the Philippines</strong>, aspiring to become a <strong>software developer</strong> to help innovate and create impactful solutions.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">View Resume</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="default"
                                        className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Contact me</span>
                                        </Link>
                                    </Button>
                                </div>
                                <div className= "mt-2 flex flex-col items-center justify-center  sm:flex-row lg:justify-start"><Socials/></div>
                            </div>
                            <div className="lg:w-166 @max-lg:-translate-x-20 max-lg:size-120 max-lg:order-first max-lg:mx-auto max-lg:-mb-20 lg:absolute lg:inset-0 lg:-inset-y-56 lg:ml-auto lg:translate-x-28">
                                <div className="overflow-hidden rounded-full border shadow-lg">
                                    <Image
                                        className="aspect-square w-full object-cover"
                                        src="/Me/profile"
                                        alt="My profile picture"
                                        width={500}
                                        height={500}
                                        sizes="(max-width: 500px) 80vw, 40vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}