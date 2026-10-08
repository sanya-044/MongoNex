 import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    number: "01",
    label: "MONGONEX — 2026",
    eyebrow: "FULL-STACK DEVELOPMENT",
    title: ["BUILD", "THE", "FUTURE."],
    description:
      "Contemporary web applications, scalable MERN architectures, and high-performance digital solutions built for industry leaders.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "02",
    label: "MONGONEX — INFRASTRUCTURE",
    eyebrow: "SCALABLE SYSTEMS",
    title: ["OWN", "THE", "STACK."],
    description:
      "Real-time communication platforms, secure authentication gateways, and robust database management systems.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "03",
    label: "MONGONEX — INNOVATION",
    eyebrow: "DIGITAL EXPERIENCES",
    title: ["MAKE", "YOUR", "MARK."],
    description:
      "Sleek UI/UX design combined with lightning-fast execution to scale your startup or enterprise brand.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2200&q=90",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const animationFrame = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance =
        sectionRef.current.offsetHeight - window.innerHeight;
      const newProgress = Math.min(
        1,
        Math.max(0, -rect.top / scrollableDistance)
      );
      targetProgress.current = newProgress;
    };

    const animate = () => {
      const difference = targetProgress.current - currentProgress.current;
      currentProgress.current += difference * 0.09;
      if (Math.abs(difference) < 0.0001) {
        currentProgress.current = targetProgress.current;
      }
      setProgress(currentProgress.current);
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  const horizontalOffset = progress * (slides.length - 1) * 100;
  const activeSlide = Math.min(
    slides.length - 1,
    Math.floor(progress * slides.length)
  );

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="flex h-full will-change-transform"
          style={{ transform: `translate3d(-${horizontalOffset}vw, 0, 0)` }}
        >
          {slides.map((slide) => (
            <article
              key={slide.number}
              className="relative h-full w-screen flex-shrink-0 overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                <div className="mt-28 max-w-[1200px]">
                  <p className="mb-5 text-[10px] uppercase tracking-[0.35em] sm:text-xs text-neutral-400">
                    {slide.eyebrow}
                  </p>
                  <h1 className="text-[clamp(3.5rem,9vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
                    {slide.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>
                </div>

                <div className="flex items-end justify-between gap-8">
                  <p className="hidden max-w-md text-xs leading-6 text-neutral-300 sm:block">
                    {slide.description}
                  </p>
                  <Link
                    to="/projects"
                    className="group flex shrink-0 items-center gap-4 border border-white px-6 py-4 text-[9px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black sm:px-8"
                  >
                    View Our Work
                    <ArrowDownRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:rotate-[-45deg]"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute left-6 top-24 z-30 flex items-center gap-3 text-white sm:left-10 sm:top-24 lg:left-16 lg:top-24">
          <span className="h-px w-8 bg-white" />
          <span className="text-[10px] uppercase tracking-[0.3em] sm:text-xs text-neutral-300">
            {slides[activeSlide].label}
          </span>
        </div>

        <div className="pointer-events-none absolute right-6 top-24 z-30 text-[10px] tracking-[0.2em] text-neutral-300 sm:right-10 sm:top-24 lg:right-16 lg:top-24">
          {slides[activeSlide].number} / 03
        </div>

        <div className="absolute bottom-7 left-6 z-30 flex items-center gap-3 sm:left-10 lg:left-16">
          {slides.map((slide, index) => (
            <div
              key={slide.number}
              className="relative h-[2px] w-10 overflow-hidden bg-white/30"
            >
              <div
                className="absolute inset-y-0 left-0 bg-white transition-[width] duration-100"
                style={{
                  width:
                    index < activeSlide
                      ? "100%"
                      : index === activeSlide
                        ? `${Math.max(
                            15,
                            Math.min(
                              100,
                              (progress * slides.length - index) * 100
                            )
                          )}%`
                        : "0%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}