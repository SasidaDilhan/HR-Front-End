import React from 'react'

function AnnualLeaves() {
  return (
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
  )
}

export default AnnualLeaves
