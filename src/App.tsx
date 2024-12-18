import { Layout } from "./common/Layout";

function App() {

  return (
    // <div className="flex justify-center items-center h-screen">
    <Layout >
      <h1 className="text-4xl font-bold">
        Hello, Tailwind CSS with React!
      </h1>

      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>

      </Layout>
    // {/* // </div> */}
  );
}

export default App;
