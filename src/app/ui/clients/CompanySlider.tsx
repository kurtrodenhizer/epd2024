"use client";
import { CompanyList } from "./CompanyList";
import styles from "./CompanySlider.module.scss";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";

const companies = [
  { name: "Abiomed", logo: "/logos/abiomed.png" },
  { name: "Drager", logo: "/logos/drager.png" },
  { name: "FFDA", logo: "/logos/ffda.png" },
  { name: "ss", logo: "/logos/ss.png" },
];

export const CompanySlider = () => {
  return (
    <>
      <div
        // className={styles.wrapper}
        className="w-full bg-red-500"
      >
        <div
          className={styles.listsWrapper}
          // className='translate-x-12'
        >
          <CompanyList companies={companies} />
          <CompanyList companies={companies} />
          <CompanyList companies={companies} />
          <CompanyList companies={companies} />
        </div>
      </div>

      {/* <section className={` mb-16`}>
        <div className={` w-full flex-wrap overflow-hidden`}>
          <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={"#fff"}
          >
            <Slider.Slide className="w-[250px]">
              <div className="flex flex-1 sm:min-w-[192px] min-w-[120px]">
                <Image
                  src="/logos/abiomed.png"
                  alt="logo"
                  width={50}
                  height={50}
                  className=" "
                ></Image>
              </div>
            </Slider.Slide>
            <Slider.Slide className="w-[250px]">
              <div className="flex flex-1 sm:min-w-[192px] min-w-[120px]">
                <Image
                  src="/logos/abiomed.png"
                  alt="logo"
                  width={50}
                  height={50}
                  className=" "
                ></Image>
              </div>
            </Slider.Slide>

            <Slider.Slide>
              <Image
                src="/logos/abiomed.png"
                alt="logo"
                fill
                className="object-cover"
              ></Image>
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/logos/abiomed.png"
                alt="logo"
                fill
                className="object-cover"
              ></Image>
            </Slider.Slide>
          </Slider>
        </div>
      </section> */}
    </>
  );
};
