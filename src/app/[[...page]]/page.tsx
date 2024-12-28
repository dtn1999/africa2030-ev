import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";
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
      options: {
        locale: "Default",
      },
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

  const header = await builder.get("header", {
    model: "header",
    query: {
      id: page?.data?.header?.id,
    },
  });

  return (
    <main className="relative pt-[100px]">
      {header && (
        <RenderBuilderContent
          locale="Default"
          content={header}
          model="header"
        />
      )}
      <RenderBuilderContent
        locale="Default"
        content={page}
        model={builderModelName}
      />
    </main>
  );
}
