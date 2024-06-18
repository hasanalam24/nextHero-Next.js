import Link from "next/link";

const Navber = () => {
    return (
        <nav className="bg-red-500 p-6 text-white flex items-center justify-between">
            <h5 className="font-bold">Next<span className="text-blue-800">Hero</span></h5>

            <ul className="flex items-center justify-center space-x-4">

                <li>
                    <Link href="about">About</Link>
                </li>
                <li>Service</li>
                <li>Contact</li>
            </ul>

        </nav>
    );
};

export default Navber;