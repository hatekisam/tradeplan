import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
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


function App() {
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
					<div className='w-full  h-[100vh] bg-[#F2F2F2] flex flex-row pb-[3vh] text-[1.05vw]'>
						<Sidebar />
						<div className="w-[80vw]">
							<Outlet />
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
