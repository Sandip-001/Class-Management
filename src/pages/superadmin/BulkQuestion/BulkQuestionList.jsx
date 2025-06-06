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


const BulkQuestionList = () => {
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

  const getDummyQuestionData = () => {
    return [
      {
        uid: "#1",
        examType: "JEE MAIN",
        standard: "10th",
        subject: "Physics",
        chapter: "Motion",
        subTopic: "Newton's Laws",
        questionType: "MCQ",
        marks: "2",
      },
      {
        uid: "#2",
        examType: "NEET",
        standard: "12th",
        subject: "Chemistry",
        chapter: "Organic Chemistry",
        subTopic: "Hydrocarbons",
        questionType: "Short Answer Question",
        marks: "4",
      },
      {
        uid: "#3",
        examType: "JEE MAIN",
        standard: "10th",
        subject: "Physics",
        chapter: "Motion",
        subTopic: "Newton's Laws",
        questionType: "MCQ",
        marks: "2",
      },
      {
        uid: "#4",
        examType: "NEET",
        standard: "12th",
        subject: "Chemistry",
        chapter: "Organic Chemistry",
        subTopic: "Hydrocarbons",
        questionType: "Short Answer Question",
        marks: "4",
      },
    ];
  };

  const dummyData = getDummyQuestionData();

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
          <h5 className="mb-0">Bulk Questions</h5>
          <div className="ms-auto d-flex align-items-center">
            <Link to={"/add-bulkQuestion"}>
              <Button className="btn-blue ms-3 ps-3 pe-3">
                Add Bulk Question
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
                  <th>EXAM TYPE</th>
                  <th>STANDARD</th>
                  <th>SUBJECT</th>
                  <th>CHAPTER</th>
                  <th>SUB-TOPIC</th>
                  <th>QUESTION TYPE</th>
                  <th>MARKS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {dummyData.length > 0 ? (
                  dummyData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.uid}</td>
                      <td>{item.examType}</td>
                      <td>{item.standard}</td>
                      <td>{item.subject}</td>
                      <td>{item.chapter}</td>
                      <td>{item.subTopic}</td>
                      <td>{item.questionType}</td>
                      <td>{item.marks}</td>
                      <td>
                        <div className="d-flex gap-2 align-item-center justify-content-center">
                          <Link to={`/edit-bulkQuestion`}>
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

export default BulkQuestionList;