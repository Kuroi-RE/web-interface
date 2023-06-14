import ScrollEffect from "../components/Utility/ScrollEffect";
import "aos/dist/aos.css";

import Hero from "../components/Home/Page/Hero";
import Stats from "../components/Home/Page/Stats";
import Menu from "../components/Home/Page/Menu";

export default function Home() {
  ScrollEffect();

  return (
    <main className="flex flex-col overflow-hidden font-primary">
      {/* Hero Page */}
      <Hero />
      {/* Hero Page */}

      {/* Hero Page */}
      <Stats />
      {/* Hero Page */}

      {/* Hero Page */}
      <Menu />
      {/* Hero Page */}
    </main>
  );
}
