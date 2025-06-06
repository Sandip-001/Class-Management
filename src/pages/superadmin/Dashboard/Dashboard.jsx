import React, { useContext, useEffect, useState } from "react";
import DashboardBox from "./components/DashboardBox";
import { PiStudentBold } from "react-icons/pi";
import { FaMoneyBill, FaUserGroup } from "react-icons/fa6";
import { MdAutoGraph } from "react-icons/md";
import { MyContext } from "../../../App";
import icon from "../../../assets/icon1.png"
import man1 from "../../../assets/man1.png"
import man2 from "../../../assets/man2.png"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Avatar } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { setProgress, setAlertBox, setIsHideSidebarAndHeader } =
    useContext(MyContext);

  useEffect(() => {
    setIsHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setProgress(20);
    setProgress(100);
  }, [setProgress]);

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "837,000",
        data: [30, 40, 28, 50, 40, 60, 35, 55, 45, 70, 65, 75],
        borderColor: "#5D5FEF",
        backgroundColor: "rgba(93, 95, 239, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "500,000",
        data: [20, 30, 22, 35, 25, 40, 30, 42, 32, 50, 48, 55],
        borderColor: "#C998FF",
        backgroundColor: "rgba(201, 152, 255, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
        grid: {
          drawBorder: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };

  const admins = [
    { image: man1, name: "Jane Cooper", subject: "Physics", time: "12.34 pm" },
    { image: man2, name: "Kristin Watson", subject: "Chemistry", time: "12.34 pm" },
    { image: man1, name: "Jenny Wilson", subject: "Physics", time: "12.34 pm" },
    { image: man2, name: "Brooklyn Sim", subject: "Math", time: "12.34 pm" },
    { image: man1, name: "Darrell Steward", subject: "Life Science", time: "12.34 pm" },
    { image: man2, name: "Jane Cooper", subject: "Physics", time: "12.34 pm" },
    { image: man1, name: "Kristin Watson", subject: "Chemistry", time: "12.34 pm" },
    { image: man2, name: "Jenny Wilson", subject: "Physics", time: "12.34 pm" },
    { image: man1, name: "Brooklyn Sim", subject: "Math", time: "12.34 pm" },
  ];

  return (
    <div className="right-content w-100">
      <div className="row dashboardBoxWrapperRow">
        <div className="col-md-12">
          <div className="dashboardBoxWrapper d-flex ">
            <DashboardBox
              color={"rgba(248, 227, 141, 1)"}
              icon={<FaUserGroup />}
              grow={true}
              name={"Admin"}
              length={23}
              bgColor={"rgba(254, 197, 61, 1)"}
            />
            <DashboardBox
              color={"rgba(226, 216, 252, 1)"}
              icon={<PiStudentBold />}
              grow={true}
              name={"Student"}
              length={34}
              bgColor={"rgba(130, 128, 255, 1)"}
            />
            <DashboardBox
              color={"rgba(252, 216, 227, 1)"}
              icon={<FaMoneyBill />}
              grow={true}
              name={"Amount Received"}
              length={75}
              bgColor={"rgba(217, 74, 76, 1)"}
            />
            <DashboardBox
              color={"rgba(216, 252, 229, 1)"}
              icon={<MdAutoGraph />}
              grow={true}
              name={"Amount Balance"}
              length={51}
              bgColor={"rgba(74, 217, 145, 1)"}
            />
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 col-12 mb-4">
          <div className="p-3 shadow rounded-4 h-100 bg-white">
            <h6 className="fw-semibold mb-3">Admin Registration</h6>
            <Line data={chartData} options={chartOptions} height={300} />
          </div>
        </div>

        <div className="col-md-4 col-12 mb-4">
          <div className="p-3 shadow rounded-4 bg-white">
            <h6 className="fw-semibold mb-3">Admin</h6>
            <ul className="list-unstyled m-0">
              {admins.map((admin, idx) => (
                <li
                  key={idx}
                  className="d-flex align-items-center justify-content-between py-2 border-bottom"
                >
                  <div className="d-flex align-items-center gap-2">
                    <Avatar src={admin.image} alt={admin.name} />
                    <div>
                      <div className="fw-semibold">{admin.name}</div>
                      <div className="text-muted small">{admin.subject}</div>
                    </div>
                  </div>
                  <div className="text-muted small">{admin.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 col-12 mb-3">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-4 rounded-4 shadow bg-light h-100">
            <div className="text-start mb-3 mb-md-0">
              <h5 className="fw-bold mb-2">
                Welcome, to Class management
                <br />
                super admin dashboard
              </h5>
              <p className="text-muted mb-0">
                Manage your school operations with ease. Stay updated on
                academics, attendance, finances, and more—all in one place.
                Let’s keep shaping a brighter future together!
              </p>
            </div>
            <div className="d-none d-md-block">
              <img
                src={icon}
                alt="dashboard illustration"
                style={{ maxWidth: "250px", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="col-md-4 col-12 mb-3">
          <div className="p-4 rounded-4 shadow bg-white h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-semibold mb-0">Fee Status</h6>
              <i className="bi bi-three-dots-vertical"></i>
            </div>
            <div className="d-flex justify-content-between align-items-center border rounded-3 p-3 mb-2">
              <div className="fw-bold fs-5">1,335</div>
              <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                🟢 Paid
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center border rounded-3 p-3">
              <div className="fw-bold fs-5">4,366</div>
              <span className="badge bg-warning-subtle text-warning px-3 py-2 rounded-pill">
                🟡 Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
