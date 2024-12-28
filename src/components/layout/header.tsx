"use client";
import { motion, AnimatePresence } from "framer-motion";

import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { ChevronRightIcon, MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import { useScroll } from "./use-scroll";
import { NavItem } from "@/types/ui";
import { extractNavigationLinks } from "@/lib/cms";
import { Logo } from "./logo";

interface HeaderProps {
  navigation: any;
  sticky?: boolean;
}

export function Header({
  children,
  navigation,
  sticky,
}: PropsWithChildren<HeaderProps>) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);
  const scrollThresholdReached = useScroll(200);

  const navLinks: NavItem[] = extractNavigationLinks(navigation);

  return (
    <header
      // TODO: Make the header sticky instead of fixed
      className={cn(
        "fixed w-full bg-background top-0 inset-x-0 h-[100px] z-[6] transition-all duration-700"
      )}
    >
      {/* contact information */}
      <div className=""></div>

      {/* main header mobile and tablet */}
      <div className="lg:hidden flex justify-between items-center h-[100px] px-4">
        <Sheet open={mobileMenuOpened} onOpenChange={setMobileMenuOpened}>
          <MenuButton
            opened={mobileMenuOpened}
            onClick={() => setMobileMenuOpened(true)}
          />
          <SheetContent
            side="left"
            className="bg-background md:w-[340px] border-0 px-9 py-0 w-[98%]"
          >
            <SheetHeader className="relative h-[100px] flex flex-row items-center justify-between">
              <Logo theme="light" lightLogoUrl="/logo-dark.png" />
              <MenuButton
                opened={mobileMenuOpened}
                onClick={() => setMobileMenuOpened(false)}
              />
            </SheetHeader>
            <nav className="w-full">
              <ul className="w-full text-black font-semibold">
                {navLinks?.map((item, index) => (
                  <MobileMenuItem key={index} data={item} />
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
        <Logo theme="light" lightLogoUrl="/logo-dark.png" />
      </div>

      {/* main header desktop */}
      <div className="hidden lg:flex justify-between items-center h-[100px] px-16">
        <div className="flex items-center">
          <Logo theme="light" lightLogoUrl="/logo-dark.png" />
        </div>
        <nav className="flex items-center">
          <ul className="flex items-center text-black text-[16px] font-semibold">
            {navLinks?.map((item, index) => (
              <DesktopMenuItem key={index} data={item} />
            ))}
          </ul>
        </nav>
        {/* Call to actions (coming from the CMS) */}
        <div className="flex items-center">{children}</div>
      </div>
    </header>
  );
}

interface MenuItemProps {
  data: NavItem;
}

function DesktopMenuItem({ data }: MenuItemProps) {
  return (
    <Link
      href={data.href}
      className="flex items-center px-6 space-x-[13px] hover:text-primary"
    >
      <span className=" font-semibold">{data.label}</span>
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
            "transition-all duration-750 text-black hover:text-primary",
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
        <XIcon className="size-8 text-white bg-primary" />
      ) : (
        <MenuIcon className="size-9 text-black" />
      )}
    </button>
  );
}

interface ContactMenuButtonProps {
  onClick?: () => void;
}

function ContactMenuButton({ onClick }: ContactMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-[10px] bg-primary size-[56px] mr-[13px] mb-[13px] flex items-center justify-center"
    >
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
    </button>
  );
}
