import Image from "next/image";
import Heading from "./Components/Heading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello Next Hero
      This is Heading

      <Heading></Heading>
    </main>
  );
}
