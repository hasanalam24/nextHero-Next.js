"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navber = () => {

    const pathName = usePathname()


    const links = [
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ]


    return (
        <nav className="bg-red-500 p-6 text-white flex items-center justify-between">
            <h5 className="font-bold">Next<span className="text-blue-800">Hero</span></h5>

            <ul className="flex items-center justify-center space-x-4">

                {
                    links.map(link => <Link className={`${pathName === link.path && 'text-cyan-600'}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>

        </nav >
    );
};

export default Navber;