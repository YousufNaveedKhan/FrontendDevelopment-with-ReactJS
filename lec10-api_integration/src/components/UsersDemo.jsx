import { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users?_limit=5;";

function UsersDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((data) => {setUsers(data)})
    .catch((err) => {setError(err.message)})
    .finally(() => setLoading(false))
  }, []);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}

      {!loading &&
        !error &&
        users?.map((user) => (
          <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.email}</li>
          </ul>
        ))}
    </>
  );
}

export default UsersDemo;
