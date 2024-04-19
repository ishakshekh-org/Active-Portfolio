import Image from "next/image";

const images = [
  "/images/JurnL.webp",
  "/images/reyben-shery.png",
  "/images/shopscrape.png",
  "/images/sushi.png",
];
const imagesAlt = [
  "/images/shopscrape.png",
  "/images/sushi.png",
  "/images/JurnL.webp",
  "/images/reyben-shery.png",
];

const InfiniteCards = () => {
  return (
    <div className="overflow-x-auto flex left-0 gap-4">
      <div className="w-full h-full hidden sm:flex ">
        <marquee loop={true} direction="left">
          <div className="flex gap-14">
            {images.map((image, index) => (
              <Image
                className=" rounded-3xl"
                key={index}
                src={image}
                height={390}
                width={250}
                alt="Image"
              />
            ))}
          </div>
        </marquee>
        <marquee loop={true} direction="left">
          <div className="flex gap-14">
            {imagesAlt.map((image, index) => (
              <Image
                className=" rounded-3xl"
                key={index}
                src={image}
                height={390}
                width={250}
                alt="Image"
              />
            ))}
          </div>
        </marquee>
      </div>
      <div className="w-full h-full flex sm:hidden ">
        <marquee loop={true} direction="left">
          <div className="flex gap-14">
            {images.map((image, index) => (
              <Image
                className=" rounded-3xl"
                key={index}
                src={image}
                height={390}
                width={250}
                alt="Image"
              />
            ))}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default InfiniteCards;
