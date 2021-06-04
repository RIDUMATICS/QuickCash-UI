import DashboardLayout from "../components/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import currencyFormat from "../utils/currencyFormatter";
import dateFormat from "../utils/dateFormat";
import { useEffect } from "react";
import { getLoanById } from "../actions/loanActions";
import { NavLink } from "react-router-dom";
import { postRepayment } from "../actions/RepaymentAction";
import Table, { TableCol, TableRow } from "../components/Table";

const LoanDetails = (props) => {
  const dispatch = useDispatch();
  const { loanId } = props.match.params;
  const loan = useSelector((state) => state.loan);

  useEffect(() => {
    dispatch(getLoanById(loanId));
  }, [dispatch, loanId]);

  const handlePostRepayment = async () => {
    const resp = await dispatch(postRepayment(loanId));
    console.log(resp);
    window.open(resp.data.authorization_url, "_blank");
  };

  return (
    <DashboardLayout>
      <div className="">
        <h2 className="capitalize text-2xl font-semibold">Loans</h2>
        <div className="py-7 flex flex-col md:flex-row md:justify-between">
          <div className="order-2 md:order-1 md:flex-1 ">
            <Table header={["amount", "paid at"]}>
              {loan.repayments.map(({ _id, amount, paid_at }) => {
                return (
                  <TableRow key={_id}>
                    <TableCol>
                      <p>{currencyFormat(amount)}</p>
                    </TableCol>
                    <TableCol>
                      <p>{dateFormat(paid_at)}</p>
                    </TableCol>
                  </TableRow>
                );
              })}
            </Table>
          </div>
          <div className="md:max-w-lg mb-7 md:ml-5 md:order-2 ">
            <ul className="capitalize bg-white p-4 gap-y-4 md:max-w-xl">
              <li className="grid grid-cols-1 xl:grid-cols-2 border-b py-3">
                <p className="font-semibold">ID</p>
                <span className="pt-2 xl:p-0">{loan._id}</span>
              </li>
              <li className="grid grid-cols-1 xl:grid-cols-2 border-b py-3">
                <p className="font-semibold">Amount</p>
                <span className="pt-2 xl:p-0">
                  {currencyFormat(loan.amount)}
                </span>
              </li>

              <li className="grid grid-cols-1 xl:grid-cols-2 border-b py-3">
                <p className="font-semibold">Tenor</p>
                <span className="pt-2 xl:p-0 pr-2">{loan.tenor} months</span>
              </li>
              <li className="grid grid-cols-1 xl:grid-cols-2 border-b py-3">
                <p className="font-semibold">Installment Payment</p>
                <span className="pt-2 xl:p-0 pr-2">
                  {currencyFormat(loan.installmentPayment)}
                </span>
              </li>
              <li className="grid grid-cols-1 xl:grid-cols-2 border-b py-3">
                <p className="font-semibold">Interest</p>
                <span className="pt-2 xl:p-0 pr-2">
                  {currencyFormat(loan.interest)}
                </span>
              </li>
              <li className="grid grid-cols-1 xl:grid-cols-2 border-b py-3">
                <p className="font-semibold">Total Payment</p>
                <span className="pt-2 xl:p-0 pr-2">
                  {currencyFormat(loan.totalPayment)}
                </span>
              </li>
              <li className="grid grid-cols-1 xl:grid-cols-2 border-b py-3">
                <p className="font-semibold">Outstanding Payment</p>
                <span className="pt-2 xl:p-0 pr-2">
                  {currencyFormat(loan.outstandingPayment)}
                </span>
              </li>
              {!loan.repaid && (
                <li className="sm:flex justify-end py-3">
                  <button
                    onClick={handlePostRepayment}
                    className="btn-primary mt-7 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Process Repayment
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LoanDetails;
