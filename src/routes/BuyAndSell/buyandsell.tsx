import Layout from "../Layout";
import gta from "../../assets/gta.png";
import CurrencyFormatter from "../../currencyFormatter";
import ReactTableUI from "react-table-ui";
import { useMemo, useRef, useEffect, useState } from "react";
import type { TableInstance, DataType } from "react-table-ui";

interface User extends DataType {
  "ID No": string;
  Date: string;
  Type: string;
  Currency: string;
  "Amount in IV": string;
  "Amount in USD": string;
  status: string | JSX.Element;
}

const BuySell = () => {
  const [click, setClicked] = useState(0);
  const dataString: User[] = [
    {
      "ID No": "#SK3226",
      Date: "12 Mar, 2020",
      Type: "Sell",
      Currency: "Gold",
      "Amount in IV": "0.00413 IV",
      "Amount in USD": "$ 2123.01",
      status: (
        <button className={"complete" === "complete" ? "complete" : "pending"}>
          complete
        </button>
      ),
    },
    {
      "ID No": "#SK3226",
      Date: "12 Mar, 2020",
      Type: "Buy",
      Currency: "snow",
      "Amount in IV": "1.00952 IV",
      "Amount in USD": "$ 9067.62",
      status: (
        <button className={"complete" === "complete" ? "complete" : "complete"}>
          {"complete" === "complete" ? "complete" : "pending"}
        </button>
      ),
    },
    {
      "ID No": "#SK3226",
      Date: "12 Mar, 2020",
      Type: "sell",
      Currency: "Gold",
      "Amount in IV": "0.00413 IV",
      "Amount in USD": "$ 2123.01",
      status: (
        <button className={"pending" === "pending" ? "pending" : "complete"}>
          {"pending" === "pending" ? "pending" : "complete"}
        </button>
      ),
    },
    {
      "ID No": "#SK3226",
      Date: "12 Mar, 2020",
      Type: "Buy",
      Currency: "snow",
      "Amount in IV": "1.00952 IV",
      "Amount in USD": "$ 9067.62",
      status: (
        <button className={"pending" === "pending" ? "pending" : "complete"}>
          {"pending" === "pending" ? "pending" : "complete"}
        </button>
      ),
    },
    {
      "ID No": "#SK3226",
      Date: "12 Mar, 2020",
      Type: "Buy",
      Currency: "snow",
      "Amount in IV": "1.00952 IV",
      "Amount in USD": "$ 9067.62",
      status: (
        <button className={"complete" === "complete" ? "complete" : "complete"}>
          {"complete" === "complete" ? "complete" : "pending"}
        </button>
      ),
    },
    {
      "ID No": "#SK3226",
      Date: "12 Mar, 2020",
      Type: "Buy",
      Currency: "snow",
      "Amount in IV": "1.00952 IV",
      "Amount in USD": "$ 9067.62",
      status: (
        <button className={"complete" === "complete" ? "complete" : "complete"}>
          {"complete" === "complete" ? "complete" : "pending"}
        </button>
      ),
    },
    {
      "ID No": "#SK3226",
      Date: "12 Mar, 2020",
      Type: "Buy",
      Currency: "snow",
      "Amount in IV": "1.00952 IV",
      "Amount in USD": "$ 9067.62",
      status: (
        <button className={"complete" === "complete" ? "complete" : "complete"}>
          {"complete" === "complete" ? "complete" : "pending"}
        </button>
      ),
    },
    {
      "ID No": "#SK3226",
      Date: "12 Mar, 2020",
      Type: "Buy",
      Currency: "snow",
      "Amount in IV": "1.00952 IV",
      "Amount in USD": "$ 9067.62",
      status: (
        <button className={"pending" === "pending" ? "pending" : "complete"}>
          {"pending" === "pending" ? "pending" : "complete"}
        </button>
      ),
    },
    {
      "ID No": "#SK3226",
      Date: "12 Mar, 2020",
      Type: "Buy",
      Currency: "snow",
      "Amount in IV": "1.00952 IV",
      "Amount in USD": "$ 9067.62",
      status: (
        <button className={"pending" === "pending" ? "pending" : "complete"}>
          {"pending" === "pending" ? "pending" : "complete"}
        </button>
      ),
    },
    {
      "ID No": "#SK3226",
      Date: "12 Mar, 2020",
      Type: "Buy",
      Currency: "snow",
      "Amount in IV": "1.00952 IV",
      "Amount in USD": "$ 9067.62",
      status: (
        <button className={"complete" === "complete" ? "complete" : "complete"}>
          {"complete" === "complete" ? "complete" : "pending"}
        </button>
      ),
    },
    {
      "ID No": "#SK3226",
      Date: "12 Mar, 2020",
      Type: "Buy",
      Currency: "snow",
      "Amount in IV": "1.00952 IV",
      "Amount in USD": "$ 9067.62",
      status: (
        <button className={"complete" === "complete" ? "complete" : "complete"}>
          {"complete" === "complete" ? "complete" : "pending"}
        </button>
      ),
    },
  ];
  const [all, setAll] = useState(dataString);

  const tableInstanceRef = useRef<TableInstance<User>>(null);
  const getBuy = () => {
    // const buy: (string | JSX.Element)[] = all.reduce((arr, num) => {return num.Type === "Buy" ? arr.concat(num) : arr}, [] as (string | JSX.Element)[])
    setClicked(1);
    const buy: User[] = dataString.reduce((arr, obj) => {
      if (obj.Type === "Buy") {
        arr.push(obj);
      }
      return arr;
    }, [] as User[]);
    setAll(buy);
  };
  const getSell = () => {
    setClicked(2);
    const sell: User[] = dataString.reduce((arr, obj) => {
      if (obj.Type === "sell") {
        arr.push(obj);
      }
      return arr;
    }, [] as User[]);
    console.log(sell);
    setAll(sell);
  };
  const getAll = () => {
    setClicked(0);
    const showAll: User[] = dataString.reduce((arr, obj) => {
      if (obj.Type === "sell") {
        arr.push(obj);
      } else if (obj.Type === "Buy") {
        arr.push(obj);
      }
      return arr;
    }, [] as User[]);
    setAll(showAll);
  };
  const data: User[] = useMemo(() => all, [all]);
  return (
    <Layout>
      <div className="col-12">
        <div className="col-12">
          <div className="buy-sell mt-4">
            <div className="bs-image">
              <img src={gta} alt="gta" />
              <h6>Grand Theft Auto 6</h6>
            </div>
            <div className="bs-info">
              <div className="bs-info-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M12.9473 9.75201H14.5723V13.003H12.9473V9.75201Z"
                    fill="black"
                  />
                  <path
                    d="M16.4003 17H4.40027C4.08712 17.0137 3.77449 16.9632 3.48156 16.8517C3.18863 16.7401 2.92159 16.5699 2.69684 16.3514C2.47208 16.1329 2.29436 15.8708 2.17457 15.5812C2.05479 15.2915 1.99547 14.9804 2.00027 14.667V5.33301C2.01001 4.70565 2.26813 4.10776 2.71803 3.67042C3.16793 3.23308 3.77289 2.99199 4.40027 3.00001H14.8003C15.2185 2.99466 15.6217 3.15535 15.9216 3.44683C16.2216 3.73832 16.3937 4.13683 16.4003 4.55501V6.11101C16.8186 6.10593 17.2218 6.26684 17.5217 6.55848C17.8216 6.85013 17.9937 7.24874 18.0003 7.66701V15.445C17.9937 15.8632 17.8216 16.2617 17.5216 16.5532C17.2217 16.8447 16.8185 17.0054 16.4003 17ZM3.60027 7.52301V14.667C3.59218 14.774 3.60785 14.8815 3.64617 14.9818C3.68449 15.082 3.74449 15.1726 3.8219 15.2469C3.89931 15.3213 3.99219 15.3776 4.09391 15.4118C4.19563 15.4461 4.30366 15.4574 4.41027 15.445H16.4003V7.66701H4.40027C4.12733 7.66512 3.85674 7.61642 3.60027 7.52301ZM4.40027 4.55601C4.19109 4.55334 3.98938 4.63375 3.83941 4.7796C3.68943 4.92545 3.60343 5.12483 3.60027 5.33401C3.60343 5.54319 3.68943 5.74257 3.83941 5.88842C3.98938 6.03427 4.19109 6.11468 4.40027 6.11201H14.8003V4.55501L4.40027 4.55601Z"
                    fill="black"
                  />
                </svg>
                <p>Orderbook Balance</p>
              </div>
              <p>
                <CurrencyFormatter amount={434148.23} currencyCode="USD" />
              </p>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="order-table-container">
            <h4>Orderbook Activities</h4>
            <div className="order-table">
              <p
                className={click === 0 ? "active" : ""}
                onClick={() => {
                  getAll();
                }}
              >
                All
              </p>
              <p
                className={click === 1 ? "active" : ""}
                onClick={() => getBuy()}
              >
                Buy
              </p>
              <p
                className={click === 2 ? "active" : ""}
                onClick={() => getSell()}
              >
                Sell
              </p>
            </div>
            <ReactTableUI
              title=" "
              data={data}
              tableInstanceRef={tableInstanceRef}
              className='reacttable'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BuySell;
