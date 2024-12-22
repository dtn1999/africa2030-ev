import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { notFound } from "next/navigation";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";

  const page = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + ((await props?.params)?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();

  if (!page) {
    notFound();
  }

  console.log("page ", page);

  const header = await builder.get("header", {
    query: {
      id: page?.data?.header?.id,
    },
  });

  console.log("header ", header);

  const footer = await builder.get("footer", {
    query: {
      id: page?.data?.footer?.id,
    },
  });

  console.log("footer ", footer);

  return (
    <>
      {header && <RenderBuilderContent content={header} model="header" />}
      <RenderBuilderContent content={page} model={builderModelName} />
      {footer && <RenderBuilderContent content={footer} model="footer" />}
    </>
  );
}
