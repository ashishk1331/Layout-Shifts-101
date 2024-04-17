import { Pulse, Bell, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
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
							className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
						>
							<Pulse size={20} />
						</button>
						<div className="relative inline-flex">
							<div className="inline-block size-[38px] rounded-full ring-2 ring-white flex justify-around items-center bg-emerald-300 text-lg font-semibold">
								F
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
