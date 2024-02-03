"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/app/reveal";
// import { FaCcDiscover } from "react-icons/fa";
// import { FaCcMastercard } from "react-icons/fa";
// import { FaCcAmex } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { Button } from "../ui/button";
import "./second-roll.css";

interface Props {}

export const SecondRoll = (props: Props) => {
  return (
    <>
      <main className="h-full bg-[radial-gradient(ellipse_at_top, _var(-tw-gradient-stops))] from-sky-800 to-blue-800">
        <div className="space-y-6 page_container_wrapper">
          <div className="second_hero_wrapper">
            <Reveal>
              <Image
                src="/fashion-shopper-2.png"
                // className=""
                alt="shopper"
                width={400}
                height={400}
              />
            </Reveal>
          </div>
          <div className="first_hero_wrapper">
            <Reveal>
              <h1 className="text-white text-5xl mb-5">
                Discounted Pricing
                <span className="highlight_text_emphasized text-orange-500 text-5xl">
                  .
                </span>
              </h1>
            </Reveal>
            <Reveal>
              <h4 className="text-white text-3xl">
                affordable prices{" "}
                <span className="highlight_text_emphasized text-orange-500 text-3xl">
                  on every products
                </span>
              </h4>
            </Reveal>
            <Reveal>
              <p className="text-white mt-5 mb-5">
                We love treating our customers! Enjoy regular discounts,
                promotions, and special offers. Subscribe to our newsletter to
                stay in the loop and save even more.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex gap-4 text-white text-4xl">
                {/* <FaCcDiscover />
                <FaCcMastercard />
                <FaCcAmex /> */}
                <FaCcApplePay />
                <FaCcStripe />
                <FaCcVisa />
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
                  Join Now{" "}
                  <LuArrowUpRight className="text-2xl text-orange-400" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
};
