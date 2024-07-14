import DefaultLayout from "@/layouts/default";
import BoxShadow from "@/components/tools/BoxShadow";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <BoxShadow />
      </section>
    </DefaultLayout>
  );
}
