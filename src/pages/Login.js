import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { loginUser } from "../actions/authAction";
import LoadingButton from "../components/LoadingButton";
import { useDispatch, useSelector } from "react-redux";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, [auth, props.history]);

  const handleSubmit = async () => {
    const user = {
      email,
      password,
    };

    await dispatch(loginUser(user, props.history));
  };
  return (
    <>
      <div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div class="container mx-auto">
          <div class="max-w-md mx-auto my-10">
            <div class="text-center">
              <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Sign in
              </h1>
              <p class="text-gray-500 dark:text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <div class="m-7">
              <form action="">
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
                <div class="mb-6">
                  <LoadingButton
                    onClick={handleSubmit}
                    className="btn-primary hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Log in
                  </LoadingButton>
                </div>
                <p class="text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?
                  <NavLink
                    to="/signup"
                    class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                  >
                    Sign up
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

export default Login;
