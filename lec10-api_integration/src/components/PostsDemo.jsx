import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/posts?_limit=5;"

function PostsDemo() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            setPosts(data)
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

        {!loading && !error && posts?.map((post) => (
            <ul>
                <li key={post.id}>
                    <strong>{post.title}</strong>
                    <br />
                    <span>{post.body.slice(0,60)}...</span>
                </li>
            </ul>
        ))}
        </>
    )
}

export default PostsDemo