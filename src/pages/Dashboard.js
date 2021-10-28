
import Card from "../components/Card/Card"
import Navigation from "../components/Navigation/Navigation"


const Dashboard = ({ isDarkMode }) => {
	return (
	
		<div className={`${isDarkMode ? "dark" : ""} grid grid-cols-1 grid-rows-nav h-full `}>
			<div className="h-16 bg-gray-100 filter drop-shadow-md"></div>
			<div className="flex flex-row overflow-hidden">
				<div className=" w-64 h-full">
					<Navigation />
				</div>
				<div className="flex-auto bg-gray-100 " >
						<Card/>
				</div>
			</div>
		</div>
	
	)
}

export default Dashboard
