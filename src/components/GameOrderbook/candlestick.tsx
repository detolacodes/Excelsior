import Chart from "react-google-charts";
import "./candlestick.css";
import CurrencyFormatter from "../../currencyFormatter";

/* The `CandlestickProps` interface, which specifies the expected props
for the `Candlestick` component. The interface has three properties: `balance`, `profit`, and
`coin`, all of which are of type `number`. */

interface CandlestickProps {
  balance: number;
  profit: number;
  coin: number;
}
const data = [
  ["Date", "Low", "Open", "Close", "High"],
  [new Date(2023, 0, 1), 100, 200, 300, 400],
  [new Date(2023, 0, 2), 150, 250, 350, 450],
  [new Date(2023, 0, 3), 100, 200, 300, 400],
  [new Date(2023, 0, 4), 150, 250, 350, 450],
  [new Date(2023, 0, 5), 100, 200, 300, 400],
  [new Date(2023, 0, 6), 150, 250, 350, 450],
  [new Date(2023, 0, 7), 100, 200, 300, 400],
  [new Date(2023, 0, 8), 150, 250, 350, 450],
  [new Date(2023, 0, 9), 100, 200, 300, 400],
  [new Date(2023, 0, 10), 50, 250, 150, 250],
  [new Date(2023, 0, 11), 50, 250, 150, 250],
  [new Date(2023, 0, 12), 50, 250, 150, 250],
  [new Date(2023, 0, 13), 150, 250, 350, 450],
  [new Date(2023, 0, 14), 100, 200, 300, 400],
  [new Date(2023, 0, 15), 150, 250, 350, 450],
  [new Date(2023, 0, 16), 100, 200, 300, 400],
  [new Date(2023, 0, 17), 50, 250, 150, 250],
  [new Date(2023, 0, 18), 50, 250, 150, 250],
  [new Date(2023, 0, 19), 50, 250, 150, 250],
  [new Date(2023, 0, 20), 50, 250, 150, 250],
  [new Date(2023, 0, 21), 50, 250, 150, 250],
  [new Date(2023, 0, 22), 50, 250, 150, 250],
  [new Date(2023, 0, 23), 150, 250, 350, 450],
  [new Date(2023, 0, 24), 100, 200, 300, 400],
  [new Date(2023, 0, 25), 150, 250, 350, 450],
  [new Date(2023, 0, 26), 100, 200, 300, 400],
  [new Date(2023, 0, 27), 50, 250, 150, 250],
  [new Date(2023, 0, 28), 50, 250, 150, 250],
  [new Date(2023, 0, 29), 50, 250, 150, 250],
];
const options = {
  legend: "none",
  bar: { groupWidth: "25%" },
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#F46A6A" }, // Red
    risingColor: { strokeWidth: 0, fill: "#34C38F" }, // Green
    hollowIsRising: true,
  },
  chartArea: {
    left: "5%",
    top: "5%",
    width: "90%",
    height: "80%",
  },
  backgroundColor: {
    fill: "transparent",
  },
  hAxis: {
    slantedText: false,
    textPosition: "out",
    gridlines: {
      color: "transparent",
    },
    baselineColor: "transparent",
    textStyle: {
      color: "#AAA",
    },
    format: "MMM dd",
  },
  // vAxis: {
  //   gridlines: {
  //     color: '#EEE',
  //   },
  //   baselineColor: 'transparent',
  //   textStyle: {
  //     color: '#AAA',
  //   },
  // },
};
const Candlestick: React.FC<CandlestickProps> = ({ balance, profit, coin }) => {
  return (
    <div className="candlestick-container">
      <p className="candlestick-para"></p>
      <div className="candlestick-row">
        <div className="candlestick-row-image">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.669922 15.796C0.67012 12.8283 1.55032 9.92737 3.19921 7.45994C4.8481 4.99251 7.19163 3.06944 9.93345 1.9339C12.6753 0.79836 15.6922 0.501354 18.6029 1.08044C21.5135 1.65952 24.187 3.08869 26.2854 5.18722C28.3838 7.28574 29.8128 9.95938 30.3917 12.87C30.9706 15.7807 30.6734 18.7976 29.5376 21.5394C28.4019 24.2811 26.4787 26.6245 24.0111 28.2733C21.5436 29.922 18.6426 30.802 15.6749 30.802C13.7044 30.802 11.7531 30.4139 9.93253 29.6597C8.11197 28.9056 6.45779 27.8002 5.06443 26.4068C3.67107 25.0133 2.56584 23.3591 1.81182 21.5385C1.05781 19.7179 0.669791 17.7666 0.669922 15.796Z"
              fill="white"
            />
            <path
              d="M12.268 13.66V22H10.9V13.66H12.268ZM21.2521 13.66L18.1201 22H16.5361L13.3921 13.66H14.8561L17.3281 20.596L19.8121 13.66H21.2521Z"
              fill="black"
            />
          </svg>
          <div className="candlestick-row-content">
            <small>Invo Coin</small>
            <p>
              {" "}
              <CurrencyFormatter amount={coin} currencyCode="USD" />
              IV
            </p>
          </div>
        </div>
        <div className="candlestick-row-content">
          <small>in USD</small>
          <p>
            {" "}
            <CurrencyFormatter amount={balance} currencyCode="USD" /> USD
          </p>
        </div>
        <div className="candlestick-row-content">
          <small>Last 24 hrs</small>
          <p>
            {profit}%{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.92661 11.903H6.90061V5.74502L4.07861 8.56802L3.34961 7.83902L7.41361 3.77502L11.4776 7.83902L10.7496 8.56802L7.92661 5.74502V11.903Z"
                fill="#34C38F"
              />
            </svg>
          </p>
        </div>
      </div>
      <Chart
        width={"100%"}
        height={"173.549px"}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
        rootProps={{ "data-testid": "1" }}
        className="Candlestick"
      />
    </div>
  );
};
export default Candlestick;
