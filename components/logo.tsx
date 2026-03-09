import { cn } from '../lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/Me/AR.png"
            alt="AR"
            width={180}
            height={48}
            priority
            className={cn('h-8 w-auto object-contain rounded-full border-1', className)}
        />
    )
}

