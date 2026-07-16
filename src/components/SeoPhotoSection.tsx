import Image from "next/image";

type SeoPhotoSectionProps = {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
};

export default function SeoPhotoSection({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
}: SeoPhotoSectionProps) {
  return (
    <section className="px-5 pb-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="flex justify-center bg-[#f7f3ea] p-4 sm:p-6">
          <div className="relative h-[220px] w-full max-w-4xl overflow-hidden rounded-2xl sm:h-[300px] lg:h-[340px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 900px"
              priority={false}
            />
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A447]">
            {eyebrow}
          </p>

          <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#0A3A34] sm:text-3xl">
            {title}
          </h2>

          <p className="mt-4 text-base leading-8 text-[#31524c]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}