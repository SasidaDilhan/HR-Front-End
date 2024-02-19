import React from 'react'
import '../css/AttendanceIssues.css'

function AttendanceIssues() {
    return (
        <div>
            <h4 className="py-3 mb-4" id='attIssues'>Attendance Issues</h4>

            <div className=" card mb-3 p-3">
                <div className="input-group input-group-merge mt-3 " id="search">
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
                <div className="row py-2 ">
                    <div className="col-lg col-12">
                        <div>
                            <div className="row ">
                                <div className="col-12 mb-2 mb-md-0 col-md ">
                                    <div>
                                        <select
                                            className="form-select "

                                            aria-label="Default select example"
                                        >
                                            <option selected="">By Branch</option>
                                            <option value={1}>Colombo</option>
                                            <option value={2}>Ratnapura</option>
                                            <option value={3}>Galle</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 mb-2 mb-md-0 col-md">
                                    <div>
                                        <select
                                            className="form-select"

                                            aria-label="Default select example"
                                        >
                                            <option selected="">By Department</option>
                                            <option value={1}>Gem</option>
                                            <option value={2}>Jewellery</option>
                                            <option value={3}>License</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 mb-2 mb-md-0 col-md">
                                    <div>
                                        <select
                                            className="form-select"

                                            aria-label="Default select example"
                                        >
                                            <option selected="">By Category</option>
                                            <option value={1}>Standard</option>
                                            <option value={2}>PL</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="card p-5 mt-5 ml-2 mr-3">
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
                                    <th>Employee Id</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Check-In</th>
                                    <th>Check-Out</th>

                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                <tr>
                                    <td>2024/01/07</td>
                                    <td>1694</td>
                                    <td>Piumi Hansamali</td>
                                    <td>0776593157</td>
                                    <td>08.30</td>
                                    <td>16.35</td>

                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalCenter"
                                        >
                                            <span>
                                                <i className="uil uil-setting me-1" />
                                            </span>
                                            Moderate
                                        </button>
                                        {/* Modal */}
                                        <div
                                            className="modal fade"
                                            id="modalCenter"
                                            tabIndex={-1}
                                            aria-hidden="true"
                                        >
                                            <div
                                                className="modal-dialog modal-dialog-centered"
                                                role="document"
                                            >
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5
                                                            className="modal-title"
                                                            id="modalCenterTitle"
                                                        >
                                                            Modal title
                                                        </h5>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className='card modalcard '>
                                                     
                                                       <div className='row'>
                                                        <div className='col-3'>
                                                        <h6>Annual Leaves</h6>
                                                        <span>Leave type</span>
                                                            
                                                        
                                                        </div>
                                                        <div className='col-3'>
                                                        <h6>03Days</h6>
                                                        <span>Leave type</span>
                                                        
                                                        </div>
                                                        <div className='col-3'>
                                                        <h6>2024/-01-30</h6>
                                                        <span>Leave type</span>
                                                        
                                                        </div>
                                                        <div className='col-3'>
                                                        <h6>2024-02-02</h6>
                                                        <span>Leave type</span>
                                                       
                                                        </div>
                                                       </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-secondary"
                                                                data-bs-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                            >
                                                                Save changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2024/01/08</td>
                                    <td>1694</td>
                                    <td>Ranjan Ramanayake</td>
                                    <td>0776987135</td>
                                    <td>08.30</td>
                                    <td>16.35</td>

                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalCenter"
                                        >
                                            <span>
                                                <i className="uil uil-setting me-1" />
                                            </span>
                                            Moderate
                                        </button>
                                        {/* Modal */}
                                        <div
                                            className="modal fade"
                                            id="modalCenter"
                                            tabIndex={-1}
                                            aria-hidden="true"
                                        >
                                            <div
                                                className="modal-dialog modal-dialog-centered"
                                                role="document"
                                            >
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5
                                                            className="modal-title"
                                                            id="modalCenterTitle"
                                                        >
                                                            Modal title
                                                        </h5>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row">
                                                            <div className="col mb-3">
                                                                <label
                                                                    htmlFor="nameWithTitle"
                                                                    className="form-label"
                                                                >
                                                                    Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="nameWithTitle"
                                                                    className="form-control"
                                                                    placeholder="Enter Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row g-2">
                                                            <div className="col mb-0">
                                                                <label
                                                                    htmlFor="emailWithTitle"
                                                                    className="form-label"
                                                                >
                                                                    Email
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    id="emailWithTitle"
                                                                    className="form-control"
                                                                    placeholder="xxxx@xxx.xx"
                                                                />
                                                            </div>
                                                            <div className="col mb-0">
                                                                <label
                                                                    htmlFor="dobWithTitle"
                                                                    className="form-label"
                                                                >
                                                                    DOB
                                                                </label>
                                                                <input
                                                                    type="date"
                                                                    id="dobWithTitle"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary"
                                                        >
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2024/01/09</td>
                                    <td>1694</td>
                                    <td>Peshala Manoj</td>
                                    <td>0713641575</td>
                                    <td>08.30</td>
                                    <td>16.35</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalCenter"
                                        >
                                            <span>
                                                <i className="uil uil-setting me-1" />
                                            </span>
                                            Moderate
                                        </button>
                                        {/* Modal */}
                                        <div
                                            className="modal fade"
                                            id="modalCenter"
                                            tabIndex={-1}
                                            aria-hidden="true"
                                        >
                                            <div
                                                className="modal-dialog modal-dialog-centered"
                                                role="document"
                                            >
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5
                                                            className="modal-title"
                                                            id="modalCenterTitle"
                                                        >
                                                            Modal title
                                                        </h5>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row">
                                                            <div className="col mb-3">
                                                                <label
                                                                    htmlFor="nameWithTitle"
                                                                    className="form-label"
                                                                >
                                                                    Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="nameWithTitle"
                                                                    className="form-control"
                                                                    placeholder="Enter Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row g-2">
                                                            <div className="col mb-0">
                                                                <label
                                                                    htmlFor="emailWithTitle"
                                                                    className="form-label"
                                                                >
                                                                    Email
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    id="emailWithTitle"
                                                                    className="form-control"
                                                                    placeholder="xxxx@xxx.xx"
                                                                />
                                                            </div>
                                                            <div className="col mb-0">
                                                                <label
                                                                    htmlFor="dobWithTitle"
                                                                    className="form-label"
                                                                >
                                                                    DOB
                                                                </label>
                                                                <input
                                                                    type="date"
                                                                    id="dobWithTitle"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary"
                                                        >
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2024/01/10</td>
                                    <td>1694</td>
                                    <td>Sehan Deemantha</td>
                                    <td>0785648645</td>
                                    <td>08.30</td>
                                    <td>16.35</td>

                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalCenter"
                                        >
                                            <span>
                                                <i className="uil uil-setting me-1" />
                                            </span>
                                            Moderate
                                        </button>
                                        {/* Modal */}
                                        <div
                                            className="modal fade"
                                            id="modalCenter"
                                            tabIndex={-1}
                                            aria-hidden="true"
                                        >
                                            <div
                                                className="modal-dialog modal-dialog-centered"
                                                role="document"
                                            >
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5
                                                            className="modal-title"
                                                            id="modalCenterTitle"
                                                        >
                                                            Modal title
                                                        </h5>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row">
                                                            <div className="col mb-3">
                                                                <label
                                                                    htmlFor="nameWithTitle"
                                                                    className="form-label"
                                                                >
                                                                    Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="nameWithTitle"
                                                                    className="form-control"
                                                                    placeholder="Enter Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row g-2">
                                                            <div className="col mb-0">
                                                                <label
                                                                    htmlFor="emailWithTitle"
                                                                    className="form-label"
                                                                >
                                                                    Email
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    id="emailWithTitle"
                                                                    className="form-control"
                                                                    placeholder="xxxx@xxx.xx"
                                                                />
                                                            </div>
                                                            <div className="col mb-0">
                                                                <label
                                                                    htmlFor="dobWithTitle"
                                                                    className="form-label"
                                                                >
                                                                    DOB
                                                                </label>
                                                                <input
                                                                    type="date"
                                                                    id="dobWithTitle"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-secondary"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary"
                                                        >
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendanceIssues