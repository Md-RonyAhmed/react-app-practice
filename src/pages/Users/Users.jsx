import { useEffect, useState } from "react";
import User from "../../components/User/User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then((res)=>res.json())
    .then((data)=>setUsers(data))
  }, [users]);

  return (
    <>
      <div className="grid grid-cols-3 border gap-4 mt-6">
        {users.map((user) => (
          <User key={user?.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
