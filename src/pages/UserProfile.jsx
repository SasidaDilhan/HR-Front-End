import React from 'react'
import '../css/profile.css'
import Image1 from '../avatars/12.png'

function UserProfile() {
  return (
    <>
        <div className="content-wrapper">
          {/* Content */}
          
            <h4 className="py-3 mb-4 mt-3 " id='user'>User Profile</h4>
            {/*              Content*/}
            <div className="content-wrapper ">
              {/* Content */}
              <div className="container-xxl flex-grow-1 container-p-y " id='card12'>
                {/*                  <h4 class="py-3 mb-4"><span class="text-muted fw-light"></span> Leave Profile</h4>*/}
                {/* Basic Layout & Basic with Icons */}
                <div className="row">
                  <div className="col card m-2">
                    <h4 className="mt-2">Basic Details</h4>
                    <div className="row">
                      <div className="col">
                        <div style={{ marginBottom: 20, marginRight: 20 }}>
                          <img
                            src={Image1}
                            alt="profile"
                            className="rounded w-100 h-100"
                          />
                        </div>
                      </div>
                      <div className="col-4 mt-3 text-left">
                        <h6 className="fw-bold ">
                          <p>Name :</p>
                          <p>NIC:</p>
                          <p>Gender :</p>
                          <p>DOB :</p>
                        </h6>
                      </div>
                      <div className="col-4 mt-3 text-left  ">
                        <h6>Supuni Perera</h6>
                        <h6>199845621478</h6>
                        <h6>Female</h6>
                        <h6>30 Nov 1998</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col card m-2">
                    <div className="row">
                      <div className="col mt-2">
                        <h4>Basic Details</h4>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-3">
                      <div className="col-4">
                        <h6 className="fw-bold text-left">
                          <p>Email:</p>
                          <p>Address :</p>
                          <p>Mobile :</p>
                        </h6>
                      </div>
                      <div className="col-4 text-left">
                        <h6>
                          <p>supuniperera@gmail.com</p>
                          <p>No 45, Galle Road, Colombo</p>
                          <p>0774582123</p>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 w-100">
                  <div className="nav-align-top mb-4">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link active"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-top-workDetails"
                          aria-controls="navs-top-workDetails"
                          aria-selected="true"
                        >
                          Work Details
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-top-previousWorkHistory"
                          aria-controls="navs-top-previousWorkHistory"
                          aria-selected="false"
                        >
                          Previous Work History
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-top-educationQualifications"
                          aria-controls="navs-top-educationQualifications"
                          aria-selected="false"
                        >
                          Education Qualifications
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-top-dependentsDetails"
                          aria-controls="navs-top-dependentsDetails"
                          aria-selected="false"
                        >
                          Dependents Details
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-top-emergencyContact"
                          aria-controls="navs-top-emergencyContact"
                          aria-selected="false"
                        >
                          Emergency Contact
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade  show active"
                        id="navs-top-workDetails"
                        role="tabpanel"
                      >
                        <div className=" border-2 bg-white text-ash m-3 p-3">
                          <div className="row">
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold text-left">
                                    <p>Employee Id :</p>
                                    <p>Branch Name :</p>
                                    <p>Department :</p>
                                    <p>Designation :</p>
                                  </div>
                                </div>
                                <div className="col-5 text-left">
                                  <p>emp12345</p>
                                  <p>Panadura</p>
                                  <p>Financial</p>
                                  <p>Finance Manager</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold text-left">
                                    <p>Starting Date/Joining Date :</p>
                                    <p>Employeement Category:</p>
                                    <p>Employeement Type:</p>
                                    <p>Work Telephone:</p>
                                  </div>
                                </div>
                                <div className="col-5 text-left">
                                  <p>2024/01/08</p>
                                  <p>Standard</p>
                                  <p>Permanent</p>
                                  <p>0114523654</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end mx-5">
                            <button
                              type="button"
                              className="btn btn-primary px-6 border border-dark"
                            >
                              <i className="bx bx-edit-alt me-1" />
                            </button>
                          </div>
                        </div>
                        {/*------*/}
                        <div className=" border-2 bg-light-purple text-ash m-3 p-3 ">
                          <div className="row">
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold text-left">
                                    <p>Employee Id :</p>
                                    <p>Branch Name :</p>
                                    <p>Department :</p>
                                    <p>Designation :</p>
                                  </div>
                                </div>
                                <div className="col-5 text-left">
                                  <p>emp12345</p>
                                  <p>Panadura</p>
                                  <p>Financial</p>
                                  <p>Finance Manager</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold text-left">
                                    <p>Starting Date/Joining Date :</p>
                                    <p>Employeement Category:</p>
                                    <p>Employeement Type:</p>
                                    <p>Work Telephone:</p>
                                  </div>
                                </div>
                                <div className="col-5 text-left">
                                  <p>2024/01/08</p>
                                  <p>Standard</p>
                                  <p>Permanent</p>
                                  <p>0114523654</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end mx-5">
                            <button
                              type="button"
                              className="btn btn-primary px-6 border border-dark"
                            >
                              <i className="bx bx-edit-alt me-1" />
                            </button>
                          </div>
                        </div>
                        {/*----*/}
                        <div className=" border-2 bg-white text-ash m-3 p-3">
                          <div className="row">
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold text-left">
                                    <p>Employee Id :</p>
                                    <p>Branch Name :</p>
                                    <p>Department :</p>
                                    <p>Designation :</p>
                                  </div>
                                </div>
                                <div className="col-5 text-left">
                                  <p>emp12345</p>
                                  <p>Panadura</p>
                                  <p>Financial</p>
                                  <p>Finance Manager</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold text-left">
                                    <p>Starting Date/Joining Date :</p>
                                    <p>Employeement Category:</p>
                                    <p>Employeement Type:</p>
                                    <p>Work Telephone:</p>
                                  </div>
                                </div>
                                <div className="col-5 text-left">
                                  <p>2024/01/08</p>
                                  <p>Standard</p>
                                  <p>Permanent</p>
                                  <p>0114523654</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end mx-5">
                            <button
                              type="button"
                              className="btn btn-primary px-6 border border-dark"
                            >
                              <i className="bx bx-edit-alt me-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="navs-top-previousWorkHistory"
                        role="tabpanel"
                      >
                        <div className=" border-2 bg-white text-ash m-3 p-3 ">
                          <div className="row">
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold text-left">
                                    <p>Company/Institute Name :</p>
                                    <p>Designation :</p>
                                  </div>
                                </div>
                                <div className="col-5 text-left">
                                  <p>LOLC Finance</p>
                                  <p>Finance Manager</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Starting Date/Joining Date :</p>
                                    <p>End Date :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>2024/01/08</p>
                                  <p>2024/12/05</p>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-end mx-sm-n5">
                              <button
                                type="button"
                                className="btn btn-primary px-6 border border-dark"
                              >
                                <i className="bx bx-edit-alt me-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/*--*/}
                        <div className=" border-2 bg-light-purple text-ash m-3 p-3">
                          <div className="row mt-3">
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Company/Institute Name :</p>
                                    <p>Designation :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>LOLC Finance</p>
                                  <p>Finance Manager</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Starting Date/Joining Date :</p>
                                    <p>End Date :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>2024/01/08</p>
                                  <p>2024/12/05</p>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-end mx-sm-n5">
                              <button
                                type="button"
                                className="btn btn-primary px-6 border border-dark"
                              >
                                <i className="bx bx-edit-alt me-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/*---*/}
                        <div className=" border-2 bg-white text-ash m-3 p-3 ">
                          <div className="row">
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Company/Institute Name :</p>
                                    <p>Designation :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>LOLC Finance</p>
                                  <p>Finance Manager</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Starting Date/Joining Date :</p>
                                    <p>End Date :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>2024/01/08</p>
                                  <p>2024/12/05</p>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-end mx-sm-n5">
                              <button
                                type="button"
                                className="btn btn-primary px-6 border border-dark"
                              >
                                <i className="bx bx-edit-alt me-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="navs-top-educationQualifications"
                        role="tabpanel"
                      >
                        <div className=" border-2 bg-white text-ash m-3 p-3 ">
                          <div className="row">
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>University/Institute Name :</p>
                                    <p>Qualification :</p>
                                    <p>Qualification Type :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>SLIIT</p>
                                  <p>BSC in Business Management</p>
                                  <p>Degree</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Starting Date/Joining Date :</p>
                                    <p>End Date :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>2017/01/08</p>
                                  <p>2021/11/08</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end mx-5">
                            <button
                              type="button"
                              className="btn btn-primary px-6 border border-dark"
                            >
                              <i className="bx bx-edit-alt me-1" />
                            </button>
                          </div>
                        </div>
                        {/*---*/}
                        <div className=" border-2 bg-light-purple text-ash m-3 p-3 ">
                          <div className="row">
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>University/Institute Name :</p>
                                    <p>Qualification :</p>
                                    <p>Qualification Type :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>SLIIT</p>
                                  <p>BSC in Business Management</p>
                                  <p>Degree</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Starting Date/Joining Date :</p>
                                    <p>End Date :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>2017/01/08</p>
                                  <p>2021/11/08</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end mx-5">
                            <button
                              type="button"
                              className="btn btn-primary px-6 border border-dark"
                            >
                              <i className="bx bx-edit-alt me-1" />
                            </button>
                          </div>
                        </div>
                        {/*---*/}
                        <div className=" border-2 bg-white text-ash m-3 p-3 ">
                          <div className="row">
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>University/Institute Name :</p>
                                    <p>Qualification :</p>
                                    <p>Qualification Type :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>SLIIT</p>
                                  <p>BSC in Business Management</p>
                                  <p>Degree</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Starting Date/Joining Date :</p>
                                    <p>End Date :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>2017/01/08</p>
                                  <p>2021/11/08</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end mx-5">
                            <button
                              type="button"
                              className="btn btn-primary px-6 border border-dark"
                            >
                              <i className="bx bx-edit-alt me-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="navs-top-dependentsDetails"
                        role="tabpanel"
                      >
                        <div className="row">
                          <div className="col card bg-purple  m-2">
                            <div className="col-sm p-3 ">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Dependent Name :</p>
                                    <p>Relationship :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>Aruni Perera</p>
                                  <p>Wife</p>
                                </div>
                              </div>
                              <div className="d-flex justify-content-end mx-5">
                                <button
                                  type="button"
                                  className="btn btn-primary px-6 border border-dark"
                                >
                                  <i className="bx bx-edit-alt me-1" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col card bg-purple m-2">
                            <div className="col-sm p-3 ">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Dependent Name :</p>
                                    <p>Relationship :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>Aruni Perera</p>
                                  <p>Wife</p>
                                </div>
                              </div>
                              <div className="d-flex justify-content-end mx-5">
                                <button
                                  type="button"
                                  className="btn btn-primary px-6 border border-dark"
                                >
                                  <i className="bx bx-edit-alt me-1" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="navs-top-emergencyContact"
                        role="tabpanel"
                      >
                        <div className="row">
                          <div className="col card bg-purple  m-2">
                            <div className="col-sm p-3 ">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Dependent Name :</p>
                                    <p>Relationship :</p>
                                    <p>Mobile :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>Aruni Perera</p>
                                  <p>Wife</p>
                                  <p>0778951230</p>
                                </div>
                              </div>
                              <div className="d-flex justify-content-end mx-5">
                                <button
                                  type="button"
                                  className="btn btn-primary px-6 border border-dark"
                                >
                                  <i className="bx bx-edit-alt me-1" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col card bg-purple m-2">
                            <div className="col-sm p-3 ">
                              <div className="row">
                                <div className="col-5">
                                  <div className="fw-bold">
                                    <p>Dependent Name :</p>
                                    <p>Relationship :</p>
                                    <p>Mobile :</p>
                                  </div>
                                </div>
                                <div className="col-5">
                                  <p>Aruni Perera</p>
                                  <p>Wife</p>
                                  <p>0778951230</p>
                                </div>
                              </div>
                              <div className="d-flex justify-content-end mx-5">
                                <button
                                  type="button"
                                  className="btn btn-primary px-6 border border-dark"
                                >
                                  <i className="bx bx-edit-alt me-1" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*              Content*/}
            </div>
           
          
          
          {/* Content wrapper */}
        </div>
    </>
  )
}

export default UserProfile
