"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import BlurIn from "@/components/magicui/blur-in";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SparklesText } from "@/components/magicui/sparkles-text";

import AnimatedImage from "@/components/landing/AnimatedImage";
import About from "@/components/landing/About"
import Features from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Hero() {
  return (
    <main>
      <div className="z-0 relative min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
        
        <motion.div
          className="relative z-10 flex flex-col items-center justify-start min-h-screen space-y-4 px-4 pt-32 pb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <DotPattern
            className={cn(
              "absolute inset-0 z-0 [mask-image:radial-gradient(50vw_circle_at_center,white,transparent)] dark:[mask-image:radial-gradient(50vw_circle_at_center,black,transparent)]"
            )}
          />

          <span>🧠 Remember Smarter</span>

          <motion.div variants={itemVariants}>
            <BlurIn
              word={
                <>
                  <span>Watch. Read. </span>
                  <br />
                  <SparklesText className="inline" text="Remember." />
                  <span> Repeat.</span>
                </>
              }
              className="font-display text-center text-4xl font-bold w-full lg:w-auto max-w-4xl mx-auto -z-10"
              duration={1}
            />
          </motion.div>
          <motion.h2
            className="text-xl text-muted-foreground tracking-normal text-center max-w-2xl mx-auto z-10"
            variants={itemVariants}
          >
            Upload your courses videos & notes, get custom MCQs on WhatsApp, and
            retain <NumberTicker value={100} />% more effectively.
          </motion.h2>

          <motion.div variants={itemVariants} className="z-20">
            <Link href="/dashboard" passHref>
              <Button className="bg-primary text-black rounded-full">
                Get Started
                <ArrowRightIcon className="w-8 h-8 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <AnimatedImage
              src="/dummy.svg"
              alt="Image"
              width={1200}
              height={900}
              className="w-full h-auto max-w-6xl mx-auto rounded-2xl shadow-lg px-0 sm:px-4"
            />
          </motion.div>
        </motion.div>
        
        {/* about */}
        <About />
        
        {/* features */}
        <Features />
        
        {/* pricing plans */}
        <Pricing />
      </div>
    </main>
  );
}
