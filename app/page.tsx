import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/Landing/hero";
import { LandingHeader } from "@/components/Landing/landing-header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
     <LandingHeader/>
      <div className="flex flex-col items-center justify-center">
        <HeroSection />
      </div>
    </div>
  );
}
