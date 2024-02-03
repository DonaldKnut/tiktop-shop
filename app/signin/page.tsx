import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LoginButton } from "@/components/auth/login-button";
import { PiArrowCircleRightDuotone } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top, _var(-tw-gradient-stops))] from-sky-800 to-blue-800">
        <div className="space-y-6">
          <Image
            src="/lock_white.png"
            className="mx-auto my-4"
            width={60}
            height={60}
            alt="lock icon"
          />
          <div className="text-6xl font-semibold text-black drop-shadow-md">
            <Image
              src="/DEALO_ICON_white.png"
              alt="dealo icon"
              width={190}
              height={190}
            />
          </div>
        </div>
        <h2 className="m-6 text-center drop-shadow-md text-white text-3xl font-poppins">
          Tiktok Shop
        </h2>
        <p className="text-center w-full sm:w-3/6 mt-3 mb-3 text-orange-300 font-sans">
          All credentials must be kept secured, This is a platform where
          transactions take place, Users are responsible for the management of
          their credentials.
        </p>
        <LoginButton>
          <Button size="lg" variant="secondary" className="flex gap-2 w-full">
            Sign in{" "}
            <PiArrowCircleRightDuotone className="text-2xl text-orange-700" />
          </Button>
        </LoginButton>
      </main>
    </>
  );
}
