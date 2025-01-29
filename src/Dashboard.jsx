import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard/cart");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="dashboard w-full bg-bgcol">
      <div className="flex flex-col gap-8 bg-primary px-5 py-8 text-center text-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mx-auto max-w-3xl text-base">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="mx-auto flex flex-row flex-wrap gap-6">
          <NavLink to={"/dashboard/cart"}>
            <button className="btn w-48 rounded-full bg-transparent py-3 font-medium text-white hover:font-bold hover:text-primary">
              Cart
            </button>
          </NavLink>
          <NavLink to={"/dashboard/wishlist"}>
            <button className="btn w-48 rounded-full bg-transparent py-3 font-medium text-white hover:font-bold hover:text-primary">
              Wishlist
            </button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
