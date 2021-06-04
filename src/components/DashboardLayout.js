import { useEffect, useState } from "react";
import {
  RiDashboardLine,
  RiLogoutCircleLine,
  RiMenuUnfoldLine,
  RiUserSettingsLine,
} from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { IoLogoBuffer } from "react-icons/io";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { BiMoney } from "react-icons/bi";
import { logoutUser } from "../actions/authAction";
import { getPortfolioValue } from "../actions/portfolioAction";
import currencyFormat from "../utils/currencyFormatter";

const DashboardLayout = (props) => {
  const auth = useSelector((state) => state.auth);
  const portfolio = useSelector((state) => state.portfolio);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortfolioValue());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <main className="min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
        <div className="relative bg-white flex border-b md:w-1/4 lg:w-1/5 md:border-r ">
          <div className="fixed z-10 bg-white flex md:hidden w-full">
            <button className="p-4 border-r" onClick={() => setShowMenu(true)}>
              <RiMenuUnfoldLine className="text-3xl" />
            </button>
            <div className="flex flex-1 justify-end items-center px-4">
              <button
                onClick={handleLogout}
                className="flex items-center text-base mr-2 bg-primary text-white rounded-md px-2 py-1"
              >
                <span className="mr-2">
                  <RiLogoutCircleLine className="outline-none" />
                </span>
                Log out
              </button>
            </div>
          </div>
          <div
            className={classNames(
              "transition-transform ease-in-out duration-200 fixed z-20 transform md:translate-x-0 bg-white h-full w-full md:w-1/4 lg:w-1/5",
              {
                "translate-x-0": showMenu,
                "translate-x-full": !showMenu,
              }
            )}
          >
            <div className="flex justify-between items-center text-primary border-b p-4 min-h-69 shadow">
              <NavLink
                className="text-3xl text-indigo-600 font-bold capitalize flex items-center"
                to="/"
              >
                <IoLogoBuffer className="mr-1" />
                QuickCash.
              </NavLink>
              <button className=" md:hidden" onClick={() => setShowMenu(false)}>
                <VscChromeClose className="text-3xl" />
              </button>
            </div>
            <div className="p-4">
              <ul className="grid grid-cols-1 gap-4 text-lg">
                <li>
                  <NavLink
                    to="/dashboard"
                    activeClassName="active-sideBar"
                    exact
                    className="flex items-center text-gray-400 hover:text-gray-400 px-2 py-1 rounded-md hover:bg-gray-800"
                  >
                    <RiDashboardLine className="mr-2 text-gray-400" /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/loans"
                    activeClassName="active-sideBar"
                    exact
                    className="flex items-center text-gray-400 hover:text-gray-400 px-2 py-1 rounded-md hover:bg-gray-800"
                  >
                    <BiMoney className="mr-2 text-gray-400" /> Loans
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/settings"
                    exact
                    activeClassName="active-sideBar"
                    className="flex items-center text-gray-400 hover:text-gray-400 px-2 py-1 rounded-md hover:bg-gray-800 hover:shadow-2xl"
                  >
                    <RiUserSettingsLine className="mr-2 text-gray-400" />
                    Settings
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex-1 relative">
          <div className="fixed md:w-3/4 lg:w-4/5 shadow hidden md:flex justify-end bg-white p-4 min-h-69 border-b z-20">
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center text-base mr-2 bg-pink-700 text-white rounded-md px-2 py-1"
            >
              <span className="mr-2">
                <RiLogoutCircleLine className="outline-none" />
              </span>
              Log out
            </button>
            <div>
              <p className="ml-2 text-xs font-medium">{auth.user.name}</p>
              <p className="ml-2 text-xs">{currencyFormat(portfolio.value)}</p>
            </div>
          </div>
          <div className="container py-28">{props.children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
