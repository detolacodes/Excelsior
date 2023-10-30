import "./orderbook.css";
import { useNavigate } from "react-router-dom";


interface OrderbookComProps {
    notification: Array<{title: string; content: string;  }>
}
const OrderbookCom:React.FC<OrderbookComProps>  = ({ notification}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='col-6 d-flex'>
                <div className='orderbookcom flex-fill'>
                    <p>Game’s Order book</p>
                    <div className="table-flex">
                        <div className="table-container">
                            <p className="trfirst">Buy's</p>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-container">
                            <p className="trfirst">Sell's</p>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <button onClick={()=> navigate("/buy-sell")}>View All</button>
                </div>
            </div>
            <div className='col-6 d-flex'>
                <div className='orderbookcom flex-fill'>
                    <p>Notification</p>
                    <div className="orderbook-notification">
                        {
                            notification?.map((item, index)=> {
                                return  <div className="orderbookcom-not-container" key={index}>
                                <div className="not-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M5.8765 10.3399C4.94911 10.3399 4.04254 10.0649 3.27143 9.54968C2.50033 9.03444 1.89933 8.30212 1.54443 7.44532C1.18953 6.58852 1.09667 5.64571 1.2776 4.73614C1.45853 3.82656 1.90511 2.99106 2.56088 2.33529C3.21665 1.67952 4.05215 1.23294 4.96172 1.05201C5.8713 0.871088 6.8141 0.963946 7.6709 1.31885C8.52771 1.67374 9.26003 2.27475 9.77526 3.04585C10.2905 3.81695 10.5655 4.72352 10.5655 5.65092C10.5639 6.89403 10.0694 8.08577 9.19037 8.96479C8.31136 9.8438 7.11961 10.3383 5.8765 10.3399ZM5.8765 1.89892C5.13438 1.89872 4.40888 2.1186 3.79173 2.53076C3.17459 2.94291 2.69353 3.52882 2.40939 4.2144C2.12526 4.89997 2.05081 5.6544 2.19547 6.38228C2.34013 7.11016 2.6974 7.7788 3.22208 8.30363C3.74677 8.82845 4.41531 9.1859 5.14316 9.33075C5.871 9.4756 6.62545 9.40136 7.3111 9.11741C7.99675 8.83346 8.58279 8.35255 8.99511 7.73552C9.40743 7.11848 9.6275 6.39303 9.6275 5.65092C9.62644 4.65615 9.2308 3.70243 8.5274 2.99902C7.82399 2.29561 6.87127 1.89998 5.8765 1.89892Z" fill="#44DA79" />
                                        <path d="M5.876 5.18193H4V6.11993H5.876V7.52993L7.754 5.65193L5.876 3.77393V5.18193Z" fill="#44DA79" />
                                    </svg>
                                    <p>{item.title}</p>
                                </div>
                                <div className="not-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M4.84992 6.58476L5.36592 7.10076L7.81192 4.65376L5.36592 2.20776L4.84992 2.72376L6.41992 4.28876H2.91992V5.01776H6.41992L4.84992 6.58476Z" fill="#44DA79" />
                                    </svg>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                            })
                        }
                      
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderbookCom;