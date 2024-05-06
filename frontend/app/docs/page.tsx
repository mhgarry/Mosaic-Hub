import { title } from "@/components/primitives";
import { Button } from "@nextui-org/react";

export default function DocsPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        <h1 className={title()}>Docs</h1>
      </div>
      <div>
        <Button>Click me</Button>
      </div>
    </section>
  );
}
