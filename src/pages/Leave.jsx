import React from 'react'
// import Annual from '../../public/assets/img/custom/annual.png'
import Image1 from '../avatars/10.png'
import Image2 from '../avatars/11.png'

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
                    <div
                      className="tab-pane fade show active"
                      id="navs-top-medical"
                      role="tabpanel"
                    >
                      <div className="row mb-4 d-flex gap-2">
                        <h4>Medical Leaves</h4>
                        <div className="col">
                          <div className="">
                            {/* Card content for Medical Leaves */}
                            <div className="content-left">
                              {/* <span>All Leaves</span> */}
                              <img
                                className="h-px-100 w-px-100 rounded overflow-hidden "
                                id="medicalimage"
                                src={Image2}
                                alt=''
                              />
                              {/* <p class="mb-0">Total Leaves</p> */}
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card h-px-100">
                            {/* Card content for another Medical Leaves card */}
                            <div className="d-flex align-items-start justify-content-between m-3">
                              <div className="content-left">
                                <div className="d-flex align-items-end mt-2">
                                  <h4 className="mb-0 me-2">02 Days </h4>
                                </div>
                                <span>Taken</span>
                              </div>
                              <div className="avatar">
                                <span className="avatar-initial rounded bg-label-danger">
                                  <i className="bx bx-user-check bx-sm" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-4">
                          <div className="card h-px-100">
                            {/* Card content for another Medical Leaves card */}
                            <div className="d-flex align-items-start justify-content-between m-3">
                              <div className="content-left">
                                <div className="d-flex align-items-end mt-2">
                                  <h4 className="mb-0 me-2">05 Days </h4>
                                </div>
                                <span>Remaining</span>
                                {/*                                        <p class="mb-0">Last week analytics </p>*/}
                              </div>
                              <div className="avatar">
                                <span className="avatar-initial rounded bg-label-danger">
                                  <i className="bx bx-user-check bx-sm" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Filter item card */}
                      <div className="col-md-12 card mb-4">
                        <div className="card-body">
                          {/* Content for the filter item card */}
                          <div className="card-body">
                            <div className="row">
                              <div className="col-5">
                                <div className="mb-3 row">
                                  <label
                                    htmlFor="medicalid"
                                    className="form-label"
                                  >
                                    Date
                                  </label>
                                  <div className="col-md-8">
                                    <input
                                      className="form-control"
                                      type="date"
                                      defaultValue="2021-06-18"
                                      id="medicalid"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-5">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleFormControlSelect1"
                                    className="form-label"
                                  >
                                    Example select
                                  </label>
                                  <select
                                    className="form-select"
                                    id="exampleFormControlSelect1"
                                    aria-label="Default select example"
                                  >
                                    <option selected="">
                                      Open this select menu
                                    </option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-2">
                                <button
                                  type="button"
                                  className="btn btn-primary mt-4 "
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="ms-3">Results : 4 rows found</div>
                        </div>
                      </div>
                      {/* Table of leaves */}
                      <div className="col-md-12 card">
                        <div className="card-body">
                          {/* Content for the table of leaves */}
                          {/*                            Table of leaves*/}
                          <div className="table-responsive text-nowrap">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>From</th>
                                  <th>To</th>
                                  <th>Reason</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody className="table-border-bottom-0 ">
                                <tr>
                                  <td>
                                    <span className="fw-medium">
                                      2022/03/31
                                    </span>
                                  </td>
                                  <td>2022/04/31</td>
                                  <td>
                                    <div>
                                      <span className="fw-medium">Fever</span>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="badge bg-label-primary me-1">
                                      Accept
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="fw-medium">
                                      2022/03/31
                                    </span>
                                  </td>
                                  <td>2022/04/31</td>
                                  <td>
                                    <div>
                                      <span className="fw-medium">wedding</span>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="badge bg-label-danger me-1">
                                      Reject
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="fw-medium">
                                      2022/03/31
                                    </span>
                                  </td>
                                  <td>2022/04/31</td>
                                  <td>
                                    <div>
                                      <span className="fw-medium">
                                        Goto school
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="badge bg-label-primary me-1">
                                      Accept
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*                                            casual section*/}
                    <div
                      className="tab-pane fade "
                      id="navs-top-casual"
                      role="tabpanel"
                    >
                      <div className="row mb-4 d-flex gap-2">
                        <h4>Casual Leaves</h4>
                        <div className="col">
                          <div className="">
                            {/* Card content for Medical Leaves */}
                            <div className="content-left">
                              {/* <span>All Leaves</span> */}
                              <img
                                className="h-px-100 w-px-100 rounded overflow-hidden "
                                id="casualimage"
                                src="assets/img/custom/casual.png"
                                alt="casual Imagej"
                              />
                              {/* <p class="mb-0">Total Leaves</p> */}
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card h-px-100">
                            {/* Card content for another Medical Leaves card */}
                            <div className="d-flex align-items-start justify-content-between m-3">
                              <div className="content-left">
                                <div className="d-flex align-items-end mt-2">
                                  <h4 className="mb-0 me-2">02 Days </h4>
                                </div>
                                <span>Taken</span>
                              </div>
                              <div className="avatar">
                                <span className="avatar-initial rounded bg-label-danger">
                                  <i className="bx bx-user-check bx-sm" />
                                </span>
                              </div>
                            </div>
                          </div>
                         
                        </div>
                        <div className="col-sm-6 col-xl-4">
                          <div className="card h-px-100">
                            {/* Card content for another Medical Leaves card */}
                            <div className="d-flex align-items-start justify-content-between m-3">
                              <div className="content-left">
                                <div className="d-flex align-items-end mt-2">
                                  <h4 className="mb-0 me-2">05 Days </h4>
                                </div>
                                <span>Remaining</span>
                                {/*                                        <p class="mb-0">Last week analytics </p>*/}
                              </div>
                              <div className="avatar">
                                <span className="avatar-initial rounded bg-label-danger">
                                  <i className="bx bx-user-check bx-sm" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Filter item card */}
                      <div className="col-md-12 card mb-4">
                        <div className="card-body">
                          {/* Content for the filter item card */}
                          <div className="card-body">
                            <div className="row">
                              <div className="col-5">
                                <div className="mb-3 row">
                                  <label
                                    htmlFor="casualid"
                                    className="form-label"
                                  >
                                    Date
                                  </label>
                                  <div className="col-md-8">
                                    <input
                                      className="form-control"
                                      type="date"
                                      defaultValue="2021-06-18"
                                      id="casualid"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-5">
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleFormControlSelect1"
                                    className="form-label"
                                  >
                                    Example select
                                  </label>
                                  <select
                                    className="form-select"
                                    id="exampleFormControlSelectcasual"
                                    aria-label="Default select example"
                                  >
                                    <option selected="">
                                      Open this select menu
                                    </option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-2">
                                <button
                                  type="button"
                                  className="btn btn-primary mt-4 "
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="ms-3">Results : 4 rows found</div>
                        </div>
                      </div>
                      {/* Table of leaves */}
                      <div className="col-md-12 card">
                        <div className="card-body">
                          {/* Content for the table of leaves */}
                          {/*                            Table of leaves*/}
                          <div className="table-responsive text-nowrap">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>From</th>
                                  <th>To</th>
                                  <th>Reason</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody className="table-border-bottom-0">
                                <tr>
                                  <td>
                                    <span className="fw-medium">
                                      2022/03/31
                                    </span>
                                  </td>
                                  <td>2022/04/31</td>
                                  <td>
                                    <div>
                                      <span className="fw-medium">Fever</span>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="badge bg-label-primary me-1">
                                      Accept
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="fw-medium">
                                      2022/03/31
                                    </span>
                                  </td>
                                  <td>2022/04/31</td>
                                  <td>
                                    <div>
                                      <span className="fw-medium">wedding</span>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="badge bg-label-danger me-1">
                                      Reject
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="fw-medium">
                                      2022/03/31
                                    </span>
                                  </td>
                                  <td>2022/04/31</td>
                                  <td>
                                    <div>
                                      <span className="fw-medium">
                                        Goto school
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="badge bg-label-primary me-1">
                                      Accept
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*                                        Annual Section*/}
                    <div
                      className="tab-pane fade "
                      id="navs-top-annual"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col">
                          <div className="card m-2 row ">
                            <div className="col">
                              <h4>Annual Leaveeeeeeeeeeeee</h4>
                            </div>
                            <div className="row mb-3">
                              <div className="col-3 text-center">
                                <div>
                                  <img
                                    // src={Annual}
                                    
                                    className="rounded w-px-100 h-px-100"
                                    alt="annualimage"
                                  />
                                </div>
                              </div>
                              <div className="col-2 text-center mt-3 ">
                                <div>
                                  <h2>05/07 Days</h2>
                                </div>
                              </div>
                              <div className="col-6 text-center mt-3">
                                <div>
                                  <h2>02 leave Already taken</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col">
                              <div className="mb-3 row">
                                <label
                                  htmlFor="annualid"
                                  className="form-label"
                                >
                                  Date
                                </label>
                                <div className="col-md-10">
                                  <input
                                    className="form-control"
                                    type="date"
                                    defaultValue="2021-06-18"
                                    id="annualid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3">
                                <label
                                  htmlFor="annualid"
                                  className="form-label"
                                >
                                  Sort by Status
                                </label>
                                <select
                                  className="form-select"
                                  id="annualselect"
                                  aria-label="Default select example"
                                >
                                  <option selected="">
                                    Open this select menu
                                  </option>
                                  <option value={1}>Accept</option>
                                  <option value={2}>Reject</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-2 text-center mt-4">
                              <div>
                                <h3 className="">Results : 0</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*                            Table of leaves*/}
                      <div className="table-responsive text-nowrap">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>From</th>
                              <th>To</th>
                              <th>Reason</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>2022/04/31</td>
                              <td>
                                <div>
                                  <span className="fw-medium">Fever</span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Accept
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>2022/04/31</td>
                              <td>
                                <div>
                                  <span className="fw-medium">wedding</span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-danger me-1">
                                  Reject
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>2022/04/31</td>
                              <td>
                                <div>
                                  <span className="fw-medium">Goto school</span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Accept
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/*                                        Not covering Section*/}
                    <div
                      className="tab-pane fade "
                      id="navs-top-notCovering"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col">
                          <div className="card m-2 row ">
                            <div className="col">
                              <h4>Annual Leave</h4>
                            </div>
                            <div className="row mb-3">
                              <div className="col-3 text-center">
                                <div>
                                  <img
                                    src="assets/img/custom/notcovering.png"
                                    className="rounded w-px-100 h-px-100"
                                    alt='notcovering'
                                  />
                                </div>
                              </div>
                              <div className="col-2 text-center mt-3 ">
                                <div>
                                  <h2>00/02 Days</h2>
                                </div>
                              </div>
                              <div className="col-6 text-center mt-3">
                                <div>
                                  <h2>02 leave Already taken</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col">
                              <div className="mb-3 row">
                                <label
                                  htmlFor="annualid"
                                  className="form-label"
                                >
                                  Date
                                </label>
                                <div className="col-md-10">
                                  <input
                                    className="form-control"
                                    type="date"
                                    defaultValue="2021-06-18"
                                    id="notcoveringid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3">
                                <label
                                  htmlFor="notcoveringid"
                                  className="form-label"
                                >
                                  Sort by Status
                                </label>
                                <select
                                  className="form-select"
                                  id="notcoveringselect"
                                  aria-label="Default select example"
                                >
                                  <option selected="">
                                    Open this select menu
                                  </option>
                                  <option value={1}>Accept</option>
                                  <option value={2}>Reject</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-2 text-center mt-4">
                              <div>
                                <h3 className="">Results : 0</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*                            Table of leaves*/}
                      <div className="table-responsive text-nowrap">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>In Time</th>
                              <th>Out Time</th>
                              <th>Reason</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>08.45</td>
                              <td>4.30</td>
                              <td>
                                <div>
                                  <span className="fw-medium">wedding</span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-danger me-1">
                                  Reject
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>08.45</td>
                              <td>4.30</td>
                              <td>
                                <div>
                                  <span className="fw-medium">wedding</span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Reject
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>08.45</td>
                              <td>4.30</td>
                              <td>
                                <div>
                                  <span className="fw-medium">fever</span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-danger me-1">
                                  Reject
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/*                                        Short leave Section*/}
                    <div
                      className="tab-pane fade "
                      id="navs-top-shortLeave"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col">
                          <div className="card m-2 row ">
                            <div className="col">
                              <h4>Short Leave</h4>
                            </div>
                            <div className="row mb-3">
                              <div className="col-3 text-center">
                                <div>
                                  <img
                                    src="assets/img/custom/shortleave.png"
                                    className="rounded w-px-100 h-px-100"
                                    alt='shortleave'
                                  />
                                </div>
                              </div>
                              <div className="col-2 text-center mt-3 ">
                                <div>
                                  <h2>3 Hours</h2>
                                </div>
                              </div>
                              <div className="col-6 text-center mt-3">
                                <div>
                                  <h2>02 leave Already taken</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col">
                              <div className="mb-3 row">
                                <label
                                  htmlFor="annualid"
                                  className="form-label"
                                >
                                  Date
                                </label>
                                <div className="col-md-10">
                                  <input
                                    className="form-control"
                                    type="date"
                                    defaultValue="2021-06-18"
                                    id="shortleaveid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3">
                                <label
                                  htmlFor="shortleaveid"
                                  className="form-label"
                                >
                                  Sort by Status
                                </label>
                                <select
                                  className="form-select"
                                  id="shortleaveselect"
                                  aria-label="Default select example"
                                >
                                  <option selected="">
                                    Open this select menu
                                  </option>
                                  <option value={1}>Accept</option>
                                  <option value={2}>Reject</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-2 text-center mt-4">
                              <div>
                                <h3 className="">Results : 0</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*                            Table of leaves*/}
                      <div className="table-responsive text-nowrap">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>In Time</th>
                              <th>Out Time</th>
                              <th>Reason</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>8.30</td>
                              <td>03.00</td>
                              <td>Fever</td>
                              <td>
                                <span className="badge bg-label-danger me-1">
                                  Reject
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>8.30</td>
                              <td>03.00</td>
                              <td>Fever</td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Accept
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>8.30</td>
                              <td>03.00</td>
                              <td>Fever</td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Accept
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/*                                        Gate pass Section*/}
                    <div
                      className="tab-pane fade "
                      id="navs-top-gatePass"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col">
                          <div className="card m-2 row ">
                            <div className="col">
                              <h4>Annual Leave</h4>
                            </div>
                            <div className="row mb-3">
                              <div className="col-3 text-center">
                                <div>
                                  <img
                                    src="assets/img/custom/gatepass.png"
                                    className="rounded w-px-100 h-px-100"
                                    alt='gatepass'
                                  />
                                </div>
                              </div>
                              <div className="col-2 text-center mt-3 ">
                                <div>
                                  <h2>00/02 Days</h2>
                                </div>
                              </div>
                              <div className="col-6 text-center mt-3">
                                <div>
                                  <h2>02 leave Already taken</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col">
                              <div className="mb-3 row">
                                <label
                                  htmlFor="annualid"
                                  className="form-label"
                                >
                                  Date
                                </label>
                                <div className="col-md-10">
                                  <input
                                    className="form-control"
                                    type="date"
                                    defaultValue="2021-06-18"
                                    id="gatepassid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3">
                                <label
                                  htmlFor="gatepassid"
                                  className="form-label"
                                >
                                  Sort by Status
                                </label>
                                <select
                                  className="form-select"
                                  id="gatepassselect"
                                  aria-label="Default select example"
                                >
                                  <option selected="">
                                    Open this select menu
                                  </option>
                                  <option value={1}>Accept</option>
                                  <option value={2}>Reject</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-2 text-center mt-4">
                              <div>
                                <h3 className="">Results : 0</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*                            Table of leaves*/}
                      <div className="table-responsive text-nowrap">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Out Time</th>
                              <th>In Time</th>
                              <th>Reason</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>10.30</td>
                              <td>11.30</td>
                              <td>
                                <div>
                                  <span className="fw-medium">
                                    Go to the home
                                  </span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Accept
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>10.30</td>
                              <td>11.30</td>
                              <td>
                                <div>
                                  <span className="fw-medium">
                                    Go to the home
                                  </span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Accept
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>02.30</td>
                              <td>04.00</td>
                              <td>
                                <div>
                                  <span className="fw-medium">
                                    Go to School
                                  </span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-danger me-1">
                                  Reject
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/*                                        HalfDay Section*/}
                    <div
                      className="tab-pane fade "
                      id="navs-top-halfDay"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col">
                          <div className="card m-2 row ">
                            <div className="col">
                              <h4>Half Day</h4>
                            </div>
                            <div className="row mb-3">
                              <div className="col-3 text-center">
                                <div>
                                  <img
                                    src="assets/img/custom/halfday.png"
                                    className="rounded w-px-100 h-px-100"
                                    alt='halfday'
                                  />
                                </div>
                              </div>
                              <div className="col-2 text-center mt-3 ">
                                <div>
                                  <h2>02/04 Days</h2>
                                </div>
                              </div>
                              <div className="col-6 text-center mt-3">
                                <div>
                                  <h2>02 leave Already taken</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col">
                              <div className="mb-3 row">
                                <label
                                  htmlFor="annualid"
                                  className="form-label"
                                >
                                  Date
                                </label>
                                <div className="col-md-10">
                                  <input
                                    className="form-control"
                                    type="date"
                                    defaultValue="2021-06-18"
                                    id="halfdayid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3">
                                <label
                                  htmlFor="halfdayid"
                                  className="form-label"
                                >
                                  Sort by Status
                                </label>
                                <select
                                  className="form-select"
                                  id="halfdayselect"
                                  aria-label="Default select example"
                                >
                                  <option selected="">
                                    Open this select menu
                                  </option>
                                  <option value={1}>Accept</option>
                                  <option value={2}>Reject</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-2 text-center mt-4">
                              <div>
                                <h3 className="">Results : 0</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*                            Table of leaves*/}
                      <div className="table-responsive text-nowrap">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>In Time</th>
                              <th>Out Time</th>
                              <th>Reason</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>08.30</td>
                              <td>12.45</td>
                              <td>
                                <div>
                                  <span className="fw-medium">
                                    Go to the home
                                  </span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Accept
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>08.30</td>
                              <td>11.30</td>
                              <td>
                                <div>
                                  <span className="fw-medium">
                                    Go to the home
                                  </span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-danger me-1">
                                  Reject
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>10.30</td>
                              <td>11.30</td>
                              <td>
                                <div>
                                  <span className="fw-medium">
                                    Go to the home
                                  </span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Accept
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/*                                       Leave to Leave Section*/}
                    <div
                      className="tab-pane fade "
                      id="navs-top-leaveToLeave"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col">
                          <div className="card m-2 row ">
                            <div className="col">
                              <h4>Leave to Leave</h4>
                            </div>
                            <div className="row mb-3">
                              <div className="col-3 text-center">
                                <div>
                                  <img
                                    src="assets/img/custom/leavetoleave.png"
                                    className="rounded w-px-100 h-px-100"
                                    alt='leavetoleave'
                                  />
                                </div>
                              </div>
                              <div className="col-2 text-center mt-3 ">
                                <div>
                                  <h2>+4 Days</h2>
                                </div>
                              </div>
                              <div className="col-6 text-center mt-3">
                                <div>
                                  <h2>Valid 2024/12/31</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4>Claim Leave</h4>
                          </div>
                          <div className="row mt-3">
                            <div className="col">
                              <div className="mb-3 row">
                                <label
                                  htmlFor="annualid"
                                  className="form-label"
                                >
                                  Date
                                </label>
                                <div className="col-md-10">
                                  <input
                                    className="form-control"
                                    type="date"
                                    defaultValue="2021-06-18"
                                    id="leavetoleaveid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col text-center mt-4">
                              <div>
                                <h3 className="">Results : 0</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*                            Table of leaves*/}
                      <div className="table-responsive text-nowrap">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>In Time</th>
                              <th>Out Time</th>
                              <th>Holiday</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>08.30</td>
                              <td>12.45</td>
                              <td>
                                <div>
                                  <span className="fw-medium">
                                    Go to the home
                                  </span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Accept
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>08.30</td>
                              <td>12.45</td>
                              <td>
                                <div>
                                  <span className="fw-medium">
                                    Go to the home
                                  </span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Accept
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>08.30</td>
                              <td>12.45</td>
                              <td>
                                <div>
                                  <span className="fw-medium">
                                    Go to the home
                                  </span>
                                </div>
                              </td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Accept
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/*                                       maternity leave Section*/}
                    <div
                      className="tab-pane fade "
                      id="navs-top-maternityLeave"
                      role="tabpanel"
                    >
                      <div className="row">
                        <div className="col">
                          <div className="card m-2 row ">
                            <div className="col">
                              <h4>Annual Leave</h4>
                            </div>
                            <div className="row mb-3">
                              <div className="col-3 text-center">
                                <div>
                                  <img
                                    src="assets/img/custom/maternity.png"
                                    className="rounded w-px-100 h-px-100"
                                    alt='maternity'
                                  />
                                </div>
                              </div>
                              <div className="col-2 text-center mt-3 ">
                                <div>
                                  <h2>84 Days</h2>
                                </div>
                              </div>
                              <div className="col-6 text-center mt-3">
                                <div>
                                  <h2 />
                                </div>
                              </div>
                            </div>
                          </div>
                         
                        </div>
                      </div>
                      {/*                            Table of leaves*/}
                      <div className="table-responsive text-nowrap">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>From</th>
                              <th>To</th>
                            </tr>
                          </thead>
                          <tbody className="table-border-bottom-0">
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>2024/04/31</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>2024/04/31</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="fw-medium">2022/03/31</span>
                              </td>
                              <td>2024/04/31</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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
  )
}

export default Leave