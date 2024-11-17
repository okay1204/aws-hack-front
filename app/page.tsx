import AgentInput from "@/components/ui/agent-input";
import LiveAgent from "@/components/ui/live-agent";
import WorkbenchCard from "@/components/ui/workbench-card";
import { dd } from "./dd";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div>
      <div className="grid gap-2 bg-zinc-50">
        <section className="mx-auto max-w-[1000px] px-6 pt-24 pb-28 w-full flex flex-col justify-center items-center gap-6">
          <h1>Create Agent</h1>
          <AgentInput />
        </section>
      </div>
      <hr />

      <section className="mx-auto max-w-[1000px] w-full grid gap-6 p-6 pb-12 *:grid *:gap-2">
        <div>
          <h2>Live Agents</h2>
          <div>
            {[...Array(3)].map((_, i) => (
              <LiveAgent
                key={i}
                title="Agent Name"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-6">
            <h2>Workbench</h2>
            <div className="w-fit mt-6">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={String("Sort")} />
                </SelectTrigger>
                <SelectContent align="end">
                  {["Test", "Test2", "Test3"].map((type, i) => (
                    <SelectItem key={i} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {dd.map(({ name, notes }, i) => (
              <WorkbenchCard key={i} name={name} notes={notes} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
