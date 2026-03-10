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
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, #528dff29 0, #1f70ff14 45%, #005cff00 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, #85c2ff1f 0, #3399ff0d 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, #70d8ff1a 0, #29c2ff0a 80%, transparent 100%)"
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
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, #4d81ff2e 0, #1a63ff1a 45%, #0051e600 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, #70b9ff24 0, #2998ff0f 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, #66ccff1f 0, #1fadff0d 80%, transparent 100%)"
        />
      </div>

      <div className="absolute inset-0 h-full w-full bg-theme-grid opacity-50" />
    </div>
  )
}