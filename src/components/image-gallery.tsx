import Image from "next/image";

interface ImageGalleryProps {
  images: {
    image: string;
  }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  console.log("image ", images);

  return (
    <div className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-3">
        {images.map(({ image }, index) => (
          <div key={index} className="relative h-[300px]">
            <Image
              src={image}
              fill
              alt="Gallery Image"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
