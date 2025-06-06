import React, { useContext, useEffect, useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";

import { Button, CircularProgress, FormControlLabel, Switch } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MyContext } from "../../../App";
import CustomSelect from "../../../components/CustomSelect";

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

const EditNotification = () => {
  const context = useContext(MyContext);
  const { setIsHideSidebarAndHeader, setAlertBox } = context;

  useEffect(() => {
    setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  const notificationTypes = [
    "Payment_Received",
    "Question_Alert",
    "Result_Status",
  ];

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [notificationType, setNotificationType] = useState("");
  const [isAccessEnabled, setIsAccessEnabled] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setIsLoading(true);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Edit Notification</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Notification"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb label="Edit Notification" component="a" href="#" />
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
                      <h6>NAME</h6>
                      <input
                        type="text"
                        value={name}
                        placeholder="Enter Notification Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <h6>TITLE</h6>
                      <input
                        type="text"
                        value={title}
                        placeholder="Enter Notification Title"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>BODY</h6>
                      <textarea
                        rows={5}
                        cols={10}
                        value={body}
                        placeholder="Enter Notification Body"
                        onChange={(e) => setBody(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>TYPE</h6>
                      <CustomSelect
                        value={notificationType}
                        onChange={(e) => setNotificationType(e.target.value)}
                        options={notificationTypes}
                        label="Select Notification Type"
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="btn-blue btn-lg w-100 d-flex justify-content-center align-items-center gap-2 mb-3"
          >
            <FaCloudUploadAlt />
            {isLoading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "PUBLISH AND VIEW"
            )}
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditNotification;