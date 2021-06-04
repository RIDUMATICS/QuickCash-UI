import { useState } from "react";
import { NavLink } from "react-router-dom";
import AmountInput from "../components/AmountInput";
import Nav from "../components/Nav";

export default function Home() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <Nav />

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">The simple online</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  loan app
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Apply for our investment loan in minutes, without stress.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <NavLink
                    to="/signup"
                    className="btn-primary hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </NavLink>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="side-bg flex justify-center items-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <form className=" mx-auto flex flex-col bg-white rounded shadow-lg p-8">
          <label className="font-semibold text-xs" for="usernameField">
            Amount
          </label>
          <AmountInput
            getAmount={(amount) => setAmount(amount)}
            className="flex items-center h-12 px-4 w-72 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          />
          <label className="font-semibold text-xs mt-3" for="passwordField">
            Tenor
          </label>
          <select
            className="flex items-center h-12 px-4 w-72 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="password"
          >
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <button className="btn-primary mt-7 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            calculate loan
          </button>
        </form>
      </div>
    </div>
  );
}
