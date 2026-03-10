import { Spotlight } from "@/components/ui/spotlight-new";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="dark:hidden">
        <Spotlight
          translateY={-300}
          width={520}
          height={1200}
          smallWidth={220}
          duration={8}
          xOffset={90}
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(222, 100%, 66%, .16) 0, hsla(222, 100%, 56%, .08) 45%, hsla(222, 100%, 48%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 76%, .12) 0, hsla(210, 100%, 60%, .05) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(195, 100%, 72%, .10) 0, hsla(195, 100%, 58%, .04) 80%, transparent 100%)"
        />
      </div>

      <div className="hidden dark:block">
        <Spotlight
          translateY={-300}
          width={540}
          height={1250}
          smallWidth={230}
          duration={8}
          xOffset={95}
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(223, 100%, 65%, .18) 0, hsla(223, 100%, 55%, .10) 45%, hsla(223, 100%, 45%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(212, 100%, 72%, .14) 0, hsla(212, 100%, 58%, .06) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(200, 100%, 70%, .12) 0, hsla(200, 100%, 56%, .05) 80%, transparent 100%)"
        />
      </div>

      <div className="absolute inset-0 h-full w-full bg-theme-grid opacity-50" />
    </div>
  )
}