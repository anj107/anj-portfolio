import { School } from 'lucide-react'
import { AnimatedBackground } from '@/components/motion-primitives/animated-background';

export default function Education() {
    return (
        <section className="py-12 md:py-20 border-t">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Education</h2>
                </div>
                <div className="relative mx-auto w-full max-w-7xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <School className="size-5" />
                            <h3 className="text-sm font-medium">2022 - Present</h3>
                        </div>
                        <p className="font-bold text-sm">Polytechnic University of the Philippines</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <School className="size-5" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-sm">It supports an entire helping developers and businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <School className="size-5" />

                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-sm">It supports an helping developers businesses.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
