import { useEffect, useState } from "react";
import axios from "axios";

export default function useTodoData() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data: todos, loading, error };
}
