import React from "react";
import Globe from "react-globe.gl";
import Button from "../components/button";

const About = () => {
  const [hasCopied, setHasCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("thewebcrafts3@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 md:grid-rows-1 grid-cols-1 h-full gap-5">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.avif"
              alt="grid-1"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi , I'm Taha</p>
              <p className="grid-subtext">
                with 3 years of experience in web development. I have a passion
                for creating visually stunning and user-friendly websites. I
                specialize in HTML, CSS, and JavaScript, and I'm always eager to
                learn new technologies and tools to improve my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.avif"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in HTML, CSS, and JavaScript, and I'm always eager
                to learn new technologies and tools to improve my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-2xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageopacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg
.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg
.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timeszones
              </p>
              <p className="grid-subtext">
                I'm based in India, with remote work available.{" "}
              </p>
              <a href="#contact">
              <Button
                name={"Contact me"}
                isBeam
                containerClass="w-full mt-10"
              />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:row-span-3 xl:col-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid3.avif"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My passion for Coding</p>
              <p className="grid-subtext">
                I love solving complex problems and creating innovative
                solutions. Coding is a way for me to express my creativity and
                problem-solving skills.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:row-span-2 xl:col-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid4.avif"
              alt="grid-4"
              className="w-full md:h-[126px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Conatct Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  thewebcrafts3@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
