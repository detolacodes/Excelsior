import react from 'react'
import Layout from "../Layout";
import DashboardSidebar from '../../components/DashboardSidebar/dashboardsidebar'
import bg from "../../assets/litecoin-icon.png";
import bottomImage from '../../assets/image 3.png'
import andriodchrome from "../../assets/android-chrome.png";
import transfer4 from "../../assets/transfer-4.png";
import image from '../../assets/henry wells.png'
import orderBook from '../../assets/order Book.png'
import Line from '../../assets/line.png'
import arrow from '../../assets/bx-right-arrow-circle.png'
import arrow2 from '../../assets/bx-right-arrow-alt.png'
import withdraw from '../../assets/withdraw.png'
import icons from '../../../b-icon/font/bootstrap-icons.css'
import './dashboardtab.css'
import Candlestick from "../../components/GameOrderbook/candlestick";
import OrderbookCom from "../../components/GameOrderbook/orderbook";
import Balance from "../../components/GameOrderbook/balance";

const DashboardTab = () =>{


	return(
		<Layout>
			<div className='col-lg-12 text-white'>
					<div className='wrap'>
						<div className='mainbar'>
							{/*<div className='bg-img'>
								<img src={image} />
							</div>*/}

							<div className='flex-2 w-100 BalStick mt-3'>
								<div className='flex-2 rounded candlestick'>
									<div className='bg-candlestick w-100 rounded'>
										{/*<iframe src='candlestick/candlestick.html' width='100%' height='100%' ></iframe>*/}
									 <Candlestick
					                    coin={14818432}
					                    profit={12}
					                    balance={763310.22}
					                  />
									</div>
								</div>

								<div className='flex-1 rounded balance'>

									{/*<Balance />*/}

									<div className=''>
										<i></i>
										<div className=''>
											Available Balance
										</div>
									</div>

									<div className='mt-3 fos23'>
										$ 434,148.23
									</div>

									<div>
										<div className='fos10 m-2'>
											From
										</div>

										<div className='m-2 fos10 bg-white w-97 rounded flex-h-new91 text-dark'>
											<div className='bg-gray rounded p-1'>
												Game Name
											</div>
											<div className='rounded sel1'>
												<select className='rounded w-100'>
													<option>GTA</option>
													<option>Call Of Duty</option>
													<option>God Of War</option>
													<option>Fortnite</option>
												</select>
											</div>
										</div>
									</div>

									<div className='my-4'>
										<div className='fos10 m-2'>
											Where To Sent Payment 
										</div>

										<div className='m-2 fos11 bg-white w-97 rounded  flex-h-new91 text-dark'>
											<div className='bg-gray p-1 rounded'>
												Pay To
											</div>
												<div className='rounded sel2'>
												<select className='rounded w-100'>
													<option>Bank Account</option>
													<option>PayPal</option>
													<option>Crypto</option>
													<option>BTC</option>
												</select>
											</div>
										</div>
									</div>

									<div className=' mt-5'>
										<button className='w-100 rounded secondarybtn'>
											<img src={withdraw} className='mr-2' /> <a className='fos15 text-dark' href=''>Withdraw Now</a> 
										</button>
									</div>
								</div>
							</div>

							<div className='flex-1 w-100 mt-3 bookNot'>
								<div className='flex-1 bg-orderbook px-3'>
									<div className='table-wrap'>
										<iframe src='gameorderbooktable.html' className='frame' width='100%' height='300px' ></iframe>

										<button className='w-50 mt-3 primarybtn2'>
											<a className='fos12' href='/buyandsell'>View All</a>
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className='sidebar'>
							<DashboardSidebar/>
						</div>
					</div>

					<div className='mt-5 w-100 botom'>
						<img src={bottomImage} />
					</div>
				</div>
		</Layout>

	)
}

export default DashboardTab