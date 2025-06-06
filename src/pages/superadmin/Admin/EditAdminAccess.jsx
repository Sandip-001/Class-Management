import React, { useContext, useEffect, useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  Button,
  CircularProgress,
  FormControlLabel,
  Rating,
  Switch,
} from "@mui/material";
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

const EditAdminAccess = () => {
  const context = useContext(MyContext);
  const { setIsHideSidebarAndHeader, setAlertBox } = context;

  useEffect(() => {
    setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  const [isAccessEnabled, setIsAccessEnabled] = useState(true);
  const [validationDate, setValidationDate] = useState(null);

  const instituteList = ["Gokuldham Institute", "Bright Future Academy"];
  const instituteIds = ["2", "3", "4", "5"];
  const subjects = ["physics", "chemistry", "math"];
  const examTypes = ["JEEMAIN", "NEET", "WBJEE"];
  const standards = ["8th", "9th", "10th", "11th", "12th"];

  const today = new Date();

  const [standardList, setStandardList] = useState([]);
  const [subjectsList, setSubjectsList] = useState([]);
  const [examTypesList, setExamTypesList] = useState([]);

  const [instituteName, setInstituteName] = useState("");
  const [instituteId, setInstituteId] = useState("");
  const [standard, setStandard] = useState("");
  const [subject, setSubject] = useState("");
  const [examType, setExamType] = useState("");
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [onlineTest, setOnlineTest] = useState("");
  const [offlineTest, setOfflineTest] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // Handlers to add items
  const handleAddStandard = () => {
    if (standard.trim() && !standardList.includes(standard)) {
      setStandardList([...standardList, standard]);
      setStandard("");
    }
  };

  const handleAddSubject = () => {
    if (subject && !subjectsList.includes(subject)) {
      setSubjectsList([...subjectsList, subject]);
      setSubject("");
    }
  };

  const handleAddExamType = () => {
    if (examType && !examTypesList.includes(examType)) {
      setExamTypesList([...examTypesList, examType]);
      setExamType("");
    }
  };

  // Handlers to remove items
  const handleRemoveItem = (index, listSetter, list) => {
    const newList = list.filter((_, i) => i !== index);
    listSetter(newList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setIsLoading(true);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="right-content w-100">
          <div className="card shadow border-0 w-100 flex-row p-4">
            <h5 className="mb-0">Edit Product Access Details</h5>
            <Breadcrumbs
              aria-label="breadcrumb"
              className="ms-auto breadcrumbs_"
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={isAccessEnabled}
                    onChange={() => setIsAccessEnabled(!isAccessEnabled)}
                    color="success"
                  />
                }
                label={isAccessEnabled ? "Enabled" : "Blocked"}
              />
            </Breadcrumbs>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="card p-4">
                  <h5 className="mb-4">Basic Information</h5>

                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <h6>INSTITUTE NAME</h6>
                        <Select
                          value={instituteName}
                          onChange={(e) => setInstituteName(e.target.value)}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          className="w-100"
                          required
                        >
                          <MenuItem value="">
                            <em>Select Institute Name</em> {/* placeholder */}
                          </MenuItem>
                          {instituteList.map((item, index) => (
                            <MenuItem key={index} value={item}>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <h6>INSTITUTE ID</h6>
                        <Select
                          value={instituteId}
                          onChange={(e) => setInstituteId(e.target.value)}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          className="w-100"
                          required
                        >
                          <MenuItem value="">
                            <em>Select Institute Id</em> {/* placeholder */}
                          </MenuItem>
                          {instituteIds.map((item, index) => (
                            <MenuItem key={index} value={item}>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <h6>EXAM COVER</h6>
                        <div className="d-flex align-items-center gap-2">
                          <Select
                            value={examType}
                            onChange={(e) => setExamType(e.target.value)}
                            displayEmpty
                            className="w-100"
                          >
                            <MenuItem value="">
                              <em>Select Exam Cover</em>
                            </MenuItem>
                            {examTypes.map((exam, index) => (
                              <MenuItem key={index} value={exam}>
                                {exam}
                              </MenuItem>
                            ))}
                          </Select>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={handleAddExamType}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="mt-2 d-flex flex-wrap gap-2">
                          {examTypesList.map((exam, index) => (
                            <span
                              key={index}
                              className="badge bg-warning text-dark"
                            >
                              {exam}{" "}
                              <IoCloseSharp
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  handleRemoveItem(
                                    index,
                                    setExamTypesList,
                                    examTypesList
                                  )
                                }
                              />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <h6>SUBJECT</h6>
                        <div className="d-flex align-items-center gap-2">
                          <Select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            displayEmpty
                            className="w-100"
                          >
                            <MenuItem value="">
                              <em>Select Subject</em>
                            </MenuItem>
                            {subjects.map((sub, index) => (
                              <MenuItem key={index} value={sub}>
                                {sub}
                              </MenuItem>
                            ))}
                          </Select>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={handleAddSubject}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="mt-2 d-flex flex-wrap gap-2">
                          {subjectsList.map((sub, index) => (
                            <span key={index} className="badge bg-success">
                              {sub}{" "}
                              <IoCloseSharp
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  handleRemoveItem(
                                    index,
                                    setSubjectsList,
                                    subjectsList
                                  )
                                }
                              />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <h6>STANDARD</h6>
                        <div className="d-flex align-items-center gap-2">
                          <Select
                            value={standard}
                            onChange={(e) => setStandard(e.target.value)}
                            displayEmpty
                            className="w-100"
                          >
                            <MenuItem value="">
                              <em>Select Standard</em>
                            </MenuItem>
                            {standards.map((item, index) => (
                              <MenuItem key={index} value={item}>
                                {item}
                              </MenuItem>
                            ))}
                          </Select>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={handleAddStandard}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="mt-2 d-flex flex-wrap gap-2">
                          {standardList.map((stand, index) => (
                            <span
                              key={index}
                              className="badge bg-warning text-dark"
                            >
                              {stand}{" "}
                              <IoCloseSharp
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  handleRemoveItem(
                                    index,
                                    setStandardList,
                                    standardList
                                  )
                                }
                              />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <h6>SOFTWARE VALIDATION</h6>
                        <DatePicker
                          value={validationDate}
                          minDate={today}
                          onChange={(newValue) => setValidationDate(newValue)}
                          slotProps={{
                            textField: { fullWidth: true },
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <h6>NO OF STUDENTS</h6>
                        <input
                          type="number"
                          value={numberOfStudents}
                          placeholder="Enter Number Of Students"
                          onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            if (value >= 0 || e.target.value === "")
                              setNumberOfStudents(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card p-4">
                  <h5 className="mb-4">Test Information</h5>

                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <h6>NO OF TEST ONLINE</h6>
                        <input
                          type="number"
                          value={onlineTest}
                          placeholder="Enter Number"
                          onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            if (value >= 0 || e.target.value === "")
                              setOnlineTest(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <h6>NO OF TEST OFFLINE</h6>
                        <input
                          type="number"
                          value={offlineTest}
                          placeholder="Enter Number"
                          onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            if (value >= 0 || e.target.value === "")
                              setOfflineTest(e.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>

                    <br />

                    <Button
                      type="submit"
                      className="btn-blue btn-lg w-100 d-flex justify-content-center align-items-center gap-2 mt-3"
                    >
                      <FaCloudUploadAlt />
                      {isLoading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : (
                        "PUBLISH AND VIEW"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </LocalizationProvider>
    </>
  );
};

export default EditAdminAccess;