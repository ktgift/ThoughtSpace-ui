import { useState } from "react";
import { Layout } from "./common/Layout";
import Editor from "./common/Util/Editor";

function App() {
  const [isOpenEditor, setIsOpenEditor] = useState(false);
  const [editorData, setEditorData] = useState(null);
  const handleEditorChange = (data: any) => {
    setEditorData(data);
    console.log('data', data);
  }

  return (
    // <div className="flex justify-center items-center h-screen">
    <Layout>
      <button className="btn btn-primary" onClick={() => setIsOpenEditor(true)}>Add</button>
      {isOpenEditor && <div>
        <Editor data={editorData} onChange={handleEditorChange} />
      </div>}

      {/* <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button> */}

      </Layout>
    // {/* // </div> */}
  );
}

export default App;
