import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CKEditorDemo = ({ isDark, setIsDark }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const draft = localStorage.getItem("editorDraft");
    if (draft) setData(draft);
  }, []);

  const editorConfig = {
    language: {
      ui: "fa",
      content: "fa",
    },
    placeholder: "اینجا شروع کن به نوشتن...",
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "link",
        "blockQuote",
        "|",
        "numberedList",
        "bulletedList",
        "|",
        "insertTable",
        "imageUpload",
        "|",
        "heading",
      ],
    },
  };

  return (
    <div
      className={`max-w-[1100px] mx-auto p-5 rounded-xl shadow-lg transition-all duration-300 ${
        isDark ? "bg-neutral-900" : "bg-white"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-300 ${
            isDark
              ? "text-white border-neutral-500 bg-neutral-800 hover:bg-neutral-700"
              : "text-neutral-700 border-neutral-300 bg-white hover:bg-neutral-100"
          }`}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>

        <h2
          className={`text-xl font-bold transition-colors ${
            isDark ? "text-neutral-100" : "text-neutral-800"
          }`}
        >
          ادیتور
        </h2>
      </div>

      {/* Editor */}
      <div className={`${isDark ? "dark" : ""} min-h-[400px]`} dir="rtl">
        <CKEditor
          editor={ClassicEditor}
          data={data}
          config={editorConfig}
          onReady={(editor) => {
            const editable = editor.ui.view.editable.element;
            editable.classList.add(
              "min-h-[650px]",
              "p-4",
              "rounded-lg",
              "text-right",
              "leading-8",
              "text-[16px]",
              "transition-all",
              "duration-300",
              "border",
              isDark
                ? "bg-neutral-800 text-neutral-100 border-neutral-700"
                : "bg-white text-neutral-800 border-neutral-300"
            );

            const toolbar = editor.ui.view.toolbar.element;
            toolbar.classList.add(
              "flex",
              "flex-row-reverse",
              "gap-1",
              "p-1",
              "rounded-md",
              "border",
              "transition-all",
              "duration-300",
              isDark
                ? "bg-neutral-800 border-neutral-700"
                : "bg-neutral-100 border-neutral-300"
            );
          }}
          onChange={(event, editor) => {
            const content = editor.getData();
            setData(content);
            localStorage.setItem("editorDraft", content);
          }}
        />
      </div>
    </div>
  );
};

export default CKEditorDemo;
