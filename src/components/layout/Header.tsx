'use client'
import Logo from "../../assets/logo.svg"

export const Header = () => {
    const updateDate = `${new Date().toLocaleDateString("en-US", {month: 'short', day: "numeric"})} ${new Date().toLocaleTimeString()}`
    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-center lg:justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1 items-center">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            alt=""
                            src={Logo}
                            className="h-20 w-auto"
                        />
                    </a>
                    <h1 className="ml-2 font-bold text-gray-900 hidden md:block">Analytics Dashboard</h1>
                </div>

                <div className="hidden lg:flex-col lg:flex lg:flex-1 lg:justify-end">
                    <p className="text-xs text-gray-500">Real-time business metrics</p>
                    <p className="text-sm text-gray-600">
                        Update time: {updateDate}
                    </p>
                </div>
            </nav>
        </header>
    )
}