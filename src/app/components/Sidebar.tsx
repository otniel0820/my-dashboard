import Image from "next/image";
import React from "react";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItems } from "./SidebarMenuItems";

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40}/>,
        title: 'Dasboard',
        subTitle: 'Visualizacion'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40}/>,
        title: 'Counter',
        subTitle: 'Contador client side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={40}/>,
        title: 'Pokemons',
        subTitle: 'Pokemons estaticos'
    },
]
export const Sidebar = () => {
  return (
    <div
      style={{ width: "400px" }}
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl flex items-center gap-3 font-bold text-white">
        <IoLogoReact/>
        <span>Dash.</span> 
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt=""
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Otniel Lascano</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
            menuItems.map((item) => {
                return <SidebarMenuItems key={item.path}{...item}/>
            })
        }
        
      </div>
    </div>
  );
};
