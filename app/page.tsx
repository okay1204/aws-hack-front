import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-[1000px] w-full grid gap-2">
        <section>
          <h1>Agent</h1>
          <Input />
        </section>
        <hr />
        <section>
          <h1>Workbench</h1>
          <section className="grid grid-cols-3 gap-2">
            <Card>
              <CardHeader>
                <CardTitle>Test</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="pt-3 pb-6">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
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
    </div>
  );
}
