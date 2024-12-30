import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import CodeTool from '@editorjs/code'
import LinkTool from '@editorjs/link'
// import RawTool from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
// import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from "@editorjs/simple-image"
import Underline from '@editorjs/underline';
import TextVariantTune from '@editorjs/text-variant-tune';
// import AttachesTool from '@editorjs/attaches' //TODO create for upload file (DOC => https://github.com/editor-js/attaches)
import { ToolConstructable } from '@editorjs/editorjs';


export const editorConfig = {
  tools: {
    header: {
      class: Header as unknown as ToolConstructable,
      inlineToolbar: true,
      config: {
        placeholder: 'Enter a header',
        levels: [1, 2, 3, 4, 5, 6],
        defaultLevel: 1,
      },
    },
    list: {
      class: List as unknown as ToolConstructable,
      inlineToolbar: true,
    },
    quote: {
      class: Quote as unknown as ToolConstructable,
      inlineToolbar: true,
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote author',
      },
    },
    image: {
      class: SimpleImage as unknown as ToolConstructable,
      config: {
        placeholder: 'Upload an image or paste a URL',
      },
    },
    table: {
      class: Table as unknown as ToolConstructable,
      inlineToolbar: true,
      config: {
        rows: 2,
        cols: 3,
        maxRows: 5,
        maxCols: 5,
      },
    },
    code: CodeTool,
    warning: {
      class: Warning,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+W',
      config: {
        titlePlaceholder: 'Title',
        messagePlaceholder: 'Message',
      },
    },
    underline: Underline,
    delimiter: Delimiter,
    inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+C',
    },
    Marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M',
    },
    textVariant: TextVariantTune,
    linkTool: {
      class: LinkTool,
      // TODO: doc => https://github.com/editor-js/link
      // config: {
      //   endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching (need to create api for get metaData of URL (url from input))
      // },
    },
    
  },
  tunes: ['textVariant'],
  placeholder: 'Start writing your content...',
  autofocus: true,
};
