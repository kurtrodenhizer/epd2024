import React from "react";
import Image from "next/image";

const Farisfeatures = () => {
  const servicesData = [
    {
      title: "Streamline Your Digital Asset Management",
      paragraph:
        "	Efficiently manage your digital assets with advanced sorting, filtering, and search capabilities. Customize the interface to match your brand, saving time and ensuring you can quickly locate any file you need.",
      image: true,
      imageSrc: "/faris/new/home3.png",
      imgAltTag: "Digital Report displayed on tablet device",
    },
    {
      title: "Maintain Brand Consistency",
      paragraph:
        "Create and manage assets using pre-approved templates, guaranteeing that all materials align with your brand guidelines. Keep all assets accurate, approved, and up-to-date.",

      image: true,
      // imageSrc: "/services/report-generation2.jpg",
      // imageSrc: "/faris/new/customslide2.png",
      imageSrc: "/faris/6.28/brandguidelines.svg",

      imgAltTag: "Digital Report displayed on tablet device",
    },
    {
      title: "Control Access with User Permissions",
      paragraph:
        "Assign user roles and permissions to facilitate secure internal and external sharing. Allow users to access only the files they need, protecting sensitive information.",
      image: true,
      imageSrc: "/faris/new/userpermission.png",
      imgAltTag: "Screenshots of Data Management examples",
    },
    {
      title: "Share Content Securely",
      paragraph:
        "Facilitate the secure sharing of brand-approved content both internally and externally. Use secure links or restricted portals to control access to your digital assets.",
      image: true,
      // imageSrc: "/faris/new/sharewithcustomers.png",
      imageSrc: "/faris/6.28/sharing.png",

      imgAltTag: "Digital File structure, organization and management visual",
    },
    {
      title: "Ensure Robust Security",
      paragraph:
        "FARIS provides robust security features, ensuring your assets are protected. Benefit from MFA, SSO, and a secure directory that meets your organization’s compliance needs.",
      features: [
        "Numerous report options",
        "Databases that allow for easy record location",
        "Social media engagement and analytics",
        "Folder, document and media management of directories and sub-directories",
        "File Protection",
      ],
      image: true,
      // imageSrc: "/faris/new/farislogin.png",
      // imageSrc: "/faris/6.28/securelogin.png",
      imageSrc: "/faris/6.28/2 Background Removed.png",


      imgAltTag: "Example of eLearning product simulation",
    },
  ];

  const servicesJsx = servicesData.map((service, index) => (
    <React.Fragment key={index}>
      <div
        className="container mx-auto grid max-w-2xl grid-cols-1 place-content-center items-center gap-x-10 gap-y-10 md:max-w-3xl lg:max-w-none lg:grid-cols-2 lg:gap-x-24 lg:gap-y-32"
        key={index}
      >
        <div
          className={`
      ${index % 2 === 0 && `lg:order-2`}
       place-items-center text-left 
     `}
        >
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-700 md:text-4xl md:leading-tight">
            {service.title}
          </h2>

          <p className="mx-auto mb-2 text-gray-600 md:text-xl ">
            {service.paragraph}
          </p>

          {/* <div className="text-left">
            <ul className="ml-10 list-disc text-gray-700 marker:text-teal md:text-lg">
              {service.features.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="relative z-10 mx-auto w-11/12 lg:w-full">
          {service.image ? (
            <Image
              alt={`${service.title} image`}
              src={service.imageSrc!}
              width={600}
              height={600}
              className="relative z-10 mx-auto h-full w-full rounded"
            />
          ) : (
            <div className="relative z-10">
              {/* <iframe
                className="z-20 h-full w-full rounded-lg"
                style={{ aspectRatio: "16/9" }}
                src="https://www.youtube.com/embed/GQllIAJ3aRw?si=5AQL-2TlmGTlvkC4"
                width="100%"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe> */}
              <video
                className="z-20 h-full w-full rounded-lg"
                width="100%"
                height="100%"
                // controls
                preload="auto"
                autoPlay
                loop
                muted
              >
                <source src="/faris/farisvid.mov" type="video/mp4" />
              </video>
            </div>
          )}

          <span
            className="absolute left-[-3%] top-[-4%] z-0 block h-[95%] w-full overflow-x-hidden rounded bg-blue-600"
            aria-hidden="true"
          ></span>

          <span
            className="absolute left-[3%] top-[5%] z-0 block h-full w-full overflow-x-hidden rounded bg-blue-100 drop-shadow-2xl"
            aria-hidden="true"
          ></span>
        </div>
      </div>

      {index !== servicesData.length - 1 && (
        <div className="container mx-auto w-10/12 border-t border-dashed border-gray-300 lg:hidden"></div>
      )}
    </React.Fragment>
  ));
  return (
    <>
      {/* <section className="mx-auto flex flex-col space-y-16 px-4 pb-32 pt-5 md:space-y-24 lg:max-w-7xl lg:space-y-32 lg:pt-10">
        {servicesJsx}
      </section> */}
      <div className="container mx-auto px-6 pb-10 pt-14 text-center">
        <h1 className="capitalizera text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
          Make your assets work for {/* explore our <br /> awesome{" "} */}
          <span className="underline decoration-blue-500">You</span>
          {/* <span className="underline decoration-blue-500">Components</span> */}
        </h1>
        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
          voluptatibus Make your assets work for you */}
          {/* Overhaul your file management strategy with FARIS */}
          Harness the full potential of FARIS to enhance efficiency,
          consistency, and security in your file management system.
        </p>
      </div>

      <section className="container mx-auto flex flex-col space-y-16 px-4 pb-32 pt-5 md:space-y-24 lg:space-y-32 lg:pt-10">
        {servicesJsx}
      </section>
    </>
  );
};

export default Farisfeatures;
