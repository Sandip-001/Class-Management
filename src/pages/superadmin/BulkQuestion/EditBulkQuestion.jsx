import React, { useContext, useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  Button,
  MenuItem,
  Select,
  TextField,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MyContext } from "../../../App";
import ResponsivePagination from "../../../components/Pagination";
import CustomSelect from "../../../components/CustomSelect";

const EditBulkQuestion = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState(null);
  const [open, setOpen] = useState(false);

  const [standard, setStandard] = useState("");
  const [subject, setSubject] = useState("");
  const [examType, setExamType] = useState("");
  const [chapter, setChapter] = useState("");
  const [subTopic, setSubTopic] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [level, setLevel] = useState("");
  const [mark, setMark] = useState("");

  const standards = ["10th", "11th", "12th"];
  const subjects = ["physics", "chemistry", "math"];
  const examTypes = ["JEEMAIN", "NEET", "WBJEE"];
  const chapters = ["Atomic Structure", "States Of Matter"];
  const subTopics = ["Structure of atom", "Equilibirium"];
  const questionTypes = ["muliple choice", "short answer type", "reasoning"];
  const levels = ["easy", "medium", "hard"];

  const { setProgress, setAlertBox, setIsHideSidebarAndHeader } =
    useContext(MyContext);

  useEffect(() => {
    setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
    setProgress(20);
    setProgress(100);
  }, []);

  const getDummyQuestionData = () => {
    return [
      {
        no: "#1",
        question: "What is the SI unit of electric charge ?",
        optionA: "10th",
        optionB: "Physics",
        optionC: "Motion",
        optionD: "Newton's Laws",
        correctAnswer: "Option A",
        explanation:
          "The SI (International System of Units) unit for electric charge is the coulomb, denoted by the symbol C. This unit is derived from the fundamental unit of current, the ampere, and is defined as the amount of charge that passes through a conductor carrying one ampere of current in one second.",
      },
      {
        no: "#2",
        question: "What is the speed of light in a vacuum?",
        optionA: "2.998 x 10^8 m/s",
        optionB: "3.00 x 10^8 m/s",
        optionC: "3.44 x 10^8 m/s",
        optionD: "3.00 x 10^9 m/s",
        correctAnswer: "Option A",
        explanation:
          "The speed of light in a vacuum is approximately 2.998 x 10^8 meters per second. This is a fundamental constant in physics.",
      },
      {
        no: "#3",
        question: "What is the SI unit of electric charge ?",
        optionA: "10th",
        optionB: "Physics",
        optionC: "Motion",
        optionD: "Newton's Laws",
        correctAnswer: "Option A",
        explanation:
          "The SI (International System of Units) unit for electric charge is the coulomb, denoted by the symbol C. This unit is derived from the fundamental unit of current, the ampere, and is defined as the amount of charge that passes through a conductor carrying one ampere of current in one second.",
      },
      {
        no: "#4",
        question: "What is the speed of light in a vacuum?",
        optionA: "2.998 x 10^8 m/s",
        optionB: "3.00 x 10^8 m/s",
        optionC: "3.44 x 10^8 m/s",
        optionD: "3.00 x 10^9 m/s",
        correctAnswer: "Option A",
        explanation:
          "The speed of light in a vacuum is approximately 2.998 x 10^8 meters per second. This is a fundamental constant in physics.",
      },
    ];
  };

  const dummyData = getDummyQuestionData();

  const handleEditClick = (data) => {
    setEditData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditData(null);
  };

  const handleDeleteClick = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this question?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Question has been deleted.", "success");
    }
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <div className="right-content w-100">
      <div className="card shadow border-0 p-4">
        <h5 className="mb-3">Edit Bulk Question</h5>

        <div className="row g-3 mb-4">
          <div className="col-6 col-md-3 col-lg-1_5">
            <CustomSelect
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              options={examTypes}
              label="Exam Type"
              className="w-100"
            />
          </div>

          <div className="col-6 col-md-3 col-lg-1_5">
            <CustomSelect
              value={standard}
              onChange={(e) => setStandard(e.target.value)}
              options={standards}
              label="Standard"
              className="w-100"
            />
          </div>

          <div className="col-6 col-md-3 col-lg-1_5">
            <CustomSelect
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={subjects}
              label="Subject"
              className="w-100"
            />
          </div>

          <div className="col-6 col-md-3 col-lg-1_5">
            <CustomSelect
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              options={chapters}
              label="Chapter"
              className="w-100"
            />
          </div>

          <div className="col-6 col-md-3 col-lg-1_5">
            <CustomSelect
              value={subTopic}
              onChange={(e) => setSubTopic(e.target.value)}
              options={subTopics}
              label="Sub Topic"
              className="w-100"
            />
          </div>

          <div className="col-6 col-md-3 col-lg-1_5">
            <CustomSelect
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              options={questionTypes}
              label="Question Type"
              className="w-100"
            />
          </div>

          <div className="col-6 col-md-3 col-lg-1_5">
            <CustomSelect
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              options={levels}
              label="Question Level"
              className="w-100"
            />
          </div>

          <div className="col-6 col-md-3 col-lg-1_5">
            <TextField
              fullWidth
              type="number"
              label="Marks"
              value={mark}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (value >= 0 || e.target.value === "")
                  setMark(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle text-nowrap">
            <thead className="table-primary text-white text-uppercase text-center">
              <tr>
                <th>No</th>
                <th>QUESTION</th>
                <th>OPTION A</th>
                <th>OPTION B</th>
                <th>OPTION C</th>
                <th>OPTION D</th>
                <th>CORRECT</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {dummyData.map((item, index) => (
                <tr key={index}>
                  <td>{item.no}</td>
                  <td>{item.question}</td>
                  <td>{item.optionA}</td>
                  <td>{item.optionB}</td>
                  <td>{item.optionC}</td>
                  <td>{item.optionD}</td>
                  <td>{item.correctAnswer}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link>
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => handleEditClick(item)}
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
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3 text-center">
          <Button variant="contained" color="primary" className="w-40">
            Save
          </Button>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>
            Edit Question
          </Typography>
          {editData && (
            <>
              <TextField
                fullWidth
                label="Question"
                className="mb-3"
                value={editData.question}
              />
              <TextField
                fullWidth
                label="Option A"
                className="mb-3"
                value={editData.optionA}
              />
              <TextField
                fullWidth
                label="Option B"
                className="mb-3"
                value={editData.optionB}
              />
              <TextField
                fullWidth
                label="Option C"
                className="mb-3"
                value={editData.optionC}
              />
              <TextField
                fullWidth
                label="Option D"
                className="mb-3"
                value={editData.optionD}
              />
              <TextField
                fullWidth
                label="Correct Answer"
                className="mb-3"
                value={editData.correctAnswer}
              />
              <TextField
                fullWidth
                multiline
                label="Explanation"
                rows={4}
                value={editData.explanation}
              />
              <div className="text-end mt-3">
                <Button variant="contained" onClick={handleClose}>
                  Save Changes
                </Button>
              </div>
            </>
          )}
        </Box>
      </Modal>

      <ResponsivePagination
        page={currentPage}
        count={10}
        onChange={(event, value) => setCurrentPage(value)}
      />
    </div>
  );
};

export default EditBulkQuestion;
