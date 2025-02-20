"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TwoColumnSlide from "../components/two_column_slide.js";
import BgImgSlide from '../components/bg_img_slide.js';
import TittleSlide from '../components/tittle_slide.js';
import Footer from '../components/footer.js';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <TittleSlide />
        <BgImgSlide />
        <TwoColumnSlide imageSrc="path/to/your/image.jpg" tittle="Your tittle here" text="Your text here" />
        <TwoColumnSlide imageSrc="path/to/your/image.jpg" tittle="Your tittle here" text="Your text here" />
        <Footer />
        {/* You can add more slides here if needed */}
      </main>
    </div>
  );
}