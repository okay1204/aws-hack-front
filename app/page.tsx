import AgentInput from "@/components/ui/agent-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LiveAgent from "@/components/ui/live-agent";

export default function Home() {
  return (
    <div>
      <div className="grid gap-2 bg-zinc-50">
        <section className="mx-auto max-w-[1000px] px-6 pt-24 pb-28 w-full flex flex-col justify-center items-center gap-6">
          <h1>CompanyName</h1>
          <AgentInput />
        </section>
      </div>
      <hr />
      <section className="mx-auto max-w-[1000px] w-full grid gap-2 p-6">
        <h2>Live Agents</h2>
        <div>
          <LiveAgent />
          <LiveAgent />
          <LiveAgent />
          <LiveAgent />
        </div>

        <h2>Workbench</h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Card>
            <CardHeader>
              <CardTitle>Test</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="pt-3 pb-6">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex items-center gap-2 *:w-full">
                <Button variant={"default"}>Test</Button>
                <Button variant={"secondary"}>Test</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </section>
    </div>
  );
}
