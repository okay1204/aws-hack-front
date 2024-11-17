import WorkBench from "./WorkBench";
import AgentList from "./AgentList";
import AgentInput from "@/components/ui/agent-input";

export default async function Home({
  params,
}: {
  params: Promise<{ storeName: string }>;
}) {
  const { storeName } = await params;
  return (
    <div>
      <div className="grid gap-2 bg-zinc-50">
        <section className="mx-auto max-w-[1000px] px-6 pt-24 pb-28 w-full flex flex-col justify-center items-center gap-6">
          <h1>Create Agent</h1>
          <AgentInput storeName={storeName} />
        </section>
      </div>
      <hr />

      <section className="mx-auto max-w-[1000px] w-full grid gap-6 p-6 pb-12 *:grid *:gap-2">
        <div>
          <AgentList storeName={storeName} />
        </div>

        <div>
          <WorkBench />
        </div>
      </section>
    </div>
  );
}
