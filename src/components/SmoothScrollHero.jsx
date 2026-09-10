"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

import innerImage from "@/assets/images/innerImage.webp";
import outerImage from "@/assets/images/outerImage.webp";
import shadowImage from "@/assets/images/shadowImage.webp";
import skyImage from "@/assets/images/skyImage.webp";
import cloudsImage from "@/assets/images/cloudsImage.webp";
import aboveImage from "@/assets/images/aboveImage.webp";
import nrtLogo from "@/assets/images/logo.svg";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollHero = () => {
  const scopeRef = useRef(null);
  const mainContainer = useRef(null);
  const windowRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);
  const secondSectionRef = useRef(null);
  const cloudsRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(revealRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 0px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainer.current,
            start: "top top",
            end: "+=220%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // 1. Cabin Window scales up 5x (fly-through zoom into sky)
        tl.to(
          windowRef.current,
          {
            scale: 5,
            rotation: 0.01,
            force3D: true,
            duration: 10,
            ease: "power2.in",
          },
          0
        )
          // 2. Hero typography scales and fades out
          .to(
            contentRef.current,
            {
              scale: 4,
              opacity: 0,
              duration: 7,
              ease: "power2.in",
            },
            0
          )
          .to(".scroll-indicator", { opacity: 0, duration: 1.5 }, 0);

        // 3. Central NRT Logo zooms and fades out smoothly into the sky
        tl.to(
          logoRef.current,
          {
            scale: 2.5,
            opacity: 0,
            duration: 5,
            ease: "power2.in",
          },
          0.5
        );

        // 4. Mission statement fades in
        tl.fromTo(
          secondSectionRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 7,
            ease: "power3.out",
          },
          8.5
        );

        // 5. Continuous Equatorial Clouds parallax loop
        gsap.fromTo(
          cloudsRef.current,
          { xPercent: 0 },
          {
            xPercent: -50,
            duration: 35,
            repeat: -1,
            ease: "none",
          }
        );
      });
    },
    { scope: scopeRef }
  );

  return (
    <div ref={scopeRef} id="top" className="relative">
      {/* 1. Sky Background (Visible at z-0 behind window) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <Image
          src={skyImage}
          alt="Sky"
          fill
          className="object-cover object-bottom"
          priority
          quality={100}
          unoptimized
        />
      </div>

      {/* 2. Drifting Clouds Layer (Visible at z-[1] behind window) */}
      <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none">
        <div
          ref={cloudsRef}
          className="absolute inset-0 h-full w-[1500%] sm:w-[500%]"
          style={{
            backgroundImage: `url(${cloudsImage.src})`,
            backgroundSize: "50% 100%",
            backgroundRepeat: "repeat-x",
            opacity: 0.65,
            willChange: "transform",
            transform: "translate3d(0,0,0)",
          }}
        />
      </div>

      {/* 3. Centered NRT Brand Mark (Prominent, crisp and readable) */}
      <div className="fixed inset-0 flex items-center justify-center z-[25] pointer-events-none">
        <div className="w-[240px] sm:w-[280px] lg:w-[330px]">
          <Image
            ref={logoRef}
            src={nrtLogo}
            alt="NRT Gabon"
            className="w-full h-auto object-contain brightness-0 invert drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]"
            priority
          />
        </div>
      </div>

      {/* 4. Pinned Stage with Window Frame and Mobile-Optimized Typography */}
      <div ref={revealRef} style={{ opacity: 0 }}>
        <div ref={mainContainer} className="relative w-full h-screen overflow-hidden z-10">
          {/* Layered Airplane Window (z-10, transparent center opening) */}
          <div
            ref={windowRef}
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none will-change-transform"
            style={{ perspective: "1000px", backfaceVisibility: "hidden" }}
          >
            <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
              <Image
                src={innerImage}
                alt="Cabin Interior"
                fill
                className="object-cover scale-100 lg:scale-[1.3] z-10"
                quality={100}
                style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
                unoptimized
              />
              <Image
                src={shadowImage}
                alt="Shadow"
                fill
                className="object-cover scale-100 lg:scale-[1.3] opacity-50 z-20"
                quality={100}
                style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
                unoptimized
              />
              <Image
                src={outerImage}
                alt="Window Hull"
                fill
                className="object-cover scale-100 lg:scale-[1.3] z-30"
                quality={100}
                style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
                unoptimized
              />
              <div className="absolute top-[22.5%] left-[50%] md:top-[10%] md:left-[50.3%] -translate-x-1/2 w-[50%] md:w-[24%] h-auto z-10">
                <Image
                  src={aboveImage}
                  alt="Cabin Lighting"
                  width={400}
                  height={200}
                  className="object-contain"
                  quality={100}
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Typography: Relier le Gabon (top-left) and L'expérience en plein ciel (bottom-right) */}
          <div
            ref={contentRef}
            className="absolute inset-0 z-20 text-white pointer-events-none"
          >
            {/* Top-Left: Relier le Gabon */}
            <div className="absolute top-20 sm:top-28 lg:top-1/2 lg:-translate-y-1/2 left-6 sm:left-12 lg:left-24 max-w-xs lg:max-w-md pointer-events-none">
              <h1 className="text-3xl sm:text-5xl lg:text-[66px] leading-[1.05] tracking-tight font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                Relier<br />le Gabon
              </h1>
              <div className="mt-14 space-y-3 hidden lg:block">
                <h2 className="text-base font-medium leading-snug text-white/85">
                  Votre liberté<br />
                  de voyager
                </h2>
                <div className="w-10 h-px bg-white/40" />
                <p className="text-[11px] font-medium leading-relaxed text-white/70 max-w-[280px]">
                  Liaisons régulières et affrètements d&apos;exception à travers l&apos;Afrique équatoriale.
                </p>
              </div>
            </div>

            {/* Bottom-Right: L'expérience en plein ciel (position: absolute right-6, impossible to clip) */}
            <div className="absolute bottom-24 sm:bottom-28 lg:top-1/2 lg:-translate-y-1/2 right-6 sm:right-12 lg:right-24 text-right pointer-events-none">
              <h1 className="text-[20px] xs:text-[23px] sm:text-4xl lg:text-[60px] leading-[1.1] tracking-tight font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                L&apos;expérience<br />
                en plein ciel
              </h1>
            </div>
          </div>

          {/* Minimalist Scroll Indicator (Desktop only) */}
          <div className="scroll-indicator absolute bottom-8 sm:bottom-12 right-6 sm:right-16 z-20 text-white pointer-events-none hidden sm:block">
            <div className="mb-2.5 h-[1px] w-40 sm:w-60 bg-white/30" />
            <div className="flex items-center justify-between text-[8px] sm:text-[9px] tracking-widest text-white/70 font-mono">
              <div className="flex items-center gap-1.5 font-bold">
                <ChevronDown size={13} className="text-white animate-bounce" />
                <span>DÉFILER</span>
              </div>
              <span>POUR COMMENCER</span>
            </div>
          </div>

          {/* Emerged Mission Statement Section */}
          <div
            ref={secondSectionRef}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center text-white px-6 sm:px-12 md:px-20 pointer-events-none opacity-0"
          >
            <div className="max-w-4xl space-y-8">
              <span className="text-xs uppercase tracking-widest font-mono text-white/60">
                NRT Gabon • Ailes Nationales
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] leading-relaxed font-bold tracking-tight text-white drop-shadow-lg">
                <span className="font-normal text-white/90">
                  NRT est le transporteur régional de référence au Gabon, reliant quotidiennement Libreville, Port-Gentil, Franceville et l&apos;ensemble des bassins industriels et touristiques du pays.
                </span>
              </h2>
              <div className="pt-2">
                <a
                  href="#booking"
                  className="pointer-events-auto inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all backdrop-blur-md shadow-2xl"
                >
                  <span>Réserver un vol</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothScrollHero;