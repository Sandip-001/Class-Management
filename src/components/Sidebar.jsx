import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { GiCalendarHalfYear } from "react-icons/gi";
import { FaAngleRight } from 'react-icons/fa6'
import { IoMdLogOut, IoMdNotifications, IoMdPeople } from 'react-icons/io'
import { MdDashboard, MdManageAccounts, MdQuestionAnswer } from 'react-icons/md'
import { SiCoursera } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../App'

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const { setAlertBox, windowWidth, setIsOpenNav } = useContext(MyContext)

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu)
    }

    const handleCloseSidebarOnMobile = () => {
        if (windowWidth < 992) {
            setIsOpenNav(false);
        }
    };

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        setAlertBox({
            msg: 'Logout Successfully!',
            open: true,
            error: false
        });
        navigate("/login");
    };

    //const role = localStorage.getItem("role");

    return (
        <>
            <div className='sidebar' style={{background: "rgba(31, 48, 121, 1)"}}>

                    <>
                        <ul>
                            <li>
                                <Link to='/' onClick={handleCloseSidebarOnMobile}>
                                    <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                                        <span className='icon'><MdDashboard /></span>
                                        Dashboard
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                                    <span className='icon'><SiCoursera /></span>
                                    Course
                                    <span className='arrow'><FaAngleRight /></span>
                                </Button>
                                <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                                    <ul className='submenu'>
                                        <li><Link to='/add-examSubjectChapter' onClick={handleCloseSidebarOnMobile}>Add Exam Subject Chapter</Link></li>
                                        <li><Link to='/add-course' onClick={handleCloseSidebarOnMobile}>Add Course</Link></li>
                                        <li><Link to='/course-list' onClick={handleCloseSidebarOnMobile}>Cousres</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Button className={`w-100 ${activeTab === 2 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                                    <span className='icon'><IoMdPeople/></span>
                                    Admin Registration
                                    <span className='arrow'><FaAngleRight /></span>
                                </Button>
                                <div className={`submenuWrapper ${activeTab === 2 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                                    <ul className='submenu'>
                                        <li><Link to='/add-admin' onClick={handleCloseSidebarOnMobile}>Add Admin</Link></li>
                                        <li><Link to='/admin-list' onClick={handleCloseSidebarOnMobile}>Admins</Link></li>
                                        <li><Link to='/add-product' onClick={handleCloseSidebarOnMobile}>Add Product Access</Link></li>
                                        <li><Link to='/productAccess-list' onClick={handleCloseSidebarOnMobile}>Product Access List</Link></li>
                                        <li><Link to='/add-branchbatchdivision' onClick={handleCloseSidebarOnMobile}>Add Branch/Batch/Division</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Button className={`w-100 ${activeTab === 3 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                                    <span className='icon'><MdQuestionAnswer /></span>
                                    Question Bulk Upload
                                    <span className='arrow'><FaAngleRight /></span>
                                </Button>
                                <div className={`submenuWrapper ${activeTab === 3 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                                    <ul className='submenu'>
                                        <li><Link to='/add-bulkQuestion' onClick={handleCloseSidebarOnMobile}>Add Bulk Question</Link></li>
                                        <li><Link to='/bulkQuestion-list' onClick={handleCloseSidebarOnMobile}>Bulk Questions</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Button className={`w-100 ${activeTab === 4 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                                    <span className='icon'><GiCalendarHalfYear /></span>
                                    Upload Previous Year Question & Assign
                                    <span className='arrow'><FaAngleRight /></span>
                                </Button>
                                <div className={`submenuWrapper ${activeTab === 4 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                                    <ul className='submenu'>
                                        <li><Link to='/add-prevYearQuestion' onClick={handleCloseSidebarOnMobile}>Add Previous Year Question</Link></li>
                                        <li><Link to='/prevYearQuestion-list' onClick={handleCloseSidebarOnMobile}>Previous Year Question List</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Button className={`w-100 ${activeTab === 5 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
                                    <span className='icon'><IoMdNotifications /></span>
                                    Notification
                                    <span className='arrow'><FaAngleRight /></span>
                                </Button>
                                <div className={`submenuWrapper ${activeTab === 5 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                                    <ul className='submenu'>
                                        <li><Link to='/add-notification' onClick={handleCloseSidebarOnMobile}>Add Notification</Link></li>
                                        <li><Link to='/notification-list' onClick={handleCloseSidebarOnMobile}>Notification List</Link></li>
                                    </ul>
                                </div>
                            </li>
                            
                        </ul>

                    </>

                <br />

                <div className='logoutWrapper'>
                    <div className='logoutBox'>
                        <Button variant='contained' onClick={logout}><IoMdLogOut /> Logout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
