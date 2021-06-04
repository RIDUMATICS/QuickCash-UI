import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerUser } from "../actions/authAction";
import CustomInput from "../components/CustomInput";
import LoadingButton from "../components/LoadingButton";

function SignUp(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, [auth, props.history]);

  const handleSubmit = async () => {
    const user = {
      name,
      address,
      email,
      password,
      confirmPassword,
    };

    await dispatch(registerUser(user, props.history));
  };

  return (
    <>
      <div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div class="container mx-auto">
          <div class="max-w-md mx-auto my-10">
            <div class="text-center">
              <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Sign Up
              </h1>
              <p class="text-gray-500 dark:text-gray-400">
                Welcome to Quickcash
              </p>
            </div>
            <div class="m-7">
              <form action="">
                <CustomInput
                  type="text"
                  value={name}
                  name="name"
                  label="Full name"
                  onChange={setName}
                  required={true}
                />

                <CustomInput
                  type="text"
                  value={address}
                  name="address"
                  label="Address"
                  onChange={setAddress}
                  required={true}
                />

                <CustomInput
                  type="email"
                  value={email}
                  name="email"
                  label="Email"
                  onChange={setEmail}
                  required={true}
                />

                <CustomInput
                  type="password"
                  value={password}
                  name="password"
                  label="Password"
                  onChange={setPassword}
                  required={true}
                />

                <CustomInput
                  type="password"
                  value={confirmPassword}
                  name="confirmPassword"
                  label="Confirm Password"
                  onChange={setConfirmPassword}
                  required={true}
                />

                <div class="mb-6">
                  <LoadingButton
                    onClick={handleSubmit}
                    className="btn-primary hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Sign up
                  </LoadingButton>
                </div>
                <p class="text-sm text-center text-gray-400">
                  Already have an account?
                  <NavLink
                    to="/login"
                    class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                  >
                    Login
                  </NavLink>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
