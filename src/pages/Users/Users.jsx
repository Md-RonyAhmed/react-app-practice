import { useLoaderData } from "react-router-dom";
import User from "../../components/User/User";

const Users = () => {
  const users = useLoaderData();

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
