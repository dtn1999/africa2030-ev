"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { CustomButton } from "./components/button";
import { HeroCarousel } from "./components/hero-carousel";
import { Header } from "./components/layout/header";
import { Banner } from "./components/banner";
import { ImageGallery } from "./components/image-gallery";
import { ResourceCard } from "./components/resource-card";
import { SponsorCarousel } from "./components/sponsor-carousel";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Design Tokens
Builder.register("editor.settings", {
  designTokens: {
    colors: [
      { name: "White", value: "#fff" },
      { name: "Black", value: "#000" },
      // Gray
      { name: "Primary", value: "#049013" },
      { name: "Secondary", value: "#51C147" },
      { name: "Text", value: "#616161" },
      { name: "Headings", value: "#232323" },
      { name: "Footer", value: "#222329" },
      { name: "Background", value: "#fff" },
    ],
    // other design tokens
  },
});

Builder.registerComponent(withChildren(Header), {
  name: "Header",
  canHaveChildren: true,
  noWrap: true,
  childRequirements: {
    message:
      "You can only put Box, Columns, or Button, in the call to action of ",
    query: {
      "component.name": { $in: ["Core:Columns", "Core:Box", "Core:Button"] },
    },
  },
  inputs: [
    {
      name: "navigation",
      type: "reference",
      model: "navigation-links",
    },
    {
      name: "sticky",
      type: "boolean",
      defaultValue: true,
    },
  ],
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
  noWrap: true,
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
          name: "title",
          type: "text",
          localized: true,
        },
        {
          name: "description",
          type: "longText",
          localized: true,
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

Builder.registerComponent(Banner, {
  name: "Banner",
  inputs: [
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
});

Builder.registerComponent(ImageGallery, {
  name: "ImageGallery",
  inputs: [
    {
      name: "images",
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
      ],
    },
  ],
});

Builder.registerComponent(ResourceCard, {
  name: "ResourceCard",
  inputs: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "tag",
      type: "text",
      required: false,
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "gif"],
    },
    {
      name: "link",
      type: "url",
    },
  ],
});

Builder.registerComponent(SponsorCarousel, {
  name: "SponsorCarousel",
  inputs: [
    {
      name: "sponsors",
      type: "list",
      subFields: [
        {
          name: "website",
          type: "url",
        },
        {
          name: "name",
          type: "text",
        },
        {
          name: "logo",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "gif"],
        },
      ],
    },
  ],
});
