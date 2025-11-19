import { useUserQuery } from "../services/users/user.query";
import Pagination from "./Pagination";

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
  return (
     <div className="w-auto overflow-x-auto">
        <div className="w-auto mx-auto">
          <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2 font-poppins">
            <div>Name</div>
            <div>UserName</div>
            <div>Phone</div>
            <div>Address</div>

          </div>

          <Pagination
            data={users?? []}
            renderRow={(user) => (
              <div
                key={user.id}
                className="items-center grid grid-cols-4 md:gap-4 gap-2 py-4 border-b text-sm md:text-base font-poppins"
              >
                <div className="inline-flex items-center gap-3">
                  
                  <span className="capitalize">
                    {user.name.firstname}
                    <span className="md:inline-block hidden">
                      {user.name.lastname}
                    </span>
                  </span>
                </div>

               
                <div>
                 <div className="text-sm md:text-base font-poppins">
                  {user.username}
                </div>
                   
                </div>
                <div className="text-sm md:text-base font-poppins">
                  {user.phone}
                </div>

                         <div className="capitalize">
                {user.address.city}, <span className="md:inline-block hidden">{user.address.street}</span>
              </div> 
              </div>
              
            )}
          />
         
        </div>
      </div>
 
  );
};

export default UserComponent;
