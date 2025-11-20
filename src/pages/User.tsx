
import Pagination from "../components/Pagination";
import SearchComponent from "../components/SearchComponent";
import UserComponent from "../components/UserComponent";
import { useUserQuery } from "../services/users/user.query";
import { useSearchParams } from "react-router-dom";

const User = () => {
  const { data: users, isLoading, isError } = useUserQuery();
  const [searchParams, setSearchParams]= useSearchParams("")
  const searchUser= searchParams.get("search") ||""
 const filteredUsers = (users ?? []).filter((user) => {
    if (!searchUser.trim()) return true;
    const term = searchUser.toLowerCase();
    return (
      user.username.toLowerCase().includes(term) ||
      user.name.firstname.toLowerCase().includes(term) ||
      user.name.lastname.toLowerCase().includes(term)
    );
  });
  if (isLoading)
    return (
      <p className="flex items-center justify-center min-h-screen">
        Loading please wait...
      </p>
    );
  if (isError)
    return (
      <p className="flex items-center justify-center min-h-screen">
        Something went wrong. Please try again.
      </p>
    );
  return  <section className="md:p-4 p-2 rounded-lg ring shadow-lg ring-gray-900/5 space-y-4 py-5 mx-2 mt-10">
    <h1>User details </h1>
      <div className="mb-4">
        <SearchComponent
          onSearch={(value) => {
            if (value.trim()) {
              setSearchParams({ search: value });
            } else {
              setSearchParams({});
            }
          }}
          placeholder="Search users"
          delay={300}
          defaultValue={searchUser}
        />
      </div>
      <div className="w-full overflow-x-scroll">
        <ul className="w-auto mx-auto grid grid-cols-3 gap-4 rounded-lg p-2 font-poppins md:text-base text-sm font-semibold border-b pb-2">
          <li>Name</li>
          <li>UserName</li>
          <li>Location</li>
        </ul>
        <Pagination
          data={filteredUsers}
          pageSize={5}
          renderRow={(user) => <UserComponent user={user} />}
        />
      </div>
    </section>
};

export default User;
