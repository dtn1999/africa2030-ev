import Image from "next/image";

interface LogoProps {
  lightLogoUrl: string;
  darkLogoUrl?: string;
  theme: "light" | "dark";
}

export function Logo({
  theme = "light",
  lightLogoUrl = "/logo-light.png",
  darkLogoUrl = "/logo-dark.png",
}: LogoProps) {
  return (
    <Image
      src={theme === "light" ? lightLogoUrl : darkLogoUrl ?? lightLogoUrl}
      width={100}
      height={100}
      alt="Organization Logo"
    />
  );
}
