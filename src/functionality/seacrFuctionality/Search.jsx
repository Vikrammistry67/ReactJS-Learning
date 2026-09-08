import { useState } from "react"

const Search = () => {
    const [search, setSearch] = useState('');


    const users = [
        { id: 1, name: "Rahul", email: "rahul@example.com" },
        { id: 2, name: "Priya", email: "priya@example.com" },
        { id: 3, name: "Amit", email: "amit@example.com" },
        { id: 4, name: "Neha", email: "neha@example.com" },
        { id: 5, name: "Arjun", email: "arjun@example.com" },
        { id: 6, name: "Sneha", email: "sneha@example.com" },
        { id: 7, name: "Vikash", email: "vikash@example.com" },
        { id: 8, name: "Anjali", email: "anjali@example.com" },
        { id: 9, name: "Rohit", email: "rohit@example.com" },
        { id: 10, name: "Pooja", email: "pooja@example.com" }
    ];


    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLocaleLowerCase()));

    return (
        <div>
            <input
                type="text"
                placeholder="search here ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div style={{ marginTop: '20px' }}>
                {
                    filteredUsers.map((user) => {
                        return (
                            <div style={{ width: '50vw', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', backgroundColor: '#222', marginTop: '5px' }}>
                                <h2>{user.id}.</h2>
                                <h2 style={{ textAlign: 'left', width: '8vw', }}>{user.name}</h2>
                                <h2>{user.email}</h2>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Search