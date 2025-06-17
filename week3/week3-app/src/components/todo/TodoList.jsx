import { useEffect } from "react";

import useTodoData from "../../hooks/useTodoData";
import useTodoInput from "../../hooks/useTodoInput";

import Button from "../common/Button";
import Input from "../common/input";
import Footer from "../common/Footer";

export default function TodoList() {
  const { data } = useTodoData();
  const { a, c, e, f, clicked, doSubmit } = useTodoInput([]);

  useEffect(() => {
    if (data.length > 0) {
      f(data);
    }
  }, [data, f]);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1 style={{ color: c ? "red" : "blue" }}>할 일 목록 관리 애플리케이션</h1>
      <p>추가하고 싶은 할 일을 입력하신 후, 아래 버튼을 눌러주세요.</p>
      <Input
        onChange={clicked}
        value={a}
        placeholder="예: 프레젠테이션 준비하기"
      />
      <Button onClick={doSubmit}>할 일 추가</Button>
      <hr />
      {e.length > 0 ? (
        <ul>
          {e.map(i => (
            <li key={i.id} style={{ background: i.id % 2 === 0 ? "#eef" : "#fee", padding: "4px", marginBottom: "4px" }}>
              {i.title || "제목 없음"} {i.completed ? "✅ 완료됨" : ""}
            </li>
          ))}
        </ul>
      ) : <p>등록된 할 일이 없습니다.</p>}
      <Footer />
    </div>
  );
}
