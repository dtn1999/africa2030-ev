import { NavItem } from "@/types/ui";

//Cannot make this typesafe, constantly changes when the configuration
// In the CMS changes.
export function extractNavigationLinks(
  navigation: any,
  locale: string = "Default"
): NavItem[] {
  let navLinks = [];
  if (navigation) {
    navLinks = navigation?.value?.data?.links?.map((item: any) => {
      return {
        label: item.label[locale],
        href: item["href"],
        subItems: item?.subItems?.map((subItem: any) => ({
          label: subItem.label[locale],
          href: subItem["href"],
        })),
      };
    });
  }

  return navLinks ?? [];
}
