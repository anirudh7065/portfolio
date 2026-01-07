"use client";

import { useState, useRef } from "react";
import CertificateCard from "@/components/CertificateCard";

type Certificate = {
    id: number;
    src: string;
    alt: string;
};

const SWIPE_THRESHOLD = 50; // px

const CertificateCarousel = ({
    certificates,
}: {
    certificates: Certificate[];
}) => {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef<number | null>(null);

    const prev = () => {
        setCurrent((c) =>
            c === 0 ? certificates.length - 1 : c - 1
        );
    };

    const next = () => {
        setCurrent((c) =>
            c === certificates.length - 1 ? 0 : c + 1
        );
    };

    /* 🔹 Swipe handlers */
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            diff > 0 ? next() : prev();
        }

        touchStartX.current = null;
    };

    return (
        <div
            className="relative w-[96%] max-w-3xl mx-auto  overflow-hidden touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {/* Slider */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {certificates.map((cert) => (
                    <div
                        key={cert.id}
                        className="w-full shrink-0 flex justify-center"
                    >
                        <CertificateCard src={cert.src} alt={cert.alt} />
                    </div>
                ))}
            </div>

            {/* Left button */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/3 -translate-y-1/2 z-10 px-2 md:px-3 py-1.5 max-md:text-xs  rounded-full bg-black/70 text-white text-center hover:bg-black"
                aria-label="Previous certificate"
            >
                ◀
            </button>

            {/* Right button */}
            <button
                onClick={next}
                className="absolute right-2 top-1/3 -translate-y-1/2 z-10 md:px-3  px-2 py-1.5 max-md:text-xs  rounded-full bg-black/70 text-white text-center hover:bg-black"
                aria-label="Next certificate"
            >
                ▶
            </button>
        </div>
    );
};

export default CertificateCarousel;
