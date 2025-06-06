import React, { useContext, useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete, MdShoppingBag } from "react-icons/md";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import { Avatar, Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import man1 from "../../../assets/man1.png";
import man2 from "../../../assets/man2.png";
import { MyContext } from "../../../App";
import ResponsivePagination from "../../../components/Pagination";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const AdminAccessList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // or calculate based on data length

  const { setProgress, setAlertBox, setIsHideSidebarAndHeader } =
    useContext(MyContext);

  useEffect(() => {
    setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setProgress(20);
    setProgress(100);
  }, []); // Fetch products when page or category changes

  const getDummyAdminAccessData = () => {
    return [
      {
        no: 1,
        instituteName: "Gokuldham Institute",
        exam: "JEE MAIN",
        numberOfStudents: 200,
        offlineTest: 5,
        onlineTest: 10,
        softwareValidation: "2025-12-31", // ISO format for easy parsing
        status: "Active", // or "Inactive"
      },
      {
        no: 2,
        instituteName: "Bright Future Academy",
        exam: "NEET",
        numberOfStudents: 150,
        offlineTest: 3,
        onlineTest: 8,
        softwareValidation: "2025-10-15",
        status: "Inactive",
      },
      {
        no: 3,
        instituteName: "Gokuldham Institute",
        exam: "JEE MAIN",
        numberOfStudents: 200,
        offlineTest: 5,
        onlineTest: 10,
        softwareValidation: "2025-12-31", // ISO format for easy parsing
        status: "Active", // or "Inactive"
      },
      {
        no: 4,
        instituteName: "Bright Future Academy",
        exam: "NEET",
        numberOfStudents: 150,
        offlineTest: 3,
        onlineTest: 8,
        softwareValidation: "2025-10-15",
        status: "Inactive",
      },
    ];
  };

  const dummyData = getDummyAdminAccessData();

  const handleEditClick = async () => {};

  const handleDeleteClick = async (courseId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this admin access?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        // await deleteCourse(courseId); // your delete API or logic
        Swal.fire("Deleted!", "Admin access has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    }
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Admin Access Details</h5>
          <div className="ms-auto d-flex align-items-center">
            <Link to={"/add-product"}>
              <Button className="btn-blue ms-3 ps-3 pe-3">Add Product Access</Button>
            </Link>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle text-nowrap">
              <thead className="table-primary text-white text-uppercase text-center">
                <tr>
                  <th>NO</th>
                  <th>INSTITUTE NAME</th>
                  <th>EXAM</th>
                  <th>NO OF STUDENTS</th>
                  <th>OFFLINE TEST</th>
                  <th>ONLINE TEST</th>
                  <th>SOFTWARE VALIDATION</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {dummyData.length > 0 ? (
                  dummyData.map((item, index) => (
                    <tr key={index}>
                      <td># {item.no}</td>
                      <td>{item.instituteName}</td>
                      <td>{item.exam}</td>
                      <td>{item.numberOfStudents}</td>
                      <td>{item.offlineTest}</td>
                      <td>{item.onlineTest}</td>
                      <td>{item.softwareValidation}</td>
                      <td>{item.status}</td>
                      <td>
                        <div className="d-flex gap-2 align-item-center justify-content-center">
                          <Link to={`/edit-adminProductAccess`}>
                            <button
                              className="btn btn-sm btn-success"
                              onClick={() => handleEditClick(item.no)}
                            >
                              <FaPencilAlt />
                            </button>
                          </Link>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDeleteClick(item.no)}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="text-center">
                      No data found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <ResponsivePagination
          page={currentPage}
          count={totalPages}
          onChange={(event, value) => setCurrentPage(value)}
        />
      </div>
    </>
  );
};

export default AdminAccessList;
