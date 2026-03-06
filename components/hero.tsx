'use client'
import React from 'react'
import Link from 'next/link'
import { LogoIcon } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]

export default function HeroSection() {
    const [menuState, setMenuState] = React.useState(false)

    return (
        <>
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="flex items-center space-x-2">
                                    <LogoIcon className="size-8" />
                                </Link>

                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>

                            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={item.href}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="@container overflow-x-hidden">
                            <section>
                                <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                                    <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Hello, my name is Angeli</h1>
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
                                        </div>
                                        <div className="lg:w-166 @max-lg:-translate-x-20 not-dark:invert mask-radial-from-35% mask-radial-to-70% max-lg:size-120 max-lg:order-first max-lg:mx-auto max-lg:-mb-20 lg:absolute lg:inset-0 lg:-inset-y-56 lg:ml-auto lg:translate-x-28">
                                            <div className="z-1 absolute inset-0 bg-zinc-950 opacity-80 mix-blend-overlay" />
                                            <Image
                                                className="size-full object-cover object-right grayscale"
                                                src="https://images.unsplash.com/photo-1586173806725-797f4d632f5d?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="Abstract Object"
                                                height="2000"
                                                width="1500"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
        </>
    )
}
