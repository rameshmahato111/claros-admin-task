import { useUserQuery } from "../services/users/user.query";

const UserComponent = () => {
  const { data: users, isError, isLoading } = useUserQuery();

  if (isLoading)
    return (
      <p className="flex items-center justify-center min-h-screen">
        Loading please wait...
      </p>
    );
  if (isError)
    return (
      <p className="flex items-center justify-center min-h-screen">
        Something went wrong. Please try again
      </p>
    );
   
    console.log('user', users)
  return <div>UserComponent</div>;
};

export default UserComponent;
