import React, { useContext, useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Button, CircularProgress, Tooltip } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { FaFilePdf, FaFileWord, FaCloudUploadAlt } from "react-icons/fa";

import { MyContext } from "../../../App";
import CustomSelect from "../../../components/CustomSelect";

const AddPreviousYearQuestion = () => {
  const context = useContext(MyContext);
  const { setIsHideSidebarAndHeader, setAlertBox } = context;

  useEffect(() => {
    setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  const examTypes = ["JEEMAIN", "NEET", "WBJEE"];
  const questionTypes = ["muliple choice", "short answer type", "reasoning"];

  const [examType, setExamType] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [description, setDescription] = useState("");
  const [questionFile, setQuestionFile] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (file && allowedTypes.includes(file.type)) {
      setQuestionFile(file);
    } else {
      alert("Only PDF or Word files are allowed.");
    }
  };

  const removeFile = () => {
    setQuestionFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!questionFile) return alert("Please upload a file first.");
    setIsLoading(true);

    // Simulate file upload delay
    setTimeout(() => {
      setIsLoading(false);
      setAlertBox({
        msg: "File uploaded successfully!",
        open:true,
        error:false
      })
    }, 2000);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="right-content w-100">
          <div className="card shadow border-0 w-100 flex-row p-4">
            <h5 className="mb-0">Upload Previous Year Question</h5>
            <Breadcrumbs
              aria-label="breadcrumb"
              className="ms-auto breadcrumbs_"
            ></Breadcrumbs>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="card p-4">
                  <h5 className="mb-4">Basic Information</h5>

                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <h6>EXAM </h6>
                        <CustomSelect
                          value={examType}
                          onChange={(e) => setExamType(e.target.value)}
                          options={examTypes}
                          label="Select Exam Type"
                          className="w-100"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <h6>EXAM TYPE</h6>
                        <CustomSelect
                          value={questionType}
                          onChange={(e) => setQuestionType(e.target.value)}
                          options={questionTypes}
                          label="Select Question Type"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <h6>DESCRIPTION</h6>
                        <textarea
                          rows={5}
                          cols={10}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-lg p-4 mt-3 border-0">
              <h5 className="mb-4 fw-bold text-primary">
                Upload Question
              </h5>

              <div className="d-flex flex-wrap gap-3 align-items-start">
                {questionFile ? (
                  <div
                    className="position-relative border rounded p-3 d-flex align-items-center gap-3 bg-light shadow-sm"
                    style={{
                      minWidth: 250,
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  >
                    <div>
                      {questionFile.type === "application/pdf" ? (
                        <FaFilePdf size={36} color="red" />
                      ) : (
                        <FaFileWord size={36} color="blue" />
                      )}
                    </div>
                    <div className="text-truncate" style={{ maxWidth: 180 }}>
                      <strong>{questionFile.name}</strong>
                    </div>
                    <Tooltip title="Remove file">
                      <button
                        className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle"
                        onClick={removeFile}
                      >
                        <IoCloseSharp size={16} />
                      </button>
                    </Tooltip>
                  </div>
                ) : (
                  <label
                    className="border rounded p-3 d-flex flex-column align-items-center justify-content-center text-center bg-light shadow-sm"
                    style={{
                      minWidth: 250,
                      height: 120,
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  >
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      accept=".pdf, .doc, .docx"
                      hidden
                    />
                    <FaCloudUploadAlt
                      size={32}
                      className="mb-2 text-secondary"
                    />
                    <strong className="text-muted">Upload PDF / Word</strong>
                  </label>
                )}
              </div>

              <div className="mt-4">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  disabled={!questionFile}
                  className="d-flex align-items-center justify-content-center gap-2"
                >
                  <FaCloudUploadAlt />
                  {isLoading ? (
                    <CircularProgress
                      size={20}
                      color="inherit"
                      style={{ height: "20px", width: "20px" }}
                    />
                  ) : (
                    "PUBLISH AND VIEW"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </LocalizationProvider>
    </>
  );
};

export default AddPreviousYearQuestion;
