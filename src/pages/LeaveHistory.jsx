import React from "react";
import "../css/LeaveHistory.css";

function LeaveHistory() {
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row g-4 mb-4">
          <div className="col-sm-6 col-xl-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span>All Leaves</span>
                    <div className="d-flex align-items-end mt-2">
                      <h4 className="mb-0 me-2">30</h4>
                    </div>
                    {/*                                        <p class="mb-0">Total Leaves</p>*/}
                  </div>
                  <div className="avatar">
                    <span className="avatar-initial rounded bg-label-primary">
                      <i className="bx bx-user bx-sm" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4 ml-sm-3 ">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span>Rejected Leaves</span>
                    <div className="d-flex align-items-end mt-2">
                      <h4 className="mb-0 me-2">10</h4>
                    </div>
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
          <div className="col-sm-6 col-xl-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span>Accepted Leaves</span>
                    <div className="d-flex align-items-end mt-2">
                      <h4 className="mb-0 me-2">5</h4>
                      {/*                                            <small class="text-danger">(-14%)</small>*/}
                    </div>
                    {/*                                        <p class="mb-0">Last week analytics</p>*/}
                  </div>
                  <div className="avatar">
                    <span className="avatar-initial rounded bg-label-success">
                      <i className="bx bx-group bx-sm" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Users List Table */}
        {/*                <div class="row mb-3">*/}
        {/*                    <div class="col-sm-6 ">*/}
        <div className="card">
          <div className="card-header">
            <div className="row mb-3">
              <h5 className="card-title">Search Filter</h5>
              {/*                        <div class="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">*/}
              <div className="d-flex justify-content-between align-items-center row gap-3 gap-md-0">
                <div className="col-md-4 user_role">
                  <select id="UserRole" className="form-select text-capitalize">
                    <option value="">Select Department</option>
                    <option value="Admin">IT</option>
                    <option value="Author">IT</option>
                    <option value="Editor">IT</option>
                  </select>
                </div>
                <div className="col-md-4 user_plan">
                  <select id="UserPlan" className="form-select text-capitalize">
                    <option value=""> Select Leave Type</option>
                    <option value="Basic">Gate Pass</option>
                    <option value="Company">Half Day</option>
                  </select>
                </div>
                <div className="col-md-4 user_status">
                  <select
                    id="FilterTransaction"
                    className="form-select text-capitalize"
                  >
                    <option value=""> Select Status</option>
                    <option value="Pending" className="text-capitalize">
                      Pending
                    </option>
                    <option value="Active" className="text-capitalize">
                      Accepted
                    </option>
                    <option value="Inactive" className="text-capitalize">
                      Rejected
                    </option>
                  </select>
                </div>
              </div>
              {/*                            <div class="col-sm-12 col-md-9">*/}
              {/*                                <div class="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-start justify-content-md-start justify-content-start flex-wrap me-1">*/}
              <div className="dt-action-buttons text-lg-start ">
                <div className="me-3">
                  <div
                    id="DataTables_Table_0_filter"
                    className="dataTables_filter pt-4 w-100"
                  >
                    <label className="search ">
                      <input
                        type="search"
                        className="form-control     "
                        placeholder="Search Employee Name"
                        aria-controls="DataTables_Table"
                      />
                    </label>
                    <button
                      className="btn add-new btn-primary m-l-1 "
                      tabIndex={0}
                    >
                      <span>Search</span>
                    </button>
                  </div>
                </div>
                {/*                                </div>*/}
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-4">
          <div className="card-header">
            <div className="row mb-3">
              <div className="card-datatable table-responsive">
                <div
                  style={{}}
                  id="DataTables_Table_0_wrapper1"
                  className="dataTables_wrapper dt-bootstrap5 no-footer"
                >
                  {/*                                    <div class="card">*/}
                  <table
                    className="datatables-users form-control table dataTable no-footer dtr-column"
                    id="DataTables_Table_0"
                    aria-describedby="DataTables_Table_0_info"
                    style={{ width: 1115 }}
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Leave_type</th>
                        <th>Date</th>
                        <th>In_time</th>
                        <th>Out_time</th>
                        <th>Status</th>
                      </tr>

                      <tr>
                        {/*                                                        <td>E001</td>*/}
                        <td>Viduth Ranaweera</td>
                        <td>IT</td>
                        <td>Gate Pass</td>
                        <td>2023-01-01</td>
                        <td>
                          <span className="badge bg-label-danger me-1">
                            10-00am
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-label-danger me-1">
                            12-00pm
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-primary btn-align">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-warning">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        {/*                                                        <td>E001</td>*/}
                        <td>Viduth Ranaweera</td>
                        <td>IT</td>
                        <td>Gate Pass</td>
                        <td>2023-01-01</td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            10-00am
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            12-00pm
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-primary btn-align">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-warning">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        {/*                                                        <td>E001</td>*/}
                        <td>Viduth Ranaweera</td>
                        <td>IT</td>
                        <td>Gate Pass</td>
                        <td>2023-01-01</td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            10-00am
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            12-00pm
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-primary btn-align">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-warning">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        {/*                                                        <td>E001</td>*/}
                        <td>Viduth Ranaweera</td>
                        <td>IT</td>
                        <td>Gate Pass</td>
                        <td>2023-01-01</td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            10-00am
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            12-00pm
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-primary btn-align">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-warning">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        {/*                                                        <td>E001</td>*/}
                        <td>Viduth Ranaweera</td>
                        <td>IT</td>
                        <td>Gate Pass</td>
                        <td>2023-01-01</td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            10-00am
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            12-00pm
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-primary btn-align">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-warning">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        {/*                                                        <td>E001</td>*/}
                        <td>Viduth Ranaweera</td>
                        <td>IT</td>
                        <td>Gate Pass</td>
                        <td>2023-01-01</td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            10-00am
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            12-00pm
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-primary btn-align">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-warning">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        {/*                                                        <td>E001</td>*/}
                        <td>Viduth Ranaweera</td>
                        <td>IT</td>
                        <td>Gate Pass</td>
                        <td>2023-01-01</td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            10-00am
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-label-success me-1">
                            12-00pm
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-primary btn-align">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-warning">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr></tr>
                      <tr className="no-records">
                        <td>
                          <div className="alert alert-secondary">
                            No Previous Leave
                          </div>
                        </td>
                      </tr>
                    </thead>
                    {/* </div> */}
                    <tbody>
                      <tr className="odd">
                        {/*                                    <td class="  control" tabindex="0" style="display: none;"></td><td class="sorting_1"><div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/2.png" alt="Avatar" class="rounded-circle"></div></div><div class="d-flex flex-column"><a href="app-user-view-account.html" class="text-body text-truncate"><span class="fw-medium">Zsazsa McCleverty</span></a><small class="text-muted">zmcclevertye@soundcloud.com</small></div></div></td><td><span class="text-truncate d-flex align-items-center"><span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2"><i class="bx bx-pie-chart-alt bx-xs"></i></span>Maintainer</span></td><td><span class="fw-medium">Enterprise</span></td><td>Auto Debit</td><td><span class="badge bg-label-success">Active</span></td><td><div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="bx bx-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-user-view-account.html" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div></td></tr><tr class="even"><td class="  control" tabindex="0" style="display: none;"></td><td class="sorting_1"><div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle"></div></div><div class="d-flex flex-column"><a href="app-user-view-account.html" class="text-body text-truncate"><span class="fw-medium">Yoko Pottie</span></a><small class="text-muted">ypottiec@privacy.gov.au</small></div></div></td><td><span class="text-truncate d-flex align-items-center"><span class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30 me-2"><i class="bx bx-user bx-xs"></i></span>Subscriber</span></td><td><span class="fw-medium">Basic</span></td><td>Auto Debit</td><td><span class="badge bg-label-secondary">Inactive</span></td><td><div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="bx bx-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-user-view-account.html" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div></td></tr><tr class="odd"><td class="  control" tabindex="0" style="display: none;"></td><td class="sorting_1"><div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle"></div></div><div class="d-flex flex-column"><a href="app-user-view-account.html" class="text-body text-truncate"><span class="fw-medium">Wesley Burland</span></a><small class="text-muted">wburlandj@uiuc.edu</small></div></div></td><td><span class="text-truncate d-flex align-items-center"><span class="badge badge-center rounded-pill bg-label-info w-px-30 h-px-30 me-2"><i class="bx bx-edit bx-xs"></i></span>Editor</span></td><td><span class="fw-medium">Team</span></td><td>Auto Debit</td><td><span class="badge bg-label-secondary">Inactive</span></td><td><div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="bx bx-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-user-view-account.html" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div></td></tr><tr class="even"><td class="  control" tabindex="0" style="display: none;"></td><td class="sorting_1"><div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3"><span class="avatar-initial rounded-circle bg-label-info">VK</span></div></div><div class="d-flex flex-column"><a href="app-user-view-account.html" class="text-body text-truncate"><span class="fw-medium">Vladamir Koschek</span></a><small class="text-muted">vkoschek17@abc.net.au</small></div></div></td><td><span class="text-truncate d-flex align-items-center"><span class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30 me-2"><i class="bx bx-cog bx-xs"></i></span>Author</span></td><td><span class="fw-medium">Team</span></td><td>Manual - Paypal</td><td><span class="badge bg-label-success">Active</span></td><td><div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="bx bx-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-user-view-account.html" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div></td></tr><tr class="odd"><td class="  control" tabindex="0" style="display: none;"></td><td class="sorting_1"><div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3"><span class="avatar-initial rounded-circle bg-label-info">TW</span></div></div><div class="d-flex flex-column"><a href="app-user-view-account.html" class="text-body text-truncate"><span class="fw-medium">Tyne Widmore</span></a><small class="text-muted">twidmore12@bravesites.com</small></div></div></td><td><span class="text-truncate d-flex align-items-center"><span class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30 me-2"><i class="bx bx-user bx-xs"></i></span>Subscriber</span></td><td><span class="fw-medium">Team</span></td><td>Manual - Cash</td><td><span class="badge bg-label-warning">Pending</span></td><td><div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="bx bx-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-user-view-account.html" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div></td></tr><tr class="even"><td class="  control" tabindex="0" style="display: none;"></td><td class="sorting_1"><div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3"><span class="avatar-initial rounded-circle bg-label-danger">TB</span></div></div><div class="d-flex flex-column"><a href="app-user-view-account.html" class="text-body text-truncate"><span class="fw-medium">Travus Bruntjen</span></a><small class="text-muted">tbruntjeni@sitemeter.com</small></div></div></td><td><span class="text-truncate d-flex align-items-center"><span class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30 me-2"><i class="bx bx-mobile-alt bx-xs"></i></span>Admin</span></td><td><span class="fw-medium">Enterprise</span></td><td>Manual - Cash</td><td><span class="badge bg-label-success">Active</span></td><td><div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="bx bx-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-user-view-account.html" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div></td></tr><tr class="odd"><td class="  control" tabindex="0" style="display: none;"></td><td class="sorting_1"><div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/1.png" alt="Avatar" class="rounded-circle"></div></div><div class="d-flex flex-column"><a href="app-user-view-account.html" class="text-body text-truncate"><span class="fw-medium">Stu Delamaine</span></a><small class="text-muted">sdelamainek@who.int</small></div></div></td><td><span class="text-truncate d-flex align-items-center"><span class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30 me-2"><i class="bx bx-cog bx-xs"></i></span>Author</span></td><td><span class="fw-medium">Basic</span></td><td>Auto Debit</td><td><span class="badge bg-label-warning">Pending</span></td><td><div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="bx bx-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-user-view-account.html" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div></td></tr><tr class="even"><td class="  control" tabindex="0" style="display: none;"></td><td class="sorting_1"><div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3"><span class="avatar-initial rounded-circle bg-label-danger">SO</span></div></div><div class="d-flex flex-column"><a href="app-user-view-account.html" class="text-body text-truncate"><span class="fw-medium">Saunder Offner</span></a><small class="text-muted">soffner19@mac.com</small></div></div></td><td><span class="text-truncate d-flex align-items-center"><span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2"><i class="bx bx-pie-chart-alt bx-xs"></i></span>Maintainer</span></td><td><span class="fw-medium">Enterprise</span></td><td>Auto Debit</td><td><span class="badge bg-label-warning">Pending</span></td><td><div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="bx bx-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-user-view-account.html" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div></td></tr><tr class="odd"><td class="  control" tabindex="0" style="display: none;"></td><td class="sorting_1"><div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3"><span class="avatar-initial rounded-circle bg-label-dark">SM</span></div></div><div class="d-flex flex-column"><a href="app-user-view-account.html" class="text-body text-truncate"><span class="fw-medium">Stephen MacGilfoyle</span></a><small class="text-muted">smacgilfoyley@bigcartel.com</small></div></div></td><td><span class="text-truncate d-flex align-items-center"><span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2"><i class="bx bx-pie-chart-alt bx-xs"></i></span>Maintainer</span></td><td><span class="fw-medium">Company</span></td><td>Manual - Paypal</td><td><span class="badge bg-label-warning">Pending</span></td><td><div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="bx bx-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-user-view-account.html" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div></td></tr><tr class="even"><td class="  control" tabindex="0" style="display: none;"></td><td class="sorting_1"><div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3"><img src="../../assets/img/avatars/9.png" alt="Avatar" class="rounded-circle"></div></div><div class="d-flex flex-column"><a href="app-user-view-account.html" class="text-body text-truncate"><span class="fw-medium">Skip Hebblethwaite</span></a><small class="text-muted">shebblethwaite10@arizona.edu</small></div></div></td><td><span class="text-truncate d-flex align-items-center"><span class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30 me-2"><i class="bx bx-mobile-alt bx-xs"></i></span>Admin</span></td><td><span class="fw-medium">Company</span></td><td>Manual - Cash</td><td><span class="badge bg-label-secondary">Inactive</span></td><td><div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon delete-record"><i class="bx bx-trash"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-user-view-account.html" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div></td></tr></tbody>*/}
                      </tr>
                    </tbody>
                  </table>
                  {/*                                    </div>*/}
                  <div className="row mx-2">
                    <div className="col-sm-12 col-md-6">
                      <div
                        style={{ textAlign: "left" }}
                        className="dataTables_info"
                        id="DataTables_Table_0_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 50 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="DataTables_Table_0_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="DataTables_Table_0_previous"
                          >
                            <a
                              aria-controls="DataTables_Table_0"
                              aria-disabled="true"
                              role="link"
                              data-dt-idx="previous"
                              tabIndex={0}
                              className="page-link"
                            >
                              Previous
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              role="link"
                              aria-current="page"
                              data-dt-idx={0}
                              tabIndex={0}
                              className="page-link"
                            >
                              1
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              role="link"
                              data-dt-idx={1}
                              tabIndex={0}
                              className="page-link"
                            >
                              2
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              role="link"
                              data-dt-idx={2}
                              tabIndex={0}
                              className="page-link"
                            >
                              3
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              role="link"
                              data-dt-idx={3}
                              tabIndex={0}
                              className="page-link"
                            >
                              4
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              role="link"
                              data-dt-idx={4}
                              tabIndex={0}
                              className="page-link"
                            >
                              5
                            </a>
                          </li>
                          <li
                            className="paginate_button page-item next"
                            id="DataTables_Table_0_next"
                          >
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              role="link"
                              data-dt-idx="next"
                              tabIndex={0}
                              className="page-link"
                            >
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaveHistory;
