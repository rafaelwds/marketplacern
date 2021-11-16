const formatValue = (value) =>
  Intl.NumberFormat("pt-be", { style: "currency", currency: "BRL" }).format(
    value
  );

export default formatValue;
