"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PiArrowCircleRightDuotone } from "react-icons/pi";
import Link from "next/link";
import "./page.css";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
// import { FaCcApplePay } from "react-icons/fa";
// import { FaCcStripe } from "react-icons/fa";
// import { FaCcVisa } from "react-icons/fa";
// import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import { MenuButton } from "@/components/menuButton/menu-button";
import { SecondRoll } from "@/components/secondPage/second-roll";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <main className="h-full bg-[radial-gradient(ellipse_at_top, _var(-tw-gradient-stops))] from-sky-800 to-blue-800">
        <div className="space-y-6 flex justify-between items-center header">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/DEALO_ICON_white.png"
                alt="dealo icon"
                width={70}
                height={70}
              />
            </Link>
            <h4 className="text-white title_name">Tiktok Shop</h4>
          </div>
          <MenuButton isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div className="space-y-6 page_container_wrapper">
          <div className="first_hero_wrapper">
            <Reveal>
              <h1 className="text-white text-5xl mb-5">
                Hey, Shopper
                <span className="highlight_text_emphasized text-orange-200 text-5xl">
                  &#46;
                </span>
              </h1>
            </Reveal>
            <Reveal>
              <h4 className="text-white text-3xl">
                let&lsquo;s help you{" "}
                <span className="highlight_text_emphasized text-orange-500 text-3xl">
                  shop and track products
                </span>
              </h4>
            </Reveal>
            <Reveal>
              <p className="text-white mt-5 mb-5">
                a subsidiary of tiktok for online shoppers and vendors who want
                to make purchases and also track their purchased goods.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex gap-4 text-white text-4xl">
                <FaCcDiscover />
                <FaCcMastercard />
                <FaCcAmex />
                {/* <FaCcApplePay />
                <FaCcStripe />
                <FaCcVisa /> */}
              </div>
            </Reveal>
            <Reveal>
              <Button
                size="sm"
                variant="secondary"
                asChild
                className="px-0 font-normal w-32 h-10 flex gap-2 items-center mt-5 mb-5"
              >
                <Link href="/signin" className="text-2xl font-bold">
                  Get Started{" "}
                  <PiArrowCircleRightDuotone className="text-2xl text-orange-400" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="second_hero_wrapper">
            <Reveal>
              <Image
                src="/main.png"
                // className=""
                alt="shopper"
                width={400}
                height={400}
              />
            </Reveal>
          </div>
        </div>
        <SecondRoll />
      </main>
    </>
  );
}
