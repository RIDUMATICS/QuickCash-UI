import react, { useState } from "react";
import { currencyFormatNaira } from "../utils/currencyFormatter";

const AmountInput = (props) => {
  const [amount, setAmount] = useState("");

  const onChangeHandler = (e) => {
    const _amount = e.target.value.slice(1).replaceAll(",", "");
    if (!isNaN(_amount)) {
      setAmount(_amount);
      props.getAmount(_amount);
    }
  };

  return (
    <input
      type="amount"
      value={currencyFormatNaira(amount)}
      placeholder="Enter amount"
      onChange={onChangeHandler}
      required
      className={props.className}
    />
  );
};

export default AmountInput;
