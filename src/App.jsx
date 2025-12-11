import { useState } from "react";
import CKEditorDemo from "./components/CKEditorDemo";
import "./tailwind.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <main
      className={`min-h-screen p-10 transition-all duration-300 ${
        isDark ? "dark bg-neutral-950" : "bg-gray-50"
      }`}
    >
      <CKEditorDemo isDark={isDark} setIsDark={setIsDark} />
    </main>
  );
}

export default App;
