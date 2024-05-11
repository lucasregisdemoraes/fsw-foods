import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      height={150}
      width={350}
      className="h-auto w-full object-contain"
      sizes="100%"
      //   alt="Banner promocional"
      {...props}
    />
  );
};

export default PromoBanner;
