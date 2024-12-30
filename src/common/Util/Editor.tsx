import React, { useEffect, useRef } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { editorConfig } from '../../constants/editorConfig';

interface EditorProps {
  data?: OutputData | null; 
  onChange?: (data: OutputData) => void;
}

const Editor: React.FC<EditorProps> = ({ onChange, data }) => {
  const editorInstance = useRef<EditorJS | null>(null);
  const editorContainerRef = useRef<HTMLDivElement | null>(null);

  const initializedEditor = () => {
    if(editorContainerRef.current && !editorInstance.current) {
      editorInstance.current = new EditorJS({
        holder: editorContainerRef.current,
        ...editorConfig,
        data: data || undefined,
        onChange: async () => {
          if (onChange && editorInstance.current) {
            const data = await editorInstance.current?.save();
            onChange(data);
          }
        },
      });
    }
  }

  const destroyEditor = async () => {
    if(editorInstance.current) {
      try {
        await editorInstance.current.destroy();
        editorInstance.current = null;
        console.log('Editor instance destroyed successfully');
      } catch (error) {
        console.error('Error destroying editor instance', error);
      }
    }
  }

  useEffect(() => {
    initializedEditor();

    return () => {
      destroyEditor();
    }
  }, []);

  return <div ref={editorContainerRef} />;
};

export default Editor;
