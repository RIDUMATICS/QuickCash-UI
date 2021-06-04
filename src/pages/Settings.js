import react, { useEffect, useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, updateDetails } from "../actions/authAction.js";
import DashboardLayout from "../components/DashboardLayout.js";
import LoadingButton from "../components/LoadingButton.js";

const CustomInput = (props) => (
  <label className="flex items center border w-full md:w-96 border-secondary rounded-md overflow-hidden mb-4">
    <span className="bg-gray-100 border-r border-secondary p-2 rounded-l-md">
      {props.icon}
    </span>
    <input
      type={props.type}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      required={props.required}
      className="border-none outline-none focus:border-none focus:outline-none w-full"
    />
  </label>
);

const Settings = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(auth.user.name);
    setAddress(auth.user.address);
  }, [auth]);

  const updateDetailsHandler = async () => {
    await dispatch(updateDetails({ name, address }));
  };

  const changePasswordHandler = async () => {
    await dispatch(
      changePassword({ oldPassword, newPassword, confirmPassword })
    );
  };

  return (
    <DashboardLayout>
      <div>
        <form className="border border-primary relative px-5 py-8">
          <p className="absolute h-8 -top-4 left-5 bg-gray-100 px-2 text-lg font-semibold">
            Update Details
          </p>
          <CustomInput
            icon={<BsFillPersonLinesFill className="text-2xl text-primary" />}
            type="text"
            value={name}
            onChange={setName}
            required={true}
            placeholder="First Name"
          />

          <CustomInput
            icon={<BsFillPersonLinesFill className="text-2xl text-primary" />}
            type="text"
            value={address}
            onChange={setAddress}
            required={true}
            placeholder="Last Name"
          />
          <div className="md:flex justify-end">
            <LoadingButton
              onClick={updateDetailsHandler}
              className="btn-primary md:max-w-sm hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Update Details
            </LoadingButton>
          </div>
        </form>
        <form className="border border-primary relative px-5 py-8 my-10">
          <p className="absolute h-8 -top-4 left-5 bg-gray-100 px-2 text-lg font-semibold">
            Change Password
          </p>
          <CustomInput
            icon={<RiLockPasswordLine className="text-2xl text-primary" />}
            type="password"
            value={oldPassword}
            onChange={setOldPassword}
            required={true}
            placeholder="Enter old password"
          />

          <CustomInput
            icon={<RiLockPasswordLine className="text-2xl text-primary" />}
            type="password"
            value={newPassword}
            onChange={setNewPassword}
            required={true}
            placeholder="Enter new password"
          />

          <CustomInput
            icon={<RiLockPasswordLine className="text-2xl text-primary" />}
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            required={true}
            placeholder="Confirm new password"
          />
          <div className="md:flex justify-end">
            <LoadingButton
              onClick={changePasswordHandler}
              className="btn-primary md:max-w-sm hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Change password
            </LoadingButton>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
