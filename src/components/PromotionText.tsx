"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import arrow from '../../public/image/arrow.png';

const PromotionText: React.FC = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!marqueeRef.current) return;

        const marqueeInner = marqueeRef.current;

        // Duplikasi konten agar scrolling tetap berjalan tanpa jeda
        marqueeInner.innerHTML += marqueeInner.innerHTML;

        // Dapatkan panjang total kontainer untuk scrolling
        const totalWidth = marqueeInner.scrollWidth / 2;

        // Pastikan semua elemen memiliki ukuran tetap
        const parts = marqueeInner.children;
        for (let i = 0; i < parts.length; i++) {
            (parts[i] as HTMLElement).style.flexShrink = "0";
            (parts[i] as HTMLElement).style.whiteSpace = "nowrap";
            (parts[i] as HTMLElement).style.minWidth = "max-content";
        }

        // GSAP untuk menggerakkan seluruh kontainer
        const tween = gsap.fromTo(
            marqueeInner,
            { x: 0 },
            { x: `-${totalWidth}px`, duration: 20, ease: "linear", repeat: -1 }
        );

        let currentScroll = 0;
        let isScrollingDown = true;

        const onScroll = () => {
            if (window.pageYOffset > currentScroll) {
                isScrollingDown = true;
            } else {
                isScrollingDown = false;
            }

            // Update arah animasi marquee
            gsap.to(tween, { timeScale: isScrollingDown ? 1 : -1 });

            // Seleksi semua elemen arrow terbaru setelah duplikasi
            const arrows = marqueeRef.current?.querySelectorAll(".arrow");

            // Ubah rotasi arrow berdasarkan arah scroll
            arrows?.forEach((arrow) => {
                if (isScrollingDown) {
                    arrow.classList.remove("active");
                } else {
                    arrow.classList.add("active");
                }
            });

            currentScroll = window.pageYOffset;
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };

    }, []);

    return (
        <div className="marquee">
            <div className="marquee__inner" ref={marqueeRef}>
                <div className="marquee__part">
                    Investissez à Bali et sécurisez jusqu`à 20% de rentabilité !
                    <div className="arrow">
                        <Image src={arrow} width={50} height={50} alt="Arrow" />
                    </div>
                </div>
                <div className="marquee__part">
                    Interlocuteur francophone, expertise locale
                    <div className="arrow">
                        <Image src={arrow} width={50} height={50} alt="Arrow" />
                    </div>
                </div>
                <div className="marquee__part">
                    Investissez à Bali et sécurisez jusqu`à 20% de rentabilité !
                    <div className="arrow">
                        <Image src={arrow} width={50} height={50} alt="Arrow" />
                    </div>
                </div>
                <div className="marquee__part">
                    Interlocuteur francophone, expertise locale
                    <div className="arrow">
                        <Image src={arrow} width={50} height={50} alt="Arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionText;
