import { Photo } from "@/components/me/photo";
import { Title } from "@/components/me/title";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Title />
      <Photo />
    </main>
  );
}
