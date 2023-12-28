async function getData() {
  const res = await fetch('http://localhost:8000/api/hello');
  const data = await res.json();
  return data; 
}

export default async function Index() {
  const data = await getData();
  return (
    <div>
      <h3>Platform</h3>
      <pre>{ JSON.stringify(data, null, 2) }</pre>
    </div>
    )
}
