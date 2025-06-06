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

const AddBranchBatchDivision = () => {
  const context = useContext(MyContext);
  const { setIsHideSidebarAndHeader, setAlertBox } = context;

  useEffect(() => {
    setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  const instituteList = ["Gokuldham Institute", "Bright Future Academy"];

  const [instituteName, setInstituteName] = useState("");
  const [adminId, setAdminId] = useState("");
  const [branchName, setBranchName] = useState("");
  const [branchCode, setBranchCode] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [batchName, setBatchName] = useState("");
  const [branchOn, setBranchOn] = useState("");
  const [description, setDescription] = useState("");
  const [divisionName, setDivisionName] = useState("");
  const [batchOn, setBatchOn] = useState("");
  const [divisionDescription, setDivisionDescription] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setIsLoading(true);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Add Branch/Batch/Division</h5>
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
                <h5 className="mb-4">BRANCH CREATION</h5>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>BRANCH NAME</h6>
                      <input
                        type="text"
                        value={branchName}
                        placeholder="Enter Branch Name"
                        onChange={(e) => setBranchName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
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
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>BRANCH CODE</h6>
                      <input
                        type="text"
                        value={branchCode}
                        placeholder="Enter Branch Code"
                        onChange={(e) => setBranchCode(e.target.value)}
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
                <h5 className="mb-4">BATCH CREATION</h5>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>BATCH NAME</h6>
                      <input
                        type="text"
                        value={batchName}
                        placeholder="Enter Batch Name"
                        onChange={(e) => setBatchName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>BRANCH ON</h6>
                      <input
                        type="text"
                        value={branchOn}
                        placeholder="Enter Branch On"
                        onChange={(e) => setBranchOn(e.target.value)}
                        required
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

           <div className="row">
            <div className="col-md-12">
              <div className="card p-4">
                <h5 className="mb-4">DIVISION CREATION</h5>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>DIVISION NAME</h6>
                      <input
                        type="text"
                        value={divisionName}
                        placeholder="Enter Division Name"
                        onChange={(e) => setDivisionName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>BATCH ON</h6>
                      <input
                        type="text"
                        value={batchOn}
                        placeholder="Enter Batch On"
                        onChange={(e) => setBatchOn(e.target.value)}
                        required
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
                        value={divisionDescription}
                        onChange={(e) => setDivisionDescription(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4 mt-0">
              <Button
                type="submit"
                className="btn-blue btn-lg w-100 d-flex justify-content-center align-items-center gap-2"
              >
                <FaCloudUploadAlt />
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  "PUBLISH AND VIEW"
                )}
              </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBranchBatchDivision;
