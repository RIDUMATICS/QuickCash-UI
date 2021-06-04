import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import currencyFormat from "../utils/currencyFormatter";

const Profile = (props) => {
  const auth = useSelector((state) => state.auth);
  const portfolio = useSelector((state) => state.portfolio);

  return (
    <DashboardLayout>
      <div className="">
        <h2 className="capitalize text-2xl font-semibold">dashboard</h2>
        <div className="py-7">
          <ul className="capitalize bg-white p-4 gap-y-4 md:max-w-xl">
            <li className="grid grid-cols-1 xl:grid-cols-2 border-b py-3">
              <p className="font-semibold">Name</p>
              <span className="pt-2 xl:p-0">{auth.user?.name}</span>
            </li>
            <li className="grid grid-cols-1 xl:grid-cols-2 border-b py-3">
              <p className="font-semibold">Address</p>
              <span className="pt-2 xl:p-0">{auth.user?.address}</span>
            </li>

            <li className="grid grid-cols-1 xl:grid-cols-2 border-b py-3">
              <p className="font-semibold">Email</p>
              <span className="pt-2 xl:p-0 pr-2">{auth.user?.email}</span>
            </li>
            <li className="grid grid-cols-1 xl:grid-cols-2 border-b py-3">
              <p className="font-semibold">Portfolio value</p>
              <span className="pt-2 xl:p-0 pr-2">
                {currencyFormat(portfolio.value)}
              </span>
            </li>
            <li className="sm:flex justify-end py-3">
              <NavLink
                to="/dashboard/settings"
                className="text-indigo-600 hover:border-b border-primary block py-2"
              >
                Update Info
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
