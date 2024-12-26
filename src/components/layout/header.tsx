"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronDown,
  ChevronDownIcon,
  ChevronRight,
  ChevronRightIcon,
  HeartIcon,
  Menu,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { useScroll } from "./use-scroll";

const navLinks = [
  {
    label: "Home",
    href: "#",
    subItems: [
      {
        label: "Home 1",
        href: "#",
      },
      {
        label: "Home 2",
        href: "#",
      },
    ],
  },
  {
    label: "About us",
    href: "#",
  },
  {
    label: "Projects",
    href: "#",
    subItems: [
      {
        label: "Home 1",
        href: "#",
      },
      {
        label: "Home 2",
        href: "#",
      },
    ],
  },

  {
    label: "Events",
    href: "#",
  },
  {
    label: "Contacts",
    href: "#",
  },
];
export function Header({}) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const scrollThresholdReached = useScroll(200);

  return (
    <header
      className={cn(
        "w-full bg-transparent fixed top-0 inset-x-0 h-[100px] z-[6] transition-all duration-700",
        {
          "bg-[#313131]": scrollThresholdReached,
        }
      )}
    >
      {/* contact information */}
      <div className=""></div>
      {/* main header mobile and tablet */}
      <div className="lg:hidden flex justify-between items-center h-[100px] px-4">
        <Sheet open={menuOpened} onOpenChange={setMenuOpened}>
          <MenuButton opened={menuOpened} onClick={() => setMenuOpened(true)} />
          <SheetContent
            side="left"
            className="bg-[#232323] md:w-[340px] border-0 px-9 py-0 w-[98%]"
          >
            <SheetHeader className="relative h-[100px] flex flex-row items-center justify-between">
              <Image
                src="/logo-light.png"
                width={100}
                height={100}
                alt="Organization Logo"
              />
              <MenuButton
                opened={menuOpened}
                onClick={() => setMenuOpened(false)}
              />
            </SheetHeader>
            <nav className="w-full">
              <ul className="w-full text-white">
                {navLinks.map((item, index) => (
                  <MobileMenuItem key={index} data={item} />
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
        <Image
          src="/logo-light.png"
          width={100}
          height={100}
          alt="Organization Logo"
        />
        {/* Navigation Menu Sheet */}
      </div>
      {/* main header desktop */}
      <div className="flex justify-between items-center h-[100px] px-4">
        <div className="flex items-center">
          <div className="rounded-[10px] bg-[#2f9114] size-[56px] mr-[13px] mb-[13px] flex items-center justify-center">
            <div className="grid grid-cols-3 gap-[2px]">
              <div className="size-[5px] rounded-full bg-white"></div>
              <div className="size-[5px] rounded-full bg-white"></div>
              <div className="size-[5px] rounded-full bg-white"></div>
              <div className="size-[5px] rounded-full bg-white"></div>
              <div className="size-[5px] rounded-full bg-white"></div>
              <div className="size-[5px] rounded-full bg-white"></div>
              <div className="size-[5px] rounded-full bg-white"></div>
              <div className="size-[5px] rounded-full bg-white"></div>
              <div className="size-[5px] rounded-full bg-white"></div>
            </div>
          </div>
          <Image
            src="/logo-light.png"
            width={100}
            height={100}
            alt="Organization Logo"
          />
        </div>
        {/* Navigation */}
        <nav className="flex items-center">
          <ul className="flex items-center text-white text-[16px]">
            {navLinks.map((item, index) => (
              <DesktopMenuItem key={index} data={item} />
            ))}
          </ul>
        </nav>
        {/* Call to actions */}
        <div className="flex items-center">
          <Link
            href="#"
            className="flex items-center rounded-[28px] px-[32px] py-3 space-x-[8px] bg-transparent text-white border-[#2f9114] border-[2px]"
          >
            <span className="">DONATE NOW</span>
            <HeartIcon className="size-8" />
          </Link>
        </div>
      </div>
    </header>
  );
}

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}
interface MenuItemProps {
  data: NavItem;
}

function DesktopMenuItem({ data }: MenuItemProps) {
  const [subMenuOpened, setSubMenuOpened] = useState(false);

  return (
    <Link href="#" className="flex items-center px-6 space-x-[13px]">
      <span className=" font-semibold">{data.label}</span>
      {data.subItems && data.subItems?.length > 0 && (
        <button
          onClick={() => setSubMenuOpened(!subMenuOpened)}
          className="size-9 flex items-center justify-center"
        >
          <span className="sr-only">Submenu</span>
          <ChevronDownIcon className="size-6" />
        </button>
      )}
      {subMenuOpened && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <nav className="pl-8 w-full">
              {data.subItems?.map((subitem, index) => (
                <MobileMenuItem key={index} data={subitem} />
              ))}
            </nav>
          </motion.div>
        </AnimatePresence>
      )}
    </Link>
  );
}

function MobileMenuItem({ data }: MenuItemProps) {
  const [subMenuOpened, setSubMenuOpened] = useState(false);
  return (
    <Link href={data.href} className="py-3 flex w-full flex-col">
      <div className="flex items-center justify-between w-full">
        <span
          className={cn(
            "transition-all duration-750 text-white hover:text-[#2f9114]",
            {}
          )}
        >
          {data.label}
        </span>
        {data.subItems && data.subItems.length > 0 && (
          <button
            onClick={() => setSubMenuOpened(!subMenuOpened)}
            className="size-9 bg-white/5 flex items-center justify-center"
          >
            <span className="sr-only">Submenu</span>
            <div className="size-9 bg-white/5 flex items-center justify-center">
              <ChevronRightIcon
                className={cn(
                  "text-white font-light transition-all duration-500",
                  {
                    "rotate-90": subMenuOpened,
                  }
                )}
                size={24}
              />
            </div>
          </button>
        )}
      </div>
      {subMenuOpened && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="pl-8 w-full">
              {data.subItems?.map((subitem, index) => (
                <MobileMenuItem key={index} data={subitem} />
              ))}
            </nav>
          </motion.div>
        </AnimatePresence>
      )}
    </Link>
  );
}

interface MenuButtonProps {
  onClick: () => void;
  opened: boolean;
}

function MenuButton({ onClick, opened }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-1 transition-all duration-700 hover:scale-105 right-0"
    >
      <span className="sr-only">Menu</span>
      {opened ? (
        <XIcon className="size-8 text-white bg-[#2f9114]" />
      ) : (
        <MenuIcon className="size-9 text-white" />
      )}
    </button>
  );
}
