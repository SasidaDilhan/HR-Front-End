import React from "react";
import Style from '../css/Attendance.module.css'
import Img1 from '../avatars/2.png'

function Attendance() {
  return (
    <div>
      
            {/* Content wrapper */}
            <div className="content-wrapper ">
              {/* Content */}
              <div className="container-xxl flex-grow-1">
                <h4 className="py-3 mb-4">Attendance</h4>
                {/*              Content*/}
               <div className="bg-white p-4 rounded">
               <div
                  className="input-group input-group-merge mb-5"
                  id="attendanceSearch"
                >
                  <span className="input-group-text" id="basic-addon-search31">
                    <i className="bx bx-search" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="basic-addon-search31"
                  />
                </div>
                <div className="row" id="personal">
                  <div className="col card m-2">
                    <h5 className="card-title" style={{ marginTop: 10 }}>
                      Personal Details
                    </h5>
                    <div className="row">
                      <div className="col">
                        <div style={{ marginBottom: 20, marginRight: 20 }}>
                          <img
                            src={Img1}
                            alt="profile"
                            className="rounded w-100 h-100"
                          />
                          <p id="userId">ID - 15567</p>
                        </div>
                      </div>
                      <div className="col-4 p-0" style={{ marginTop: "-15px" }}>
                        <div>
                          <p style={{ marginTop: 20 }}>Name :</p>
                        </div>
                        <div>
                          <p>Department:</p>
                        </div>
                        <div>
                          <p>Category :</p>
                        </div>
                        <div>
                          <p>Branch :</p>
                        </div>
                      </div>
                      <div
                        className="col-4 opacity-75"
                        style={{ marginTop: 9 }}
                        id="profile"
                      >
                        <p>Purna Lakshitha</p>
                        <p>Minning License</p>
                        <p>Standard</p>
                        <p>Rathnapura</p>
                      </div>
                    </div>
                  </div>
                  <div className="col card m-2">
                    <div className="row">
                      <div className=" " style={{ marginTop: 12 }}>
                        <h5 className="card-title">Contact Details</h5>
                        <div className=" row">
                          <div className="d-flex justify-content-center mt-3">
                            <div
                              className="col-4"
                              style={{ textAlign: "left" }}
                            >
                              <p>Personal :</p>
                              <p>Office :</p>
                              <p>Email :</p>
                            </div>
                            <div
                              className="col-4 opacity-75"
                              style={{ textAlign: "left" }}
                            >
                              <p>+94765320069</p>
                              <p>+372250786</p>
                              <p>purna@gamil.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-1" id="date">
                  <div className="mb-3 w-20 ">
                    <div className="">
                      From
                      <input
                        className="form-control btn-outline-primary dropdown-toggle"
                        type="date"
                        defaultValue="2021-06-18"
                        id="html5-date-input"
                      />
                    </div>
                  </div>
                  <div className="mb-3 w-20 ">
                    <div className="">
                      To
                      <input
                        className="form-control btn-outline-primary dropdown-toggle"
                        type="date"
                        defaultValue="2021-06-18"
                        id="html5-date-input"
                      />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="table-responsive text-nowrap">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Check-In</th>
                          <th>Check-Out</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className="table-border-bottom-0">
                        <tr>
                          <td>2024/01/07</td>
                          <td>08.30</td>
                          <td>16.35</td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div className="dropdown-menu">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="bx bx-edit-alt me-1" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="uil uil-save me-1" /> Save
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2024/01/08</td>
                          <td>08.40</td>
                          <td>16.30</td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div className="dropdown-menu">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="bx bx-edit-alt me-1" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="uil uil-save me-1" /> Save
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2024/01/09</td>
                          <td>08.50</td>
                          <td>16.35</td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div className="dropdown-menu">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="bx bx-edit-alt me-1" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="uil uil-save me-1" /> Save
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2024/01/10</td>
                          <td>08.00</td>
                          <td>16.35</td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </button>
                              <div className="dropdown-menu">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="bx bx-edit-alt me-1" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="uil uil-save me-1" /> Save
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
               
                {/*              Content*/}
              </div>
              <div className="content-backdrop fade" />
               </div>
            </div>
            {/* Content wrapper */}
          </div>
       
  );
}

export default Attendance;
