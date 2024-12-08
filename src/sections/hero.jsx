import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/canvasloader";
import { PerspectiveCamera, Ring } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../costants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/cube";
import Rings from "../components/ring";
import HackerRoom from "../components/HackerRoom";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-2xl sm:text-3xl font-medium text-white text-center font-generalsans">
          Hi there, I am <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="absolute w-full h-full inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        <div className="absolute w-full  right-0 left-0 bottom-7 z-10 c-space">
          <a href="#about" className="w-fit">
            <Button
              name="Let's work together"
              isBeam
              containerClass="w-full sm:w-fit sm:min-w-96"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
