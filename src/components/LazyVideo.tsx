import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Autoplaying, muted, looping background video that only starts loading
 * once it is close to the viewport, and pauses when scrolled away.
 */
export function LazyVideo({
  src,
  poster,
  className,
  eager = false,
}: {
  src: string;
  poster: string;
  className?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(eager);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setLoad(true);
          void el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      aria-hidden="true"
      className={cn("h-full w-full object-cover", className)}
      {...(load ? { src } : {})}
    />
  );
}
