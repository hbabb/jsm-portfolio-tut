import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
