export function Background() {
  return (
    <>
      <div className="pointer-events-none fixed inset-y-0 left-0 -z-5 h-[140vh] w-[70vw] bg-[radial-gradient(70%_55%_at_0%_50%,oklch(0.78_0.11_297.39_/_0.52),transparent_72%)] opacity-80 dark:bg-[radial-gradient(70%_55%_at_0%_50%,oklch(0.72_0.08_297.39_/_0.38),transparent_72%)] dark:opacity-100" />
      <div className="pointer-events-none fixed -top-24 right-0 -z-5 h-[140vh] w-[70vw] bg-[radial-gradient(70%_55%_at_100%_50%,oklch(0.92_0.08_356.27_/_0.44),transparent_72%)] opacity-80 dark:bg-[radial-gradient(70%_55%_at_100%_50%,oklch(0.86_0.06_356.27_/_0.28),transparent_72%)] dark:opacity-100" />
      <div className="fixed inset-0 -z-10 h-full w-full bg-theme-grid opacity-30" />
    </>
  )
}