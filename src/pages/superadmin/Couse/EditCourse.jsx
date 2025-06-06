import React, { useContext, useEffect, useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button, CircularProgress, Rating } from "@mui/material";
import { FaCloudUploadAlt, FaRegImages } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import { MyContext } from "../../../App";

//breadcrumb code
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

const EditCourse = () => {
  const context = useContext(MyContext);
  const { setIsHideSidebarAndHeader, setAlertBox } = context;

  useEffect(() => {
    setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  const standards = ["10th", "11th", "12th"];
  const subjects = ["physics", "chemistry", "math"];
  const examTypes = ["JEEMAIN", "NEET", "WBJEE"];
  const chapters = ["Atomic Structure", "States Of Matter"];
  const subTopics = ["Structure of atom", "Equilibirium"];
  const questionTypes = ["muliple choice", "short answer type", "reasoning"];
  const levels = ["easy", "medium", "hard"];
  const marks = ["2", "3", "4"];

  const [name, setName] = useState("");
  const [standard, setStandard] = useState("");
  const [subject, setSubject] = useState("");
  const [examType, setExamType] = useState("");
  const [chapter, setChapter] = useState("");
  const [subTopic, setSubTopic] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [level, setLevel] = useState("");
  const [mark, setMark] = useState("");
  const [assignTime, setAssignTime] = useState("");
  const [testType, setTestType] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setIsLoading(true);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Edit Course Details</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Course"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb label="Edit Course" component="a" href="#" />
          </Breadcrumbs>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="card p-4">
                <h5 className="mb-4">Course Information</h5>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>EXAM NAME</h6>
                      <input
                        type="text"
                        value={name}
                        placeholder="Enter Exam Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>STANDARD</h6>
                      <Select
                        value={standard}
                        onChange={(e) => setStandard(e.target.value)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                        required
                      >
                        <MenuItem value="">
                          <em>Select Standard</em> {/* placeholder */}
                        </MenuItem>
                        {standards.map((std, index) => (
                          <MenuItem key={index} value={std}>
                            {std}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>SUBJECT</h6>
                      <Select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                        required
                      >
                        <MenuItem value="">
                          <em>Select Subject</em> {/* placeholder */}
                        </MenuItem>
                        {subjects.map((sub, index) => (
                          <MenuItem key={index} value={sub}>
                            {sub}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>EXAM TYPE</h6>
                      <Select
                        value={examType}
                        onChange={(e) => setExamType(e.target.value)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                        required
                      >
                        <MenuItem value="">
                          <em>Select Exam Type</em> {/* placeholder */}
                        </MenuItem>
                        {examTypes.map((exam, index) => (
                          <MenuItem key={index} value={exam}>
                            {exam}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>CHAPTER</h6>
                      <Select
                        value={chapter}
                        onChange={(e) => setChapter(e.target.value)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                        required
                      >
                        <MenuItem value="">
                          <em>Select Chapter</em> {/* placeholder */}
                        </MenuItem>
                        {chapters.map((chap, index) => (
                          <MenuItem key={index} value={chap}>
                            {chap}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>SUB TOPIC</h6>
                      <Select
                        value={subTopic}
                        onChange={(e) => setSubTopic(e.target.value)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                        required
                      >
                        <MenuItem value="">
                          <em>Select Sub Topic</em> {/* placeholder */}
                        </MenuItem>
                        {subTopics.map((subt, index) => (
                          <MenuItem key={index} value={subt}>
                            {subt}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>QUESTION TYPE</h6>
                      <Select
                        value={questionType}
                        onChange={(e) => setQuestionType(e.target.value)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                        required
                      >
                        <MenuItem value="">
                          <em>Select Question Type</em> {/* placeholder */}
                        </MenuItem>
                        {questionTypes.map((std, index) => (
                          <MenuItem key={index} value={std}>
                            {std}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>ASSIGN TIME</h6>
                      <input
                        type="text"
                        value={assignTime}
                        placeholder="Enter Assign Time"
                        onChange={(e) => setAssignTime(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>QUESTION LEVEL</h6>
                      <Select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                        required
                      >
                        <MenuItem value="">
                          <em>Select Question Level</em> {/* placeholder */}
                        </MenuItem>
                        {levels.map((std, index) => (
                          <MenuItem key={index} value={std}>
                            {std}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>EXAM TEST TYPE CREATION</h6>
                      <input
                        type="text"
                        value={testType}
                        placeholder="Enter Test Type"
                        onChange={(e) => setTestType(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>MARK CREATION</h6>
                      <Select
                        value={mark}
                        onChange={(e) => setMark(e.target.value)}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100"
                      >
                        <MenuItem value="">
                          <em>Enter Mark Creation Level</em> {/* placeholder */}
                        </MenuItem>
                        {marks.map((std, index) => (
                          <MenuItem key={index} value={std}>
                            {std}
                          </MenuItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4 mt-0">
            <Button
              type="submit"
              className="btn-blue btn-lg btn-big w-100 productSubmit"
            >
              <FaCloudUploadAlt />
              {isLoading === true ? (
                <CircularProgress color="inherit" className="loader" />
              ) : (
                "SAVE"
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditCourse;
