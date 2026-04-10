import { MySafAppSection } from "@/app/homepage/mysaf-app";
import { MpesaAppSection } from "@/app/homepage/mpesa-app";

export default function Home() {
  return (
    <main>
      <MySafAppSection />
      <MpesaAppSection />
    </main>
  );
};