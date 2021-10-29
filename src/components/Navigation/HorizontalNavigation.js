import { Fragment } from "react"
import { Menu, Transition } from '@headlessui/react'
const HorizontalNavigation = () => {

	return (
		<>
			<div className="p-4">
				<div className="flex  h-8 text-gray-900 item-center justify-between">
					<div className="flex cursor-pointer group">
						<svg class="w-8 h-8 fill-current text-gray-900 group-hover:text-gray-600 transition-all ease-linear" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
						<h1 className="text-lg font-bold group-hover:text-gray-600 transition-all ease-linear">CompanyConnect</h1>
					</div>
					<div className="relative">
						<Menu as="div" >
							<div>
								<Menu.Button className="group cursor-pointer flex" >
				
									<svg class="w-6 h-6 fill-current text-gray-900 group-hover:text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
									Menu
									</Menu.Button>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-50"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="absolute right-0 w-56 mt-2  bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
										<div className="px-1 py-1">
											<Menu.Item>
												{({ active }) => (
													<a href="/" className={`flex items-center px-2 py-2 text-sm rounded-md
										${active ? "bg-gray-900 text-gray-100 " : "text-gray-900"}`}>
														<svg className={`w-6 h-6 mr-2  ${active ? "text-gray-100" : "text-gray-900"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
														Dashboard
													</a>
												)}


											</Menu.Item>
										</div>
										<div className="px-1 py-1">
											<Menu.Item>
												{({ active }) => (
													<a href="/" className={`flex items-center px-2 py-2 text-sm rounded-md
										${active ? "bg-gray-900 text-gray-100 " : "text-gray-900"}`}>
														<svg className={`w-6 h-6 mr-2 ${active ? "text-gray-100" : "text-gray-900"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
														Dashboard
													</a>
												)}



											</Menu.Item>
										</div>
										<div className="px-1 py-1">
											<Menu.Item>
												{({ active }) => (
													<a href="/" className={`flex items-center px-2 py-2 text-sm rounded-md
										${active ? "bg-gray-900 text-gray-100 " : "text-gray-900"}`}>
														<svg className={`w-6 h-6 mr-2 ${active ? "text-gray-100" : "text-gray-900"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
														Contacts
													</a>
												)}



											</Menu.Item>
										</div>
										<div className="px-1 py-1">
											<Menu.Item>
												{({ active }) => (
													<a href="/" className={`flex items-center px-2 py-2 text-sm rounded-md
										${active ? "bg-gray-900 text-gray-100 " : "text-gray-900"}`}>
														<svg className={`w-6 h-6 mr-2 ${active ? "text-gray-100" : "text-gray-900"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
														Settings
													</a>
												)}



											</Menu.Item>
										</div>

										<div className="px-1 py-1">
											<Menu.Item>
												{({ active }) => (
													<a href="/" className={`flex items-center px-2 py-2 text-sm rounded-md
										${active ? "bg-red-500 text-gray-100 " : "text-red-500"}`}>
														<svg className={`w-6 h-6 mr-2 ${active ? "text-gray-100" : "text-red-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
														Logout
													</a>
												)}



											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</div>
						</Menu>
					</div>
				</div>

			</div>

		</>
	)
}

export default HorizontalNavigation
