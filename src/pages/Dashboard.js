import Navigation from "../components/Navigation/Navigation"
const Dashboard = ({ isDarkMode }) => {
	return (
		<div className={`${isDarkMode ? "dark" : ""} `}>

			<div className="flex flex-row ">
				<div className=" w-64 h-screen">
				<Navigation />
				</div>
				<div className="flex-auto h-screen" >

				</div>
			</div>
		</div>
	)
}

export default Dashboard
