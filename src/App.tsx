import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./common/Layout";
import { AppRouter } from "./Router";

function App() {
  const queryClient = new QueryClient({})
  return (
    // <div className="flex justify-center items-center h-screen">
    //  <button className="btn">Button</button>
    // <button className="btn btn-neutral">Neutral</button>
    // <button className="btn btn-primary">Primary</button>
    // <button className="btn btn-secondary">Secondary</button>
    // <button className="btn btn-accent">Accent</button>
    // <button className="btn btn-ghost">Ghost</button>
    // <button className="btn btn-link">Link</button>
    // {/* // </div> */}
    <QueryClientProvider client={queryClient}>
      <Layout>
        <AppRouter />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
