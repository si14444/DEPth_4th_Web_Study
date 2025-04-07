import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useRef, useState } from "react";

const CodeBlock = ({
  code,
  setCode,
  isEditable = true,
}: {
  code: string;
  setCode?: (code: string) => void;
  isEditable?: boolean;
}) => {
  const [activeTab, setActiveTab] = useState<"edit" | "preview">(
    isEditable ? "edit" : "preview"
  );
  const previewRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 미리보기 탭에서 구문 강조 적용
  useEffect(() => {
    if (previewRef.current && activeTab === "preview") {
      previewRef.current.innerHTML = `<code class="language-typescript">${escapeHTML(
        code
      )}</code>`;
      Prism.highlightAllUnder(previewRef.current);
    }
  }, [code, activeTab]);

  // textarea 높이 자동 조절 - activeTab을 의존성 배열에 추가
  useEffect(() => {
    if (activeTab === "edit") {
      // 약간의 지연을 주어 DOM이 업데이트된 후 높이 조정
      setTimeout(adjustTextareaHeight, 0);
    }
  }, [code, activeTab]);

  // 탭 변경 핸들러
  const handleTabChange = (tab: "edit" | "preview") => {
    setActiveTab(tab);
  };

  // HTML 이스케이프 함수
  const escapeHTML = (text: string): string => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setCode?.(e.target.value);
  };

  // textarea 높이 조절 함수
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // 현재 스크롤 위치 저장
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    textarea.style.height = "auto";
    const scrollHeight = textarea.scrollHeight;
    textarea.style.height = `${Math.max(100, scrollHeight)}px`;

    // 스크롤 위치 복원
    window.scrollTo(0, scrollTop);
  };

  return (
    <div className="flex flex-col w-full pt-4 pb-4 max-w-3xl mx-auto gap-4">
      {/* 탭 메뉴 */}
      {isEditable && (
        <div className="flex border-b border-gray-300">
          <button
            className={`py-2 px-4 font-medium cursor-pointer ${
              activeTab === "edit"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabChange("edit")}
          >
            입력
          </button>
          <button
            className={`py-2 px-4 font-medium cursor-pointer ${
              activeTab === "preview"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => handleTabChange("preview")}
          >
            미리보기
          </button>
        </div>
      )}

      {/* 입력 및 미리보기 영역  */}
      <div className="w-full">
        {isEditable && (
          <div
            className={`w-full border border-gray-300 rounded-md overflow-hidden ${
              activeTab === "edit" ? "block" : "hidden"
            }`}
          >
            <textarea
              ref={textareaRef}
              className="w-full p-4 font-mono resize-none focus:outline-none border-none min-h-[100px]"
              value={code}
              onChange={handleChange}
              spellCheck={false}
              onInput={adjustTextareaHeight}
            />
          </div>
        )}

        {/* 미리보기 영역 */}
        <div
          className={`w-full border border-gray-300 rounded-md overflow-auto bg-gray-800 min-h-[100px] ${
            activeTab === "preview" ? "block" : "hidden"
          }`}
        >
          <pre ref={previewRef} className="p-4 m-0 font-mono text-sm">
            <code className="language-typescript">{code}</code>
          </pre>
        </div>
      </div>

      {isEditable && (
        <div className="text-sm text-gray-500 italic text-center">
          {activeTab === "edit"
            ? "코드를 입력한 후 미리보기 탭에서 구문 강조된 결과를 확인하세요."
            : "구문 강조된 코드 미리보기입니다. 편집하려면 입력 탭으로 이동하세요."}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
