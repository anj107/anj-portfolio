import Link from 'next/link'
import { Github, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [

  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/angeli-rivera/', icon: (
    <Linkedin />
  )},
  { name: 'Facebook', href: 'https://www.facebook.com/angeli.rivera.171930', icon: (
    <Facebook />
  )},
  
  { name: 'Github', href: 'https://github.com/anj107', icon: (
    <Github />
  )},
]

export default function Socials() {
  return (
    <div className="flex items-center gap-4 py-4">
      {socialLinks.map((item) => (
        <Link
          key={item.name}
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