import { Pulse, Bell, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export default function () {
	return (
		<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b text-sm py-2.5 sm:py-4">
			<nav
				className="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
				aria-label="Global"
			>
				<div className="me-5 md:me-8">
					<a
						className="flex-none text-xl font-semibold"
						href="#"
						aria-label="Brand"
					>
						Dashboard
					</a>
				</div>
				<div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
					<div className="sm:hidden">
						<button
							type="button"
							className="inline-flex flex-shrink-0 justify-center items-center gap-2 size-[38px] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
						>
							<MagnifyingGlass className="flex-shrink-0 size-4" />
						</button>
					</div>
					<div className="hidden sm:block">
						<label htmlFor="icon" className="sr-only">
							Search
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
								<MagnifyingGlass className="flex-shrink-0 size-4 text-gray-500 size-4" />
							</div>
							<input
								type="text"
								id="icon"
								name="icon"
								className="py-2 pe-4 ps-10 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
								placeholder="Search"
							/>
						</div>
					</div>
					<div className="flex flex-row items-center justify-end gap-2">
						<button
							type="button"
							className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
						>
							<Bell size={20} />
						</button>
						<button
							type="button"
							className="hs-dropdown-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
							data-hs-offcanvas="#hs-offcanvas-right"
						>
							<Pulse size={20} />
						</button>
						<div
							className="hs-dropdown relative inline-flex"
							data-hs-dropdown-placement="bottom-right"
						>
							<button
								id="hs-dropdown-with-header"
								type="button"
								className="hs-dropdown-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
							>
								<img
									className="inline-block size-[38px] rounded-full ring-2 ring-white"
									src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
									alt="Image Description"
								/>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
