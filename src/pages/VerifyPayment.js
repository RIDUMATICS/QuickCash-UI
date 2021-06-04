import { useEffect, useState } from "react";
import { IoLogoBuffer } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getAllLoans } from "../actions/loanActions";
import { verifyRepayment } from "../actions/RepaymentAction";

export function Loading() {
  return (
    <div className="flex items-end">
      <p className="text-white text-xl font-medium">Verifying Payment</p>
      <div class="lds-ellipsis ml-3">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default function VerifyPayment(props) {
  const search = props.location.search;
  const query = new URLSearchParams(search);
  const ref = query.get("reference");

  const dispatch = useDispatch();
  const [loading, setLoading] = useState("false");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    if (!ref) {
      setMessage("Invalid reference code");
      setLoading(false);
      return;
    }
    dispatch(verifyRepayment({ ref })).then((msg) => {
      setMessage(msg);
      setLoading(false);
      dispatch(getAllLoans());
    });
  }, [dispatch, ref]);

  return (
    <div className="h-screen w-screen bg-indigo-600 flex flex-col items-center justify-center content-center flex-wrap">
      <h1 className="font-extrabold text-8xl flex text-white">
        <IoLogoBuffer className="mr-1" />
        QuickCash.
      </h1>
      <div className="mt-7">
        {loading ? (
          <Loading />
        ) : (
          <p className="text-white text-xl font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}
