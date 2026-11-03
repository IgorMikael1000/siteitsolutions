import Image, { type ImageProps } from "next/image";

type ResponsiveImageProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height" | "unoptimized"
> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  mobileSrc?: string;
};

export function ResponsiveImage({
  src,
  mobileSrc,
  alt,
  ...imageProps
}: ResponsiveImageProps) {
  return (
    <picture>
      {mobileSrc ? (
        <source media="(max-width: 700px)" srcSet={mobileSrc} />
      ) : null}
      <Image
        {...imageProps}
        alt={alt}
        src={`${src}-1440.webp`}
        unoptimized
      />
    </picture>
  );
}
