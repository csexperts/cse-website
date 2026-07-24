import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Serge Egelman -Computer Science Experts LLC",
};



const Page = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/images/egelman.jpeg"
          alt="Egelman"
          width={100}
          height={100}
          priority
        />
        It's ABSOLUTE Egelmania in here!
      </main>
    </div>
  );
};
export default Page;