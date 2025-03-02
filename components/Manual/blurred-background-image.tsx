import Image from "next/image";
import { ReactNode } from "react";

interface BlurredBackgroundImageProps {
  src: string;
  alt: string;
  children: ReactNode;
}

export default function BlurredBackgroundImage({
  src,
  alt,
  children,
}: BlurredBackgroundImageProps) {
  return (
    <div className="relative w-full ">
      <Image
        src={src}
        alt={alt}
        fill
        quality={100}
        className="z-0 hidden md:block object-cover"
      />
      <div className="absolute hidden md:block inset-0 bg-black/50 backdrop-blur-sm z-10"></div>
      <div className="relative z-20 ">{children}</div>
    </div>
  );
}
