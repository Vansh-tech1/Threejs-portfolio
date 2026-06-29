import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { color } from "three/tsl";
import Button from "../components/Button";

const About = () => {
  const globeRef = useRef();
  const [hasCopied, setHasCopied] = useState(false);
  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();
    console.log(controls);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5; // Adjust speed
    // controls.enableZoom = false;
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("sainivansh765@icloud.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Vansh Saini</p>
              <p className="grid-subtext">
                Turning ideas into modern, responsive, and impactful web
                applications with a focus on quality and performance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain m-auto"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Building modern web applications with React, Node.js, Express,
                MongoDB, TypeScript, Tailwind CSS, Git, and Three.js.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                objectRotation={true}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl={
                  "//unpkg.com/three-globe/example/img/earth-night.jpg"
                }
                bumpImageUrl={
                  "//unpkg.com/three-globe/example/img/earth-topology.png"
                }
                labelsData={[
                  {
                    lat: 27.75,
                    lng: 74.47,
                    text: "I'm here",
                  },
                ]}
                labelSize={3}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I'm based in India, with remote work available
              </p>
              <Button name="contact me" isBeam containerClass="w-full mt-12" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn't just my profession - it is my passion
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied?'assets/tick.svg':'assets/copy.svg'} alt="copy" />
                <p className="lg:text-1xl md:text-xl font-medium text-gray_gradient text-white">sainivansh765@icloud.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
