import { useState, useEffect } from 'react';

const ErrorBoundary = ({ children, fallback, onReset }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const errorHandler = (error) => {
      setHasError(true);
      setError(error);
      console.error('Error caught by ErrorBoundary:', error);
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  const resetError = () => {
    setHasError(false);
    setError(null);
    onReset?.();
  };

  if (hasError) {
    return fallback
      ? fallback({ error, resetError })
      : (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>{error?.message}</p>
          <button onClick={resetError}>Try again</button>
        </div>
      );
  }

  return children;
};

export default ErrorBoundary;
