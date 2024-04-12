

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">

      <button className="flex gap-2 items-center border border-neutral-900 p-2 rounded-md">
        <Image src="/g-icon.png" alt="" width={32} height={32} />
        Login com Google
      </button>

    </main>
  );
}

