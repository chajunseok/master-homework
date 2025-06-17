export default function Footer({ children }) {
  return (
    <footer style={{ marginTop: '20px', fontSize: '12px', color: '#555' }}>
      <small>{children || '버전 0.1 - 실습용으로 간단히 구현된 예제입니다.'}</small>
    </footer>
  );
} 