import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
// import { useParallax, ParallaxProvider } from "react-scroll-parallax";

export default function Layout() {
  // const { ref } = useParallax({ speed: 10 });
  return (
    <>
      <Nav />
      {/* <ParallaxProvider> */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {/* </ParallaxProvider> */}
      <Footer />
    </>
  );
}
