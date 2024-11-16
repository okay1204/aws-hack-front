import AgentInput from "@/components/ui/agent-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <div className="grid gap-2 py-20 bg-zinc-50">
        <section className="mx-auto max-w-[1000px] p-6 w-full flex flex-col justify-center items-center gap-6">
          <h1>CompanyName</h1>
          <AgentInput />
        </section>
      </div>
      <hr />
      <section className="mx-auto max-w-[1000px] w-full grid gap-2 p-6">
        <h2>Workbench</h2>
        <section className="grid grid-cols-3 gap-2">
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
