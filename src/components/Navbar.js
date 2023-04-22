import Link from "next/link";

function Navbar(){
    return(
        <nav className="bg-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="hiddden md:ml-6 md:flex md:space-x-8">
                            <Link href='/'>
                                <div className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-large">HOME</div>
                            </Link>
                            <Link href='/services'>
                                <div className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-large">SERVICES</div>
                            </Link>
                            <Link href='/about'>
                                <div className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-large">ABOUT US</div>
                            </Link>
                            <Link href='/contact'>
                                <div className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-large">CONTACT</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;