
const Navigation = () => {
	return (
		<div className="flex flex-col h-full">

			<div className="w-auto  bg-gray-900 flex-grow 
			flex flex-col
			 justify-between 
			 py-8 px-4
			 rounded-tr-lg
			 ">
				{/* Dashboard Menu */}
				<div>
					<h1 className="font-sans text-gray-500 text-sm pl-2 font-bold pb-2">Menu</h1>
					<div className="space-y-4">
						<div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-700 group transition-colors ease-linear duration-200">
							<svg class="w-6 h-6 group-hover:fill-current group-hover:text-white text-xl text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
							<h2 className="group-hover:text-white font-sans ml-4 text-lg font-medium text-white">Dashboard</h2>
						</div>

						<div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-700 group transition-colors ease-linear duration-200">
							<svg class="w-6 h-6 group-hover:fill-current group-hover:text-white text-xl text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
							<h2 className="group-hover:text-white font-sans ml-4 text-lg font-medium text-white">Company</h2>
						</div>

						<div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-700 group transition-colors ease-linear duration-200">
							<svg class="w-6 h-6 group-hover:fill-current group-hover:text-white text-xl text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
							<h2 className="group-hover:text-white font-sans ml-4 text-lg font-medium text-white">Contacts</h2>
						</div>
					</div>
				</div>
				{/* User Menu */}
				<div>
					<h1 className="font-sans text-gray-500 text-sm pl-2 font-bold pb-2">Account</h1>
					<div className="space-y-4">
						<div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-700 group transition-colors ease-linear duration-200">
							<svg class="w-6 h-6 group-hover:fill-current group-hover:text-white text-xl text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
							<h2 className="group-hover:text-white font-sans ml-4 text-lg font-medium text-white">Settings</h2>
						</div>

						<div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-red-700 group transition-colors ease-linear duration-200">
							<svg class="w-6 h-6 group-hover:fill-current group-hover:text-white text-xl text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>

							<h2 className="group-hover:text-white font-sans ml-4 text-lg font-medium text-red-500">Log out</h2>
						</div>


					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
