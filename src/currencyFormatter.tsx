interface CurrencyFormattePropsr{
    amount: number;
    currencyCode:string
}
const CurrencyFormatter: React.FC<CurrencyFormattePropsr> = ( {amount, currencyCode} ) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode
    });
  
    return formatter.format(amount);
  };
  export default CurrencyFormatter;