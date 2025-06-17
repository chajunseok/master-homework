import { useState, useCallback } from "react";

export default function useTodoInput(initialTodos = []) {
  const [a, b] = useState(""); // 입력값
  const [c, d] = useState(false); // 포커스 상태
  const [e, f] = useState(initialTodos); // 할 일 목록

  const clicked = useCallback((e) => {
    d(true);
    b(e.target.value);
  }, []);

  const doSubmit = useCallback(() => {
    if (a.length < 1) {
      alert("내용을 입력해주세요.");
      return;
    }
    f((prev) => [...prev, { title: a, id: Math.random() * 10000 }]);
    b("");
    d(false);
  }, [a]);

  return {
    a, b, c, d, e, f, clicked, doSubmit
  };
} 