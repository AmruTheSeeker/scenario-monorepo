import { Button } from "@scenario-monorepo/uikit";

async function getData() {
  const res = await fetch('http://localhost:8000/api/hello', {
    cache: "no-store"
  });
  const data = await res.json();
  return data; 
}

export default async function Index() {
  const data = await getData();
  return (
    <div>
      <Button>Click me!</Button>
      <div className="bg-red-400">Platform</div>
      <pre>{ JSON.stringify(data, null, 2) }</pre>
    </div>
    )
}
