export default function Button({ children, ...rest }) {
  return (
    <button style={{ padding: '4px 12px', margin: '0 4px', cursor: 'pointer' }} {...rest}>
      {children}
    </button>
  );
}
