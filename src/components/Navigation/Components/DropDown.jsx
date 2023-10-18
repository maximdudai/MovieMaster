import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiArrowDown } from "react-icons/hi";

import { ImProfile } from "react-icons/im";
import { CiSettings, CiLogout } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

export const DropDown = () => {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white/10 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Menu
            <HiArrowDown
              className="ml-2 -mr-1 h-5 w-5 text-red-400 hover:text-red-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Link to="profile">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`border-[1px] ${
                        active ? "border-[1px] border-red-500 text-black" : "text-gray-900 border-transparent"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <span className="dropDownMenuIcon pr-2">
                        <ImProfile />
                      </span>
                      Profile
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link to="/">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`border-[1px] ${
                        active ? "border-[1px] border-red-500 text-black" : "text-gray-900 border-transparent"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <span className="dropDownMenuIcon pr-2">
                        <CiSettings />
                      </span>
                      Settings
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
            <div className="px-1 py-1">
              <Link to="/">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`border-[1px] ${
                        active ? "border-[1px] border-red-500 text-black" : "text-gray-900 border-transparent"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <span className="dropDownMenuIcon pr-2">
                        <BsClockHistory />
                      </span>
                      History
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link to="/">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`border-[1px] ${
                        active ? "border-[1px] border-red-500 text-black" : "text-gray-900 border-transparent"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <span className="dropDownMenuIcon pr-2">
                        <BsStar />
                      </span>
                      Favorite
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
            <div className="px-1 py-1">
              <Link to="/">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`border-[1px] ${
                        active ? "border-[1px] border-red-500 text-black" : "text-gray-900 border-transparent"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <span className="dropDownMenuIcon pr-2">
                        <CiLogout />
                      </span>
                      Log Out
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
