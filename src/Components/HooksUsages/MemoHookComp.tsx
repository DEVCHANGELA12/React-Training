import { useMemo, useState } from "react";

export default function MemoHookComp() {
  const users = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Adams" },
    { id: 4, name: "Diana Blake" },
    { id: 5, name: "Ethan Cooper" },
  ];
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  
  return (
    <div className="user-container">
      <h2 style={{ color: "black" }}>User List with useMemo</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <ul className="user-list">
        {filteredUsers.map((user) => (
          <li key={user.id} className="user-item">
            {user.name}
          </li>
        ))}
      </ul>

      <p style={{ color: "black" }}>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
}
