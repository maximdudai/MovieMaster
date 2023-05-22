import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { CgBrowse, CgLogOut } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsCalendar2Check } from 'react-icons/bs';
import { BiGroup } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CiSettings } from 'react-icons/ci';

import '../style/leftSideBar/leftSideBar.css';

const leftSideAppStyle = 'flex flex-col gap-2 my-20';
const leftBarIconList = 'mr-3 p-1.5 bg-red-600 rounded-full text-white text-lg';
export const LargeLeftSideBarNavigation = ({ activeMenu }) => {

    return (
        <>
            <div className="largeLeftNavbar w-1/6 h-screen line-clamp-1">

                <div className="leftBarContent m-5">
                    <button className="leftSideNavbarLogo">
                        <Link to={'/'}>MovieMaster</Link>
                    </button>

                    <div className={`menuList ${leftSideAppStyle}`}>
                        <div className="menuListTitle my-3">
                            <p className="text-[11px] text-gray-400">
                                Menu
                            </p>
                        </div>

                        <Link to={'/browse'} className={`flex items-center ${activeMenu === 'Browse' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                            <span className={`${leftBarIconList}`} ><CgBrowse /></span>
                            <span>Browse</span>
                        </Link>
                        <Link to={'/watchlist'} className={`flex items-center ${activeMenu === 'Watchlist' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                            <span className={`${leftBarIconList}`}><MdFavoriteBorder className='text-white' /></span>
                            <span>Watchlist</span>
                        </Link>
                        <Link to={'/'} className={`flex items-center ${activeMenu === 'ComingSoon' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                            <span className={`${leftBarIconList}`}><BsCalendar2Check /></span>
                            <span>Coming Soon</span>
                        </Link>
                    </div>

                    <div className={`socialList ${leftSideAppStyle}`}>
                        <div className="menuListTitle my-3">
                            <p className="text-[11px] text-gray-400">
                                Social
                            </p>
                        </div>

                        <Link to={'/friends'} className={`flex items-center ${activeMenu === 'Friends' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                            <span className={`${leftBarIconList}`}><BiGroup /></span>
                            <span>Friends</span>
                        </Link>
                        <Link to={'/parties'} className={`flex items-center ${activeMenu === 'Parties' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                            <span className={`${leftBarIconList}`}><HiOutlineUserGroup /></span>
                            <span>Parties</span>
                        </Link>
                    </div>
                    <div className={`generalList ${leftSideAppStyle}`}>
                        <div className="menuListTitle my-3">
                            <p className="text-[11px] text-gray-400">
                                General
                            </p>
                        </div>

                        <Link to={'/settings'} className={`flex items-center ${activeMenu === 'Settings' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                            <span className={`${leftBarIconList}`}><CiSettings /></span>
                            <span>Settings</span>
                        </Link>
                        <Link to={'/logout'} className={`flex items-center ${activeMenu === 'LogOut' ? 'text-white' : 'text-gray-400'} hover:text-gray-200`}>
                            <span className={`${leftBarIconList}`}><CgLogOut /></span>
                            <span>Log Out</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

LargeLeftSideBarNavigation.propType = {
    activeMenu: PropTypes.string.isRequired
}