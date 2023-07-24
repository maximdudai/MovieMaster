import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { CgBrowse, CgLogOut } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsCalendar2Check } from 'react-icons/bs';
import { BiGroup } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CiSettings } from 'react-icons/ci';

import '../style/leftSideBar/leftSideBar.css';

const leftSideAppStyle = 'flex flex-col gap-2 px-3 my-20';
const leftBarIconList = 'mr-3 p-1.5 bg-red-600 rounded-full text-white text-lg';

export const LargeLeftSideBarNavigation = ({ toggleLeftSideMenu, handlePageClick, activeMenu }) => {

    return (
        <div className={`largeLeftNavbar line-clamp-1 min-h-screen ${toggleLeftSideMenu ? 'block w-screen' : 'hidden'} lg:w-[16%] lg:block`}>

            <div className="leftBarContent">
                <div className="leftSideNavbarLogo bg-white/10 min-h-[5rem] lg:min-h-[7rem] min-w-[10rem] flex justify-center items-center">
                    <button className="logoButton">
                        <Link onClick={() => handlePageClick('Browse')} to={'/'}>MovieMaster</Link>
                    </button>
                </div>

                <div className={`menuList ${leftSideAppStyle}`}>
                    <div className="menuListTitle">
                        <p className="text-[12px] tracking-wide text-gray-400">
                            Menu
                        </p>
                    </div>

                    <Link onClick={() => handlePageClick('Browse')} to={'/'} className={`flex items-center ${activeMenu === 'Browse' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList}`} ><CgBrowse /></span>
                        <span>Browse</span>
                    </Link>
                    <Link onClick={() => handlePageClick('Watchlist')} to={'/watchlist'} className={`flex items-center ${activeMenu === 'Watchlist' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList}`}><MdFavoriteBorder className='text-white' /></span>
                        <span>Watchlist</span>
                    </Link>
                    <Link onClick={() => handlePageClick('ComingSoon')} to={'/'} className={`flex items-center ${activeMenu === 'ComingSoon' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList}`}><BsCalendar2Check /></span>
                        <span>Coming Soon</span>
                    </Link>
                </div>

                <div className={`socialList ${leftSideAppStyle}`}>
                    <div className="menuListTitle">
                        <p className="text-[12px] tracking-wide text-gray-400">
                            Social
                        </p>
                    </div>

                    <Link onClick={() => handlePageClick('Friends')} to={'/friends'} className={`flex items-center ${activeMenu === 'Friends' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList}`}><BiGroup /></span>
                        <span>Friends</span>
                    </Link>
                    <Link onClick={() => handlePageClick('Parties')} to={'/parties'} className={`flex items-center ${activeMenu === 'Parties' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList}`}><HiOutlineUserGroup /></span>
                        <span>Parties</span>
                    </Link>
                </div>
                <div className={`generalList ${leftSideAppStyle}`}>
                    <div className="menuListTitle">
                        <p className="text-[12px] tracking-wide text-gray-400">
                            General
                        </p>
                    </div>

                    <Link onClick={() => handlePageClick('Settings')} to={'/settings'} className={`flex items-center ${activeMenu === 'Settings' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList}`}><CiSettings /></span>
                        <span>Settings</span>
                    </Link>
                    <Link onClick={() => handlePageClick('LogOut')} to={'/logout'} className={`flex items-center ${activeMenu === 'LogOut' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                        <span className={`${leftBarIconList}`}><CgLogOut /></span>
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