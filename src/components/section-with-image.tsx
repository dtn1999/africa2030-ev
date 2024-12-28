import { BuilderBlocks, BuilderElement } from "@builder.io/react";

interface CustomSectionLayoutProps {
  title: string;
  subtitle: string;
  showSubtitle: boolean;
  leftColumn: BuilderElement[];
  rightColumn: BuilderElement[];
  builderBlock: BuilderElement;
}
export function CustomSectionLayout(props: CustomSectionLayoutProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <BuilderBlocks
        parentElementId={props.builderBlock.id}
        dataPath={`leftColumn.blocks`}
        blocks={props.leftColumn}
      />
      <BuilderBlocks
        parentElementId={props.builderBlock.id}
        dataPath={`rightColumn.blocks`}
        blocks={props.rightColumn}
      />
    </section>
  );
}
