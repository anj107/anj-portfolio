"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link'
import { Github, Facebook, Linkedin } from 'lucide-react';

type SocialLink = {
  id: string;
  platform: string | null;
  url: string | null;
};

export default function Socials() {
  const [socials, setSocials] = useState<SocialLink[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadSocials() {
      try {
        const res = await fetch('/api/socials', { signal: controller.signal });
        if (!res.ok) {
          return;
        }

        const data: SocialLink[] = await res.json();
        setSocials(data);
      } catch {
      }
    }

    loadSocials();
    return () => controller.abort();
  }, []);

  const socialLinks = useMemo(
    () =>
      socials
        .filter((item) => item.platform && item.url)
        .map((item) => {
          const name = item.platform as string;
          const lower = name.toLowerCase();

          if (lower === 'linkedin') {
            return { key: item.id, name, href: item.url as string, icon: <Linkedin /> };
          }

          if (lower === 'facebook') {
            return { key: item.id, name, href: item.url as string, icon: <Facebook /> };
          }

          if (lower === 'github') {
            return { key: item.id, name, href: item.url as string, icon: <Github /> };
          }

          return null;
        })
        .filter((item) => item !== null),
    [socials]
  );

  return (
    <div className="flex items-center gap-4 py-4">
      {socialLinks.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className="text-foreground hover:text-primary block, border-1 border-primary rounded-full p-2 transition-colors"
        >
          <svg
            className="size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="2em"
            viewBox="0 0 24 24"
          >
            {item.icon}
          </svg>
        </Link>
      ))}
    </div>
  )
}