
import Card from "../components/Card/Card"
import HorizontalNavigation from "../components/Navigation/HorizontalNavigation"
import VerticalNavigation from "../components/Navigation/VerticalNavigation"


const Dashboard = ({ isDarkMode }) => {
	return (
	
		<div className={`${isDarkMode ? "dark" : ""} grid grid-cols-1 grid-rows-nav h-full `}>
			<div className="h-auto bg-gray-100 filter drop-shadow-md">
					<HorizontalNavigation/>
			</div>
			<div className="flex flex-row overflow-hidden">
				<div className=" w-64 h-full">
					<VerticalNavigation />
				</div>
				<div className="flex-auto bg-gray-100 " >
						<Card/>
				</div>
			</div>
		</div>
	
	)
}

export default Dashboard
