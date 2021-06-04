const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
  currencyDisplay: "narrowSymbol",
});

// contvert without kobo
export function currencyFormatNaira(amount) {
  const formattedAmount = formatter.format(amount).split(".")[0]; // remove the kobo part
  return formattedAmount;
}

export default function currencyFormat(amount) {
  const formattedAmount = formatter.format(amount);
  return formattedAmount;
}
