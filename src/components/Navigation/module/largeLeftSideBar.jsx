import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { CgBrowse, CgLogOut } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsCalendar2Check } from 'react-icons/bs';
import { BiGroup } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CiSettings } from 'react-icons/ci';

import '../style/leftSideBar/leftSideBar.css';

const leftSideAppStyle = 'flex flex-col gap-2 pl-3 my-20';
const leftBarIconList = 'mr-3 p-1.5 rounded-full text-white text-lg';

export const LargeLeftSideBarNavigation = ({ toggleLeftSideMenu }) => {

    const [currentMenu, setCurrentMenu] = useState('Browse');

    const handlePageClickMenu = (page) => {
        setCurrentMenu(page);
    }

    return (
        <div className={`largeLeftNavbar line-clamp-1 min-h-screen ${toggleLeftSideMenu ? 'block w-screen' : 'hidden'} lg:w-[16%] lg:block`}>

            <div className="leftBarContent">
                <div className="leftSideNavbarLogo bg-white/10 min-h-[5rem] lg:min-h-[7rem] min-w-[10rem] flex justify-center items-center">
                    <button className="logoButton">
                        <Link onClick={() => handlePageClickMenu('Browse')} to={'/'}>MovieMaster</Link>
                    </button>
                </div>

                <div className={`menuList ${leftSideAppStyle}`}>
                    <div className="menuListTitle">
                        <p className="text-[12px] tracking-wide text-gray-400">
                            Menu
                        </p>
                    </div>

                    <Link onClick={() => handlePageClickMenu('Browse')} to={'/'} className={`flex items-center h-10 ${currentMenu === 'Browse' ? 'text-white border-r-2 border-red-600' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList} ${currentMenu === 'Browse' ? 'bg-red-600' : ''}`} ><CgBrowse /></span>
                        <span>Browse</span>
                    </Link>
                    <Link onClick={() => handlePageClickMenu('Watchlist')} to={'/watchlist'} className={`flex items-center h-10 ${currentMenu === 'Watchlist' ? 'text-white border-r-2 border-red-600' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList} ${currentMenu === 'Watchlist' ? 'bg-red-600' : ''}`}><MdFavoriteBorder className='text-white' /></span>
                        <span>Watchlist</span>
                    </Link>
                    <Link onClick={() => handlePageClickMenu('ComingSoon')} to={'/'} className={`flex items-center h-10 ${currentMenu === 'ComingSoon' ? 'text-white border-r-2 border-red-600' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList} ${currentMenu === 'ComingSoon' ? 'bg-red-600' : ''}`}><BsCalendar2Check /></span>
                        <span>Coming Soon</span>
                    </Link>
                </div>

                <div className={`socialList ${leftSideAppStyle}`}>
                    <div className="menuListTitle">
                        <p className="text-[12px] tracking-wide text-gray-400">
                            Social
                        </p>
                    </div>

                    <Link onClick={() => handlePageClickMenu('Friends')} to={'/friends'} className={`flex items-center h-10 ${currentMenu === 'Friends' ? 'text-white border-r-2 border-red-600' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList} ${currentMenu === 'Friends' ? 'bg-red-600' : ''}`}><BiGroup /></span>
                        <span>Friends</span>
                    </Link>
                    <Link onClick={() => handlePageClickMenu('Parties')} to={'/parties'} className={`flex items-center h-10 ${currentMenu === 'Parties' ? 'text-white border-r-2 border-red-600' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList} ${currentMenu === 'Parties' ? 'bg-red-600' : ''}`}><HiOutlineUserGroup /></span>
                        <span>Parties</span>
                    </Link>
                </div>
                <div className={`generalList ${leftSideAppStyle}`}>
                    <div className="menuListTitle">
                        <p className="text-[12px] tracking-wide text-gray-400">
                            General
                        </p>
                    </div>

                    <Link onClick={() => handlePageClickMenu('Settings')} to={'/settings'} className={`flex items-center h-10 ${currentMenu === 'Settings' ? 'text-white border-r-2 border-red-600' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList} ${currentMenu === 'Settings' ? 'bg-red-600' : ''}`}><CiSettings /></span>
                        <span>Settings</span>
                    </Link>
                    <Link onClick={() => handlePageClickMenu('LogOut')} to={'/logout'} className={`flex items-center h-10 ${currentMenu === 'LogOut' ? 'text-white border-r-2 border-red-600' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList} ${currentMenu === 'LogOut' ? 'bg-red-600' : ''}`}><CgLogOut /></span>
                        <span>Log Out</span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

LargeLeftSideBarNavigation.propTypes = {
    toggleLeftSideMenu: PropTypes.bool,
    handlePageClick: PropTypes.func,
    activeMenu: PropTypes.string
}