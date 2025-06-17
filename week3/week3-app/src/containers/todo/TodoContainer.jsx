import { Suspense } from "react";
import ErrorBoundary from "../../utils/ErrorBoundary";
import TodoList from "../../components/todo/TodoList";

export default function TodoContainer() {
  return (
    <ErrorBoundary
      fallback={({ error, resetError }) => (
        <div>
          <h2>데이터를 불러오는 중 문제가 발생했습니다.</h2>
          <p>{error.message}</p>
          <button onClick={resetError}>다시 시도</button>
        </div>
      )}
    >
      <Suspense fallback={<div>잠시만 기다려 주세요. 데이터를 불러오고 있습니다...</div>}>
        <TodoList />
      </Suspense>
    </ErrorBoundary>
  );
}
