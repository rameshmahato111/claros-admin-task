import { Link } from "react-router-dom";
import Button from "./Button";
import data from "../libs/data";

const HomeComponent = () => {
  
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Overview of today's platform activity.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-2xl font-semibold text-gray-800 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link to={'/users'}><Button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition cursor-pointer" children={'Manage Users'}/></Link>
           
          <Button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition" children={' View Reports'}/>
           
         
          <Button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition" children={'View Revenew'} />
           
         
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;