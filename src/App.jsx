import React from "react";
import "./App.css";
import "./responsive.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/superadmin/Dashboard/Dashboard";
import AddCourse from "./pages/superadmin/Couse/AddCourse";
import CourseList from "./pages/superadmin/Couse/CourseList";
import EditCourse from "./pages/superadmin/Couse/EditCourse";
import AddAdmin from "./pages/superadmin/Admin/AddAdmin";
import AdminList from "./pages/superadmin/Admin/AdminList";
import EditAdmin from "./pages/superadmin/Admin/EditAdmin";
import AddProductAccess from "./pages/superadmin/Admin/AddProductAccess";
import AdminAccessList from "./pages/superadmin/Admin/AdminAccessList";
import EditAdminAccess from "./pages/superadmin/Admin/EditAdminAccess";
import AddBranchBatchDivision from "./pages/superadmin/Admin/AddBranchBatchDivision";
import AddBulkQuestion from "./pages/superadmin/BulkQuestion/AddBulkQuestion";
import BulkQuestionList from "./pages/superadmin/BulkQuestion/BulkQuestionList";
import EditBulkQuestion from "./pages/superadmin/BulkQuestion/EditBulkQuestion";
import AddPreviousYearQuestion from "./pages/superadmin/PreviousYearQuestion/AddPreviousYearQuestion";
import PreviousYearQuestionList from "./pages/superadmin/PreviousYearQuestion/PreviousQuestionList";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import AddNotification from "./pages/superadmin/Notifications/AddNotification";
import NotificationList from "./pages/superadmin/Notifications/NotificationList";
import EditNotification from "./pages/superadmin/Notifications/EditNotification";
import ExamAndStandardManager from "./pages/superadmin/Couse/ExamSubjectChapter";


const MyContext = createContext();

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false)
  const [isOpenNav, setIsOpenNav] =useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [progress, setProgress] = useState(0);

  const [alertBox, setAlertBox] = useState({
      open:false,
      error:false,
      msg:''
    })

  const handleClose = (event, reason) =>{
    if(reason === 'clickaway'){
      return;
    }

    setAlertBox({
      open:false
    })
  }

  useEffect(()=>{
    const handleResize = ()=>{
      setWindowWidth(window.innerWidth)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  },[])

  const openNav=()=>{
    setIsOpenNav(true)
  }

  

  const values={
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    windowWidth, 
    setWindowWidth,
    isOpenNav,
    openNav, 
    setIsOpenNav,
    setProgress,
    alertBox,
    setAlertBox
  }


  return (
    <Router>
      <MyContext.Provider value={values}>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        className="topLoadingBar"
      />

      <Snackbar open={alertBox.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertBox.error===false?'success' : 'error'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {alertBox.msg}
        </Alert>
      </Snackbar>
        {
          isHideSidebarAndHeader !== true && <Header/>
        }
    
      <div className="main d-flex">

        {
          isHideSidebarAndHeader !== true &&
          <>
          <div className={`sidebarOverlay d-none ${isOpenNav===true && 'show'}`} onClick={()=>setIsOpenNav(false)}></div>
          <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle':''} ${isOpenNav === true ? 'open': ''}`}>
            <Sidebar/>
          </div>
          </>
        }
        

        <div className={`content ${isHideSidebarAndHeader === true && 'full'} ${isToggleSidebar === true ? 'toggle':''}`}>
          <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/" element={<PrivateRoute element={<Dashboard />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/add-examSubjectChapter" element={<PrivateRoute element={<ExamAndStandardManager/>} allowedRoles={["superadmin"]} />} />
            <Route exact path="/add-course" element={<PrivateRoute element={<AddCourse />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/edit-course" element={<PrivateRoute element={<EditCourse />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/course-list" element={<PrivateRoute element={<CourseList />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/add-admin" element={<PrivateRoute element={<AddAdmin />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/edit-admin" element={<PrivateRoute element={<EditAdmin />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/admin-list" element={<PrivateRoute element={<AdminList />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/add-product" element={<PrivateRoute element={<AddProductAccess />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/edit-adminProductAccess" element={<PrivateRoute element={<EditAdminAccess />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/productAccess-list" element={<PrivateRoute element={<AdminAccessList />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/add-branchbatchdivision" element={<PrivateRoute element={<AddBranchBatchDivision />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/add-bulkQuestion" element={<PrivateRoute element={<AddBulkQuestion />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/edit-bulkQuestion" element={<PrivateRoute element={<EditBulkQuestion />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/bulkQuestion-list" element={<PrivateRoute element={<BulkQuestionList />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/add-prevYearQuestion" element={<PrivateRoute element={<AddPreviousYearQuestion />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/prevYearQuestion-list" element={<PrivateRoute element={<PreviousYearQuestionList />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/add-notification" element={<PrivateRoute element={<AddNotification />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/edit-notification" element={<PrivateRoute element={<EditNotification />} allowedRoles={["superadmin"]} />} />
            <Route exact path="/notification-list" element={<PrivateRoute element={<NotificationList />} allowedRoles={["superadmin"]} />} />
          </Routes>
        </div>
      </div>
      </MyContext.Provider>
    </Router>
  );
}

export default App;
export {MyContext};
