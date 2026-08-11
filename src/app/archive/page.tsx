import type { Metadata } from "next";
import { objects } from "@/data/objects";
import ArchiveExplorer from "@/components/ArchiveExplorer";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "Twenty objects whose original ideas outlived generations of redesign. Browse, search, and filter the Timeless archive.",
};

export default function ArchivePage() {
  return (
    <>
      <PageIntro
        eyebrow="The Archive"
        title="Objects whose original ideas outlived generations of redesign."
        lede="Twenty everyday things, collected as design artifacts. Each one survived its own era, its materials, and every attempt to replace it."
      />
      <section className="shell pb-28 md:pb-40">
        <ArchiveExplorer objects={objects} />
      </section>
    </>
  );
}
