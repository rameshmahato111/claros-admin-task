import type { User } from "../types/user";

interface UserComponentProps {
  user: User;
}

const UserComponent = ({ user }: UserComponentProps) => {
  return (
    <div className="w-auto mx-auto grid grid-cols-3 gap-4 py-4 border-b text-sm md:text-base font-poppins">
      <div className="inline-flex items-center gap-3">
        <span className="capitalize">
          {user.name?.firstname}
          <span className="md:inline-block hidden"> {user.name?.lastname}</span>
        </span>
      </div>

      <div className="text-sm md:text-base font-poppins">
        {user.username}
      </div>

      <div className="capitalize">
        {user.address.city},{" "}
        <span className="md:inline-block hidden">{user.address.street}</span>
      </div>
    </div>
  );
};

export default UserComponent;
