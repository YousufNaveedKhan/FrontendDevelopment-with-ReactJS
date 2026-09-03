import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/todos?_limit=5;"

function TodosDemo() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            setTodos(data)
        })
        .catch((err) => {
            setError(err.message)
        })
        .finally(() => {
            setLoading(false)
        })
    })

    return (
        <>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error: {error}</h2>}

        {!loading && !error && todos?.map((todo) => (
            <ul>
                <li key={todo.id}>
                    <strong>{todo.title}</strong>
                    <br />
                    <span>{todo.completed}</span>
                </li>
            </ul>
        ))}
        </>
    )
}

export default TodosDemo