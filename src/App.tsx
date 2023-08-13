import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Feedback from './pages/Feedback'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Activity from './pages/Activity'
import Profile from './pages/Profile'
import History from './pages/History'
import Sidebar from './components/Sidebar'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import { useState } from 'react'
import { modelStore } from "./utils/store"
import Model from './components/Model'

function App() {
	const [mobileNav, setMobileNav] = useState(false)
	const modelOpen = modelStore((state: any) => state.modelOpen)
	return (
		<Router>
			<Routes>
				<Route path='/' element={
					<div className='w-full  h-full pt-[9vh]'>
						<Navbar />
						<div className="">
							<Outlet />
						</div>
						<Footer />
					</div>
				}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/feedback" element={<Feedback />} />
					<Route path="/donate" element={<Donate />} />
				</Route>
				<Route path='/home' element={
					<div className='w-full h-full overflow-hidden relative'>
						{modelOpen && (
							<Model />
						)}
						<div className={modelOpen ? 'blur-[10px] w-full  h-[100vh] bg-[#F2F2F2] flex flex-row pb-[3vh] text-[1.05vw]' : 'w-full  h-[100vh] bg-[#F2F2F2] flex flex-row pb-[3vh] text-[1.05vw]'} >
							<Sidebar />
							<button className="absolute block sm:hidden z-40 bg-[#F2F2F2] px-[.6vw] py-[.1vh] rounded-sm left-[2vw] top-[2vw]" onClick={() => setMobileNav(true)}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[2.5vw] h-5 fill-black">
									<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
								</svg>
							</button>
							{mobileNav && (
								<div className='block sm:hidden absolute top-0 left-0   h-[100vh] w-[60vw] z-40 p-[1vw]'>
									<div className='bg-white h-full w-full rounded-md border-[#FF6B00] border-2'>
										<div className='flex  flex-col justify-between  bg-white h-full rounded-r-[2vw] p-[1vw] md:p-[2vw]'>
											<div>
												<div className="flex flex-row justify-between items-center">
													<div className="flex flex-row gap-2 items-center">
														<img src="/svg/logo.svg" alt="" className='w-[6vw]' />
														<p className='text-[#FF6B00] text-[3vw]  '>TradePlans<span className='text-[#0094FF]'>.AI</span></p>
													</div>
													<button className=''>
														<svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none" className='w-[.8vw]'>
															<path d="M16.0427 7.11539C18.5337 8.6843 18.5337 12.3157 16.0427 13.8846L6.23576 20.0614C3.57209 21.7391 0.104008 19.8248 0.104008 16.6768L0.104008 4.32322C0.104008 1.17524 3.57209 -0.739069 6.23576 0.938611L16.0427 7.11539Z" fill="#787878" />
														</svg>
													</button>
												</div>
												<div className="my-[2vh] flex flex-col gap-[] text-[#858585] text-[3vw] " onClick={() => setMobileNav(false)}>
													<Link to={"/home"} className='flex flex-row  items-center gap-[2vw] active:bg-[rgba(0,148,255,0.15)] hover:bg-[rgba(0,148,255,0.15)] hover:text-[#0094FF] hover:fill-[#0094FF] px-[1vw] py-1.5 rounded-md '>
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[6vw] '>
															<path d="M20.25 2.75H3.75C3.48478 2.75 3.23043 2.85536 3.04289 3.04289C2.85536 3.23043 2.75 3.48478 2.75 3.75V20.25C2.75 20.5152 2.85536 20.7696 3.04289 20.9571C3.23043 21.1446 3.48478 21.25 3.75 21.25H20.25C20.5152 21.25 20.7696 21.1446 20.9571 20.9571C21.1446 20.7696 21.25 20.5152 21.25 20.25V3.75C21.25 3.48478 21.1446 3.23043 20.9571 3.04289C20.7696 2.85536 20.5152 2.75 20.25 2.75Z" stroke="#0094FF" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
															<path d="M10.1865 5.75H18.4375V8.25H10.1865V5.75ZM10.1865 10.75H18.4375V13.25H10.1865V10.75ZM10.1865 15.75H18.4375V18.25H10.1865V15.75ZM5.5625 5.7505H8.0625V8.2505H5.5625V5.7505ZM5.5625 10.75H8.0625V13.25H5.5625V10.75ZM5.5625 15.75H8.0625V18.25H5.5625V15.75Z" stroke="#0094FF" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
														</svg>
														<p className=''>Activity</p>
													</Link>
													<Link to={"/home/history"} className='flex flex-row  items-center gap-[2vw] active:bg-[rgba(0,148,255,0.15)] hover:bg-[rgba(0,148,255,0.15)] hover:text-[#0094FF] hover:fill-[#0094FF] px-[1vw] py-1.5 rounded-md '>
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[6vw] '>
															<g clip-path="url(#clip0_1_655)">
																<path d="M12 6.55334C11.8232 6.55334 11.6536 6.62358 11.5286 6.74861C11.4036 6.87363 11.3333 7.0432 11.3333 7.22001V13.0333L15.2667 15.7C15.4143 15.7938 15.5929 15.8258 15.7639 15.7891C15.9349 15.7524 16.0846 15.65 16.1809 15.504C16.2771 15.3579 16.312 15.1799 16.2782 15.0083C16.2444 14.8367 16.1445 14.6853 16 14.5867L12.6667 12.3267V7.22001C12.6667 7.0432 12.5964 6.87363 12.4714 6.74861C12.3464 6.62358 12.1768 6.55334 12 6.55334Z" fill="#858585" />
																<path d="M12 1.33337C10.0955 1.34004 8.22712 1.85365 6.58683 2.82143C4.94653 3.7892 3.59347 5.17625 2.66668 6.84004V3.46671C2.66668 3.2899 2.59644 3.12033 2.47141 2.9953C2.34639 2.87028 2.17682 2.80004 2.00001 2.80004C1.8232 2.80004 1.65363 2.87028 1.52861 2.9953C1.40358 3.12033 1.33334 3.2899 1.33334 3.46671V9.33337H7.20001C7.37682 9.33337 7.54639 9.26314 7.67141 9.13811C7.79644 9.01309 7.86668 8.84352 7.86668 8.66671C7.86668 8.4899 7.79644 8.32033 7.67141 8.1953C7.54639 8.07028 7.37682 8.00004 7.20001 8.00004H3.56668C4.4075 6.2255 5.78659 4.76137 7.50771 3.81599C9.22882 2.87062 11.2043 2.49217 13.1529 2.7345C15.1016 2.97683 16.9241 3.8276 18.3613 5.16573C19.7984 6.50387 20.7769 8.26119 21.1575 10.1876C21.538 12.114 21.3013 14.1114 20.481 15.8955C19.6607 17.6796 18.2985 19.1596 16.5884 20.1247C14.8783 21.0898 12.9073 21.491 10.956 21.2711C9.00472 21.0513 7.17246 20.2215 5.72001 18.9C5.65522 18.8409 5.57943 18.7952 5.49697 18.7654C5.4145 18.7356 5.32697 18.7223 5.23937 18.7263C5.15177 18.7304 5.06583 18.7516 4.98644 18.7888C4.90705 18.8261 4.83577 18.8786 4.77668 18.9434C4.71758 19.0082 4.67183 19.084 4.64202 19.1664C4.61222 19.2489 4.59895 19.3364 4.60297 19.424C4.607 19.5116 4.62823 19.5976 4.66547 19.6769C4.70271 19.7563 4.75522 19.8276 4.82001 19.8867C6.10145 21.0536 7.64792 21.8907 9.32562 22.3255C11.0033 22.7604 12.7617 22.7798 14.4486 22.3823C16.1355 21.9847 17.7002 21.1821 19.0071 20.0439C20.3141 18.9056 21.3241 17.4661 21.9496 15.8497C22.5751 14.2334 22.7973 12.489 22.597 10.7675C22.3968 9.04598 21.78 7.39918 20.8002 5.96961C19.8204 4.54004 18.507 3.37075 16.9736 2.56293C15.4402 1.75511 13.7331 1.33308 12 1.33337Z" fill="#858585" />
															</g>
															<defs>
																<clipPath id="clip0_1_655">
																	<rect width="24" height="24" fill="white" />
																</clipPath>
															</defs>
														</svg>
														<p className=''>History</p>
													</Link>
												</div>
											</div>
											<Link to={"/home/profile"} className='flex flex-row gap-[3vw] bg-[rgba(255,107,0,0.13)]  w-full px-[1vw] py-1.5 rounded-md  items-center' onClick={() => setMobileNav(false)}>
												<img src="/image/steven.png" alt="" className='w-[6vw]' />
												<p className='text-[#FF6B00]  text-[3vw]'>Steven</p>
											</Link>
										</div>
									</div>
								</div>
							)}
							<div className="w-full md:w-[80vw]">
								<Outlet />
							</div>
						</div>
					</div>
				}>
					<Route path="/home/" element={<Activity />} />
					<Route path="/home/history" element={<History />} />
					<Route path="/home/profile" element={<Profile />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</Router>
	)
}

export default App
