import "./balance.css";
import CurrencyFormatter from "../../currencyFormatter";
const Balance = () => {
  return (
    <div className="Balance">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M12.3576 13.207H3.23563C2.88623 13.2013 2.55334 13.0574 2.30973 12.8068C2.06612 12.5563 1.93162 12.2195 1.93563 11.87V2.50804C1.93162 2.15852 2.06609 1.82161 2.30967 1.57091C2.55325 1.32021 2.88614 1.1761 3.23563 1.17004H12.3546C12.7042 1.17584 13.0373 1.31987 13.2809 1.57063C13.5245 1.82139 13.6589 2.15845 13.6546 2.50804V3.17604H7.79863C7.44941 3.18184 7.11666 3.3256 6.87308 3.57592C6.62951 3.82624 6.49489 4.16279 6.49863 4.51204V9.86404C6.49489 10.2133 6.62951 10.5498 6.87308 10.8002C7.11666 11.0505 7.44941 11.1943 7.79863 11.2H13.6596V11.87C13.6639 12.2199 13.5292 12.5571 13.2851 12.8078C13.041 13.0585 12.7075 13.202 12.3576 13.207ZM14.3116 9.86404H7.79863V4.51304H14.3126L14.3116 9.86404ZM10.4036 6.18504C10.2049 6.18027 10.0093 6.23484 9.84168 6.34178C9.6741 6.44872 9.5422 6.60318 9.46282 6.78544C9.38344 6.96769 9.36018 7.16947 9.39601 7.36501C9.43185 7.56054 9.52514 7.74096 9.66399 7.88322C9.80284 8.02549 9.98094 8.12314 10.1755 8.16371C10.3702 8.20428 10.5724 8.18593 10.7566 8.111C10.9407 8.03607 11.0983 7.90796 11.2093 7.74303C11.3203 7.5781 11.3796 7.38383 11.3796 7.18504C11.3818 6.92332 11.2804 6.67135 11.0976 6.48404C10.9148 6.29673 10.6653 6.18926 10.4036 6.18504Z"
            fill="white"
          />
        </svg>
        <span>Available Balance</span>
      </p>
      <div className="balance-container">
        <p>
          <CurrencyFormatter amount={434148.23} currencyCode="USD" />
        </p>

        <form className="form-inline">
          <p>From</p>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Game Name
            </label>
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Grand Theft Auto</option>
              <option value="1">Fortnite</option>
              <option value="2">Call of Duty</option>
              <option value="3">God of War</option>
            </select>
          </div>
          <p>Where to send payment</p>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Pay to
            </label>
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Bank Account</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                d="M2 16.667V12H6.667"
                stroke="white"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 6.00001H14.667V1.33301"
                stroke="white"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.3327 9C15.3325 9.23914 15.3202 9.47811 15.2957 9.716C15.2727 9.951 15.2367 10.183 15.1907 10.411C15.1447 10.639 15.0907 10.862 15.0177 11.082C14.9447 11.302 14.8707 11.515 14.7827 11.725C14.6932 11.9339 14.593 12.1382 14.4827 12.337C14.3754 12.537 14.2587 12.7293 14.1327 12.914C14.0077 13.1 13.8717 13.28 13.7327 13.453C13.5937 13.626 13.4387 13.792 13.2807 13.953C13.1227 14.114 12.9557 14.262 12.7807 14.405C12.6057 14.548 12.4277 14.682 12.2417 14.805C12.0557 14.928 11.8637 15.048 11.6647 15.156C11.4657 15.264 11.2647 15.362 11.0527 15.451C10.8407 15.54 10.6287 15.618 10.4097 15.686C10.1907 15.754 9.96673 15.812 9.73873 15.859C9.51073 15.906 9.27973 15.941 9.03873 15.965C8.79773 15.989 8.57773 16 8.33273 16C8.08773 16 7.85173 15.987 7.61773 15.964C7.38373 15.941 7.15073 15.904 6.91773 15.858C6.68473 15.812 6.46573 15.758 6.24673 15.685C6.02773 15.612 5.81273 15.538 5.60373 15.45C5.39473 15.362 5.19073 15.263 4.99173 15.155C4.79273 15.047 4.60073 14.93 4.41473 14.804C4.22873 14.678 4.04873 14.543 3.87573 14.404C3.70273 14.265 3.53673 14.11 3.37573 13.952C3.21473 13.794 3.07773 13.625 2.93073 13.453C2.78373 13.281 2.65273 13.1 2.52773 12.914C2.40273 12.728 2.28473 12.535 2.17773 12.337"
                stroke="white"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.33203 9C1.33203 8.759 1.34503 8.519 1.36803 8.284C1.39103 8.049 1.42803 7.817 1.47403 7.589C1.52003 7.361 1.57403 7.138 1.64703 6.918C1.72003 6.698 1.79403 6.485 1.88203 6.275C1.97161 6.06605 2.07174 5.86179 2.18203 5.663C2.28936 5.463 2.40603 5.27067 2.53203 5.086C2.65703 4.9 2.79303 4.72 2.93203 4.547C3.07103 4.374 3.22603 4.208 3.38403 4.047C3.54203 3.886 3.70903 3.738 3.88403 3.595C4.05903 3.452 4.23703 3.318 4.42303 3.195C4.60903 3.072 4.80203 2.952 5.00003 2.844C5.19803 2.736 5.40003 2.638 5.61203 2.549C5.82403 2.46 6.03203 2.383 6.25103 2.315C6.47003 2.247 6.69403 2.189 6.92203 2.142C7.15003 2.095 7.38103 2.06 7.62203 2.036C7.86303 2.012 8.09103 2 8.33203 2C8.57303 2 8.81303 2.013 9.04703 2.036C9.28103 2.059 9.51403 2.096 9.74703 2.142C9.98003 2.188 10.199 2.242 10.418 2.315C10.637 2.388 10.852 2.462 11.061 2.55C11.27 2.638 11.474 2.737 11.673 2.845C11.872 2.953 12.064 3.07 12.25 3.196C12.436 3.322 12.617 3.457 12.789 3.596C12.961 3.735 13.128 3.89 13.289 4.048C13.45 4.206 13.598 4.373 13.741 4.548C13.884 4.723 14.018 4.901 14.141 5.087C14.264 5.273 14.384 5.466 14.491 5.664"
                stroke="white"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Withdraw now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Balance;
