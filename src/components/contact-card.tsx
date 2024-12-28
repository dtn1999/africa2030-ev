import { MapPinIcon } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiTiktok,
} from "@icons-pack/react-simple-icons";

const SOCIAL_PROVIDER_CONFIG = {
  facebook: (
    <SiFacebook className=" size-[39px] bg-transparent text-white border-1 rounded-full hover:bg-[#1877f2]" />
  ),
  tiktok: (
    <SiTiktok className="size-[39px] bg-transparent text-white border-1 rounded-full hover:bg-[#000]" />
  ),
  twitter: (
    <SiX
      size={24}
      className="bg-transparent text-white border-1 rounded-full hover:bg-[#1DA1F2]"
    />
  ),
  instagram: (
    <SiInstagram
      size={24}
      className="bg-transparent text-white border-1 rounded-full hover:bg-[#C13584]"
    />
  ),
};

interface ContactCardProps {
  email: string;
  phone: string;
  address: string;
  socials: {
    provider: "facebook" | "twitter" | "instagram" | "tiktok";
    url: string;
  }[];
  orientation: "horizontal" | "vertical";
}

export function ContactCard({
  email,
  phone,
  address,
  socials,
}: ContactCardProps) {
  return (
    <div className="">
      {/* Address */}
      <a href={`https://www.google.com/maps/search/${address}`} target="_blank">
        <div className="flex items-center">
          <MapPinIcon size={24} />
          <p className="text-sm">{address}</p>
        </div>
      </a>
      {/* Email */}
      <a href={`mailto:${email}`}>
        <p className="text-sm">{email}</p>
      </a>
      {/* Phone */}
      <a href={`tel:${phone}`}>
        <p className="text-sm">{phone}</p>
      </a>
      {/* Socials */}
      <div className="flex items-center">
        {socials.map((social, index) => (
          <a key={index} href={social.url} target="_blank" className="p-2">
            {SOCIAL_PROVIDER_CONFIG[social.provider]}
          </a>
        ))}
      </div>
    </div>
  );
}
