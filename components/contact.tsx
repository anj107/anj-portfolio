
"use client";

import { useEffect, useMemo, useState } from 'react';
import { Card, CardHeader,CardDecorator } from '@/components/ui/card'
import { Mail, Facebook, Github, Linkedin, Phone } from 'lucide-react'
import { InView } from './ui/in-view'
import GradientText from '@/components/GradientText';

type ContactInfo = {
    email: string | null;
    phone: string | null;
};

type SocialLink = {
    id: string;
    platform: string | null;
    url: string | null;
};


export default function ContactSection() {
        const [contact, setContact] = useState<ContactInfo | null>(null);
        const [socials, setSocials] = useState<SocialLink[]>([]);

        useEffect(() => {
            const controller = new AbortController();

            async function loadContact() {
                try {
                    const [contactRes, socialsRes] = await Promise.all([
                        fetch('/api/contact', { signal: controller.signal }),
                        fetch('/api/socials', { signal: controller.signal }),
                    ]);

                    if (contactRes.ok) {
                        const contactData: ContactInfo | null = await contactRes.json();
                        setContact(contactData);
                    }

                    if (socialsRes.ok) {
                        const socialData: SocialLink[] = await socialsRes.json();
                        setSocials(socialData);
                    }
                } catch {
                }
            }

            loadContact();
            return () => controller.abort();
        }, []);

        const socialMap = useMemo(() => {
            const map = new Map<string, string>();
            for (const social of socials) {
                if (!social.platform || !social.url) {
                    continue;
                }

                map.set(social.platform.toLowerCase(), social.url);
            }
            return map;
        }, [socials]);

        const email = contact?.email ?? 'angelivaldezrivera@gmail.com';
        const phone = contact?.phone ?? '0928 594 5800';
        const linkedin = socialMap.get('linkedin') ?? '#';
        const facebook = socialMap.get('facebook') ?? '#';
        const github = socialMap.get('github') ?? '#';

    return (
        <section id="contact" className="scroll-mt-24 py-12 md:py-10 sm:py-24">
        <InView
                    variants={{
                      hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    }}
                    viewOptions={{ margin: '0px 0px -200px 0px' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >

            <div className="@container mx-auto max-w-5xl px-6 " >
               <GradientText animationSpeed={8.5} showBorder={false} className="custom-class text-center text-6xl font-extrabold lg:text-5xl">
                Contact Me
                </GradientText>
                <p className="mt-4 text-center">Let us get to know each other.<br/>Collaborations, project queries, or opportunities are all welcome.</p>
            
            <div className="@min-4xl:max-w-full @min-4xl:grid-cols-2 mx-auto mt-8 grid w-full max-w-6xl gap-6 *:text-center md:mt-16 md:grid-cols-1 lg:grid-cols-2">
                <Card className="group h-[150px] shadow-zinc-950/5">
                          <CardHeader className="gap-2 pb-3">
                        <CardDecorator>
                            <Mail
                                className="size-6"
                                aria-hidden
                            />
                        </CardDecorator>

                        <h3 className="mt-0 font-medium">
                            <p className='hover:text-primary'>
                                {email}
                            </p>
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
                            <p className='hover:text-primary'>
                                {phone}
                            </p>
                        </h3>
                    </CardHeader>
                </Card>
            </div>
            <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid w-full max-w-6xl gap-6 *:text-center md:mt-5 md:grid-cols-2 lg:grid-cols-3">

                <Card className="group h-[150px] shadow-zinc-950/5">
                    <CardHeader className="gap-2 pb-3">
                        <CardDecorator>
                            <Linkedin
                                className="size-6"
                                aria-hidden
                            />
                        </CardDecorator>

                        <h3 className="mt-0 font-medium">
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className='hover:text-primary'>
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
                            <a href={facebook} target="_blank" rel="noopener noreferrer" className='hover:text-primary'>
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
                            <a href={github} target="_blank" rel="noopener noreferrer" className='hover:text-primary'>
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


