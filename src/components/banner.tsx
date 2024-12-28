interface BannerProps {
  image: string;
}

export function Banner({ image }: BannerProps) {
  return (
    <div className="relative w-[100vw] h-[396px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.7)` }}
        />
      </div>
    </div>
  );
}
