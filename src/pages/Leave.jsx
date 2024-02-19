import React from "react";
// import Annual from '../../public/assets/img/custom/annual.png'
import Image1 from "../avatars/10.png";
import MedicalLeaves from "./leaveProfile/MedicalLeaves";
import CasualLeaves from "./leaveProfile/CasualLeaves";
import AnnualLeaves from "./leaveProfile/AnnualLeaves";
import NotCovering from "./leaveProfile/NotCovering";
import GatePassLeaves from "./leaveProfile/GatePassLeaves";
import CompulsoryLeaves from "./leaveProfile/CompulsoryLeaves";
import ShortLeaves from "../pages/leaveProfile/ShortLeaves";
import HalfDayLeaves from "./leaveProfile/HalfDayLeaves";
import LeaveToLeave from "./leaveProfile/LeaveToLeave";
import MaternityLeaves from "./leaveProfile/MaternityLeaves";

function Leave() {
  return (
    <div>
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="py-3 mb-4 d-flex justify-item-start">
            <span className="text-muted fw-light">Profile/</span> Leave{" "}
          </h4>
          {/* Basic Layout */}
          <div className="row">
            <div className="col card m-2">
              <h4 className="text-center mt-3">Personal Details</h4>
              <div className="row">
                <div className="col mb-3">
                  <div className="mt-2 mr-5 ">
                    <img
                      src={Image1}
                      alt="profile"
                      className="rounded w-100 h-100"
                    />
                  </div>
                </div>
                <div className="col-4 p-0 text-left">
                  <p className="fw-bold mt-3">Name :</p>
                  <h6 className="fw-bold">Department:</h6>
                  <h6 className="fw-bold">Employee Category :</h6>
                  <h6 className="fw-bold">Branch :</h6>
                </div>
                <div className="col-4 text-left">
                  <h6 className="mt-3">Purna Lakshitha</h6>
                  <h6>Mining License</h6>
                  <h6>Standard</h6>
                  <h6>Rathnapura</h6>
                </div>
              </div>
            </div>
            <div className="col card m-2">
              <div className="row">
                <div className="col text-center mt-3">
                  <h4>Contact Details</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-2" />
                <div className="col-1" />
                <div className="col text-left">
                  <h6 className="mt-3">Personal</h6>
                  <h6>Personal</h6>
                  <h6>Email</h6>
                </div>
                <div className="col text-left">
                  <h6 className="mt-3">+94765320069</h6>
                  <h6>+372250786</h6>
                  <h6>purna@gamil.com</h6>
                </div>
                <div className="col" />
              </div>
            </div>
            {/*                        three type of leaves*/}
            <div className="row mt-3">
              <div className="col">
                <div className="nav-align-top mb-4">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <button
                        type="button"
                        className="nav-link active"
                        role="tab"
                        data-bs-toggle="tab"
                        data-bs-target="#navs-top-medical"
                        aria-controls="navs-top-medical"
                        aria-selected="true"
                      >
                        Medical
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="tab"
                        data-bs-target="#navs-top-casual"
                        aria-controls="navs-top-casual"
                        aria-selected="false"
                      >
                        Casual
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="tab"
                        data-bs-target="#navs-top-annual"
                        aria-controls="navs-top-annual"
                        aria-selected="false"
                      >
                        Annual
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="tab"
                        data-bs-target="#navs-top-notCovering"
                        aria-controls="navs-top-notCovering"
                        aria-selected="false"
                      >
                        Not Covering
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="tab"
                        data-bs-target="#navs-top-compulsory"
                        aria-controls="navs-top-compulsory"
                        aria-selected="false"
                      >
                        Compulsory
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="tab"
                        data-bs-target="#navs-top-shortLeave"
                        aria-controls="navs-top-shortLeave"
                        aria-selected="false"
                      >
                        Short Leave
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="tab"
                        data-bs-target="#navs-top-gatePass"
                        aria-controls="navs-top-gatePass"
                        aria-selected="false"
                      >
                        Gate Pass
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="tab"
                        data-bs-target="#navs-top-halfDay"
                        aria-controls="navs-top-halfDay"
                        aria-selected="false"
                      >
                        Half Day
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="tab"
                        data-bs-target="#navs-top-leaveToLeave"
                        aria-controls="navs-top-leaveToLeave"
                        aria-selected="false"
                      >
                        Leave to Leave
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="tab"
                        data-bs-target="#navs-top-maternityLeave"
                        aria-controls="navs-top-maternityLeave"
                        aria-selected="false"
                      >
                        Maternity Leave
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="tabcont">
                    {/*medical section*/}

                    <MedicalLeaves />

                    {/*                                            casual section*/}
                    <CasualLeaves />
                    {/*                                        Annual Section*/}
                    <AnnualLeaves />
                    {/*                                        Not covering Section*/}
                    <NotCovering />

                    {/* compulsory section */}

                    <CompulsoryLeaves />

                    {/*                                        Short leave Section*/}

                    <ShortLeaves />

                    {/*                                        Gate pass Section*/}

                    <GatePassLeaves />

                    {/*                                        HalfDay Section*/}
                    <HalfDayLeaves />
                    {/*                                       Leave to Leave Section*/}
                    <LeaveToLeave />
                    {/*                                       maternity leave Section*/}
                    <MaternityLeaves />
                    {/* maternity end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / Content */}
        
        <div className="content-backdrop fade" />
      </div>
    </div>
  );
}

export default Leave;
