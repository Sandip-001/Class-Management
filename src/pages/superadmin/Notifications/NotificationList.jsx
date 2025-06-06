import React, { useContext, useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete, MdShoppingBag } from "react-icons/md";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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

const NotificationList = () => {
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

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const getDummyNotificationData = () => {
    return [
      {
        no: 1,
        name: "Admin",
        title: "Welcome Update",
        body: "We’ve added new features to your dashboard.",
        type: "Info",
      },
      {
        no: 2,
        name: "Superadmin",
        title: "Maintenance Alert",
        body: "System will be down for maintenance tonight at 12 AM.",
        type: "Alert",
      },
      {
        no: 3,
        name: "Support",
        title: "New Resources Available",
        body: "Check out the new mock test papers in the Resources tab.",
        type: "Update",
      },
      {
        no: 4,
        name: "Admin",
        title: "Welcome Update",
        body: "We’ve added new features to your dashboard.",
        type: "Info",
      },
      {
        no: 5,
        name: "Superadmin",
        title: "Maintenance Alert",
        body: "System will be down for maintenance tonight at 12 AM.",
        type: "Alert",
      },
    ];
  };

  const dummyData = getDummyNotificationData();

  const handleEditClick = async () => {};

  const handleDeleteClick = async (courseId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this notification?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        // await deleteCourse(courseId); // your delete API or logic
        Swal.fire(
          "Deleted!",
          "Notification has been deleted.",
          "success"
        );
      } catch (error) {
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    }
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">All Notifications</h5>
          <div className="ms-auto d-flex align-items-center">
            <Link to={"/add-notification"}>
              <Button className="btn-blue ms-3 ps-3 pe-3">
                Add New Notification
              </Button>
            </Link>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle text-nowrap">
              <thead className="table-primary text-white text-uppercase text-center">
                <tr>
                  <th>No</th>
                  <th>NAME</th>
                  <th>TITLE</th>
                  <th>BODY</th>
                  <th>TYPE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {dummyData.length > 0 ? (
                  dummyData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.no}</td>
                      <td>{item.name}</td>
                      <td>{item.title}</td>
                      <td>
                        {item.body.split(" ").length > 10
                          ? item.body.split(" ").slice(0, 10).join(" ") +
                            "..."
                          : item.body}
                      </td>
                      <td>{item.type}</td>
                      <td>
                        <div className="d-flex gap-2 align-item-center justify-content-center">
                          <Link to={`/edit-notification`}>
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

export default NotificationList;
