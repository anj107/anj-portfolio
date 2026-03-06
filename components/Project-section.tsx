import { Button } from "@/components/ui/button"
import {Card,CardAction,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"

export function ProjectSection() {
  return (
    <section className= "py-12 md:py-20 border-t">
        <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
            <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl font-semibold lg:text-5xl">Projects</h2>
                <p className="mt-6 text-lg">Projects that were built during University</p>
            </div>
        <Carousel className="w-full max-w-6xl rounded-lg shadow-lg ">
        <CarouselContent className = "items-center justify-center  sm:flex-row lg:justify-start-ml-1 ">
            <CarouselItem  className="md:basis-1/2 lg:basis-1/2 ">
                <div className="p-1">
                <Card className="hover:bg-muted-foreground">
                    <img
                        src="https://avatar.vercel.sh/shadcn1"
                        alt="Event cover"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader >
                        <CardAction>
                        <Badge variant="secondary">Featured</Badge>
                        </CardAction>
                        <CardTitle>Design systems meetup</CardTitle>
                        <CardDescription>
                        A practical talk on component APIs, accessibility, and shipping
                        faster.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full">View Event</Button>
                    </CardFooter>
                </Card>
                </div>
            </CarouselItem>
            <CarouselItem  className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                <Card>
                    <img
                        src="https://avatar.vercel.sh/shadcn1"
                        alt="Event cover"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardAction>
                        <Badge variant="secondary">Featured</Badge>
                        </CardAction>
                        <CardTitle>Design systems meetup</CardTitle>
                        <CardDescription>
                        A practical talk on component APIs, accessibility, and shipping
                        faster.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full">View Event</Button>
                    </CardFooter>
                </Card >
                </div>
            </CarouselItem>
            <CarouselItem  className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                <Card>
                    <img
                        src="https://avatar.vercel.sh/shadcn1"
                        alt="Event cover"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardAction>
                        <Badge variant="secondary">Featured</Badge>
                        </CardAction>
                        <CardTitle>Design systems meetup</CardTitle>
                        <CardDescription>
                        A practical talk on component APIs, accessibility, and shipping
                        faster.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full">View Event</Button>
                    </CardFooter>
                </Card>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
</section>
  )
}


