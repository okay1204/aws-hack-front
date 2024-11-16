import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="grid">
      <h1>Agent</h1>
      <Input />
      <hr />
      <h1>Workbench</h1>
      <Card>
        <CardHeader>
          <CardTitle>Test</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Test</p>
        </CardContent>
      </Card>
    </div>
  );
}
