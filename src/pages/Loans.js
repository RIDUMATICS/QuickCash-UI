import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import currencyFormat from "../utils/currencyFormatter";
import { createLoan, getAllLoans } from "../actions/loanActions";
import AmountInput from "../components/AmountInput";
import Table, { TableCol, TableRow } from "../components/Table";
import LoadingButton from "../components/LoadingButton";

const Loans = (props) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [tenor, setTenor] = useState("");
  const loans = useSelector((state) => state.loans);

  useEffect(() => {
    dispatch(getAllLoans());
  }, [dispatch]);

  const handleCreateLoan = async () => {
    console.log(amount, tenor);
    await dispatch(createLoan({ amount, tenor }));
    dispatch(getAllLoans());
  };

  const showDetails = (_id) => {
    props.history.push(`/loans/${_id}`);
  };

  return (
    <DashboardLayout>
      <div className="">
        <h2 className="capitalize text-2xl font-semibold">Loans</h2>
        <div className="py-7 flex flex-col md:flex-row md:justify-between">
          <div className="order-2 md:order-1 md:flex-1 ">
            <Table header={["amount", "installment", "tenor", "actions"]}>
              {loans.map(({ _id, totalPayment, installmentPayment, tenor }) => {
                return (
                  <TableRow key={_id}>
                    <TableCol>
                      <p>{currencyFormat(totalPayment)}</p>
                    </TableCol>
                    <TableCol>
                      <p>{currencyFormat(installmentPayment)}</p>
                    </TableCol>
                    <TableCol>
                      <p>{tenor}</p>
                    </TableCol>
                    <TableCol>
                      <div class="flex item-center justify-center">
                        <div
                          onClick={() => showDetails(_id)}
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </div>
                    </TableCol>
                  </TableRow>
                );
              })}
            </Table>
          </div>
          <div className="md:max-w-md mb-7 md:ml-5 md:order-2 ">
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
                value={tenor}
                onChange={(e) => setTenor(e.target.value)}
                className="flex items-center h-12 px-4 w-72 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              >
                <option value="" disabled>
                  Select tenor
                </option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
              </select>
              <LoadingButton
                onClick={handleCreateLoan}
                className="btn-primary mt-7 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Create
              </LoadingButton>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Loans;
