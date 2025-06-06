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

const EditAdmin = () => {
  const context = useContext(MyContext);
  const { setIsHideSidebarAndHeader, setAlertBox } = context;

  useEffect(() => {
    setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  const subjects = ["physics", "chemistry", "math"];
  const examTypes = ["JEEMAIN", "NEET", "WBJEE"];

  const [ownerNames, setOwnerNames] = useState([]);
  const [subjectsList, setSubjectsList] = useState([]);
  const [examTypesList, setExamTypesList] = useState([]);

  const [name, setName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [subject, setSubject] = useState("");
  const [examType, setExamType] = useState("");
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [numberOfBranch, setNumberOfBranch] = useState(0);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adminId, setAdminId] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [instituteImages, setInstituteImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setInstituteImages((prevImages) => [...prevImages, ...files]);
  };

  const removeImage = (index, event) => {
    event.preventDefault();
    setInstituteImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
  };

  // Handlers to add items
  const handleAddOwner = () => {
    if (ownerName.trim() && !ownerNames.includes(ownerName)) {
      setOwnerNames([...ownerNames, ownerName]);
      setOwnerName("");
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
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Edit Admin Details</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Admin"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb label="Edit Admin" component="a" href="#" />
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
                      <input
                        type="text"
                        value={name}
                        placeholder="Enter Institute Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>OWNER NAME</h6>
                      <div className="d-flex align-items-center gap-2">
                        <input
                          type="text"
                          value={ownerName}
                          placeholder="Enter Owner Name"
                          onChange={(e) => setOwnerName(e.target.value)}
                        />
                        <Button
                          variant="contained"
                          size="small"
                          onClick={handleAddOwner}
                        >
                          Add
                        </Button>
                      </div>
                      <div className="mt-2 d-flex flex-wrap gap-2">
                        {ownerNames.map((owner, index) => (
                          <span key={index} className="badge bg-primary">
                            {owner}{" "}
                            <IoCloseSharp
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                handleRemoveItem(
                                  index,
                                  setOwnerNames,
                                  ownerNames
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

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>TOTAL BRANCH</h6>
                      <input
                        type="number"
                        value={numberOfBranch}
                        placeholder="Enter Total Branch Number"
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          if (value >= 0 || e.target.value === "")
                            setNumberOfBranch(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>UNIQUE ADMIN ID</h6>
                      <input
                        type="text"
                        value={adminId}
                        placeholder="Enter Unique Admin Id"
                        onChange={(e) => setAdminId(e.target.value)}
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
                <h5 className="mb-4">Contact Information</h5>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>PHONE NUMBER</h6>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter Phone Number"
                        maxLength="10"
                        value={phone}
                        onChange={(e) => {
                          const numericValue = e.target.value.replace(
                            /\D/g,
                            ""
                          ); // Remove non-numeric characters
                          setPhone(numericValue.slice(0, 10)); // Limit to 10 digits
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>EMAIL</h6>
                      <input
                        type="email"
                        value={email}
                        placeholder="Enter Email id"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>ADDRESS</h6>
                      <input
                        type="text"
                        value={area}
                        placeholder="Enter Area and Street"
                        onChange={(e) => setArea(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        value={city}
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        value={district}
                        placeholder="District"
                        onChange={(e) => setDistrict(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Pin Code"
                        maxLength="10"
                        value={pincode}
                        onChange={(e) => {
                          const numericValue = e.target.value.replace(
                            /\D/g,
                            ""
                          ); // Remove non-numeric characters
                          setPincode(numericValue.slice(0, 6)); // Limit to 6 digits
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        value={state}
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)}
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
                <h5 className="mb-4">Login Details</h5>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>USER NAME</h6>
                      <input
                        type="text"
                        value={username}
                        placeholder="Enter User Name"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>PASSWORD</h6>
                      <input
                        type="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4 mt-0">
            <div className="imageUploadSec">
              <h5 className="mb-4 fw-bold text-primary">
                Upload Institute Images
              </h5>

              <div className="imgUploadBox d-flex flex-wrap gap-3">
                {instituteImages.map((img, index) => (
                  <div key={index} className="uploadBox">
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`Institute ${index}`}
                      className="w-100 h-100 object-fit-cover rounded"
                    />
                    <button
                      className="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-circle"
                      onClick={(event) => removeImage(index, event)}
                    >
                      <IoCloseSharp />
                    </button>
                  </div>
                ))}

                <label className="uploadBox cursor-pointer">
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    multiple
                    accept="image/*"
                  />
                  <div className="info text-center">
                    <FaRegImages />
                    <h6 className="mt-2">Upload Images</h6>
                  </div>
                </label>
              </div>

              <br />

              <Button
                type="submit"
                className="btn-blue btn-lg w-100 d-flex justify-content-center align-items-center gap-2"
              >
                <FaCloudUploadAlt />
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  "SAVE"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditAdmin;