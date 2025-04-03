import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useRef, useState } from "react";

const CodeBlock = () => {
  const [code, setCode] = useState<string>(
    '// 여기에 JavaScript 코드를 입력하세요\nfunction example() {\n  const greeting = "안녕하세요!";\n  console.log(greeting);\n  return greeting;\n}'
  );
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const previewRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (previewRef.current && activeTab === "preview") {
      previewRef.current.innerHTML = `<code class="language-typescript">${escapeHTML(
        code
      )}</code>`;
      Prism.highlightAllUnder(previewRef.current);
    }
  }, [code, activeTab]);

  const escapeHTML = (text: string): string => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setCode(e.target.value);
  };

  return (
    <div className="flex flex-col w-full mt-8 gap-4">
      <h2 className="text-xl font-bold text-center">
        탭 전환 TypeScript 코드 에디터
      </h2>

      {/* 탭 메뉴 */}
      <div className="flex border-b border-gray-300">
        <button
          className={`py-2 px-4 font-medium cursor-pointer ${
            activeTab === "edit"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("edit")}
        >
          입력
        </button>
        <button
          className={`py-2 px-4 font-medium cursor-pointer ${
            activeTab === "preview"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          미리보기
        </button>
      </div>

      {/* 입력 탭 */}
      {activeTab === "edit" && (
        <div className="w-full h-64 border border-gray-300 rounded-md overflow-hidden">
          <textarea
            className="w-full h-full p-4 font-mono resize-none focus:outline-none border-none"
            value={code}
            onChange={handleChange}
            spellCheck={false}
          />
        </div>
      )}

      {/* 미리보기 탭 */}
      {activeTab === "preview" && (
        <div className="w-full h-64 border border-gray-300 rounded-md overflow-auto bg-gray-800">
          <pre ref={previewRef} className="p-4 m-0 font-mono text-sm">
            <code className="language-typescript">{code}</code>
          </pre>
        </div>
      )}

      <div className="text-sm text-gray-500 italic text-center">
        {activeTab === "edit"
          ? "코드를 입력한 후 미리보기 탭에서 구문 강조된 결과를 확인하세요."
          : "구문 강조된 코드 미리보기입니다. 편집하려면 입력 탭으로 이동하세요."}
      </div>
    </div>
  );
};

export default CodeBlock;
