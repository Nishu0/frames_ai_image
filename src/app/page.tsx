import Image from "next/image";
import { Metadata } from "next";
import Magic from "@/components/Magic";

export default function Home() {
  return (
    <main className="flex flex-col text-center lg:p-16">
      <Magic  />
    </main>
  );
}
