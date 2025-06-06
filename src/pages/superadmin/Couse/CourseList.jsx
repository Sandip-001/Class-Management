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

const CourseList = () => {
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

  const getDummyExamData = () => {
    return [
      {
        uid: "#1",
        name: "Mid Term Exam",
        standard: "10th",
        subject: "Physics",
        examType: "MCQ",
        chapter: "Motion",
        subTopic: "Newton's Laws",
        questionType: "Objective",
        time: "30 mins",
      },
      {
        uid: "#2",
        name: "Final Exam",
        standard: "12th",
        subject: "Chemistry",
        examType: "Theory",
        chapter: "Organic Chemistry",
        subTopic: "Hydrocarbons",
        questionType: "Descriptive",
        time: "60 mins",
      },
      {
        uid: "#3",
        name: "Mid Term Exam",
        standard: "10th",
        subject: "Physics",
        examType: "MCQ",
        chapter: "Motion",
        subTopic: "Newton's Laws",
        questionType: "Objective",
        time: "30 mins",
      },
      {
        uid: "#4",
        name: "Final Exam",
        standard: "12th",
        subject: "Chemistry",
        examType: "Theory",
        chapter: "Organic Chemistry",
        subTopic: "Hydrocarbons",
        questionType: "Descriptive",
        time: "60 mins",
      },
    ];
  };

  const dummyData = getDummyExamData();

  const handleEditClick = async () => {};

  const handleDeleteClick = async (courseId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this course?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        // await deleteCourse(courseId); // your delete API or logic
        Swal.fire("Deleted!", "Course has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    }
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Course List</h5>
          <div className="ms-auto d-flex align-items-center">
            <Link to={"/add-course"}>
              <Button className="btn-blue ms-3 ps-3 pe-3">
                Add New Course
              </Button>
            </Link>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle text-nowrap">
              <thead className="table-primary text-white text-uppercase text-center">
                <tr>
                  <th>UID</th>
                  <th>EXAM NAME</th>
                  <th>STANDARD</th>
                  <th>SUBJECT</th>
                  <th>EXAM TYPE</th>
                  <th>CHAPTER</th>
                  <th>SUB-TOPIC</th>
                  <th>QUESTION TYPE</th>
                  <th>TIME</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {dummyData.length > 0 ? (
                  dummyData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.uid}</td>
                      <td>{item.name}</td>
                      <td>{item.standard}</td>
                      <td>{item.subject}</td>
                      <td>{item.examType}</td>
                      <td>{item.chapter}</td>
                      <td>{item.subTopic}</td>
                      <td>{item.questionType}</td>
                      <td>{item.time}</td>
                      <td>
                        <div className="d-flex gap-2 align-item-center justify-content-center">
                          <Link to={`/edit-course`}>
                            <button
                              className="btn btn-sm btn-success"
                              onClick={() => handleEditClick(item.uid)}
                            >
                              <FaPencilAlt />
                            </button>
                          </Link>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDeleteClick(item.uid)}
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

export default CourseList;