"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import { Socials } from "./components/socials";
import { NewsLetterForm } from "./components/newsletter-form";
import { CustomButton } from "./components/button";
import { HeroCarousel } from "./components/hero-carousel";
import { SectionCarousel } from "./components/section-carousel";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.register("editor.settings", {
  designTokens: {
    colors: [
      { name: "White", value: "#fff" },
      // Orange
      { name: "Brand Orange Default", value: "#F74F22" },
      { name: "Brand Orange Light", value: "#FFAC00" },
      { name: "Brand Orange Dark", value: "#B93B1A" },
      // Green
      { name: "Brand Green Dark", value: "#049013" },
      { name: "Brand Green Default", value: "#8CAB2E" },
      { name: "Brand Green Light", value: "#61CE70" },
      // Coral
      { name: "Brand Coral Dark", value: "#AE7B50" },
      { name: "Brand Coral Default", value: "#C88C5E" },
      { name: "Brand Coral Light", value: "#A5877A" },
      // Red
      { name: "Brand Red Dark", value: "#A00" },
      { name: "Brand Red Default", value: "#B90000" },
      { name: "Brand Red Light", value: "#DA6D6D" },
      // Desert
      { name: "Brand Desert Dark", value: "#AE7B50" },
      { name: "Brand Desert Default", value: "#C88C5E" },
      { name: "Brand Desert Light", value: "#A5877A" },
      // Indigo
      { name: "Brand Green Dark", value: "#4054B2" },
      { name: "Brand Green Default", value: "#543FD7" },
      { name: "Brand Green Light", value: "#7D89F8" },
      // Gray
      { name: "Brand Gray Darker", value: "#161617" },
      { name: "Brand Gray Dark", value: "#232323" },
      { name: "Brand Gray Default", value: "#616161" },
      { name: "Brand Gray Light", value: "#C9C9C9" },
    ],
    // other design tokens
  },
});

Builder.registerComponent(CustomButton, {
  name: "Core:Button",
  defaultStyles: {
    appearance: "none",
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    paddingRight: "24px",
    backgroundColor: "#000000",
    color: "white",
    borderRadius: "28px",
    textAlign: "center",
    cursor: "pointer",
  },
  inputs: [
    {
      name: "text",
      type: "text",
      defaultValue: "Click me!",
      bubble: true,
    },
    {
      name: "link",
      type: "url",
      bubble: true,
    },
    {
      name: "openLinkInNewTab",
      type: "boolean",
      defaultValue: false,
      friendlyName: "Open link in new tab",
    },
    {
      name: "variant",
      type: "string",
      friendlyName: "Choose a variant.",
      enum: ["solid", "outline", "link", "ghost"],
      defaultValue: "solid",
    },
    {
      name: "primaryColor",
      type: "color",
      friendlyName: "Primary color",
      defaultValue: "black",
    },
    {
      name: "secondaryColor",
      type: "color",
      friendlyName: "Secondary color. Used for hover event.",
      defaultValue: "white",
    },
  ],
  noWrap: true,
});

Builder.registerComponent(HeroCarousel, {
  name: "HeroCarousel",
  inputs: [
    {
      name: "slides",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "gif"],
          required: true,
        },
        {
          name: "caption",
          type: "text",
        },
        {
          name: "link",
          type: "url",
        },
      ],
    },
    {
      name: "autoplay",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "autoplaySpeed",
      type: "number",
      defaultValue: 3000,
      friendlyName: "Autoplay Speed (ms)",
    },
    {
      name: "showArrows",
      type: "boolean",
      defaultValue: true,
      friendlyName: "Show Navigation Arrows",
    },
    {
      name: "showDots",
      type: "boolean",
      defaultValue: true,
      friendlyName: "Show Navigation Dots",
    },
  ],
});

Builder.registerComponent(SectionCarousel, {
  name: "SectionCarousel",
  inputs: [
    {
      name: "slides",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "gif"],
          required: true,
        },
        {
          name: "link",
          type: "url",
        },
      ],
    },
    {
      name: "autoplay",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "autoplaySpeed",
      type: "number",
      defaultValue: 3000,
      friendlyName: "Autoplay Speed (ms)",
    },
    {
      name: "showArrows",
      type: "boolean",
      defaultValue: true,
      friendlyName: "Show Navigation Arrows",
    },
    {
      name: "showDots",
      type: "boolean",
      defaultValue: true,
      friendlyName: "Show Navigation Dots",
    },
    {
      name: "dotsAlignment",
      type: "string",
      defaultValue: "right",
      enum: ["left", "center", "right"],
      friendlyName: "Position of the dots",
    },
  ],
});

Builder.registerComponent(Socials, {
  name: "SocialLinks",
  inputs: [],
});

Builder.registerComponent(NewsLetterForm, {
  name: "NewsletterForm",
  inputs: [],
});
