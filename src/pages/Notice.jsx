import React from "react";
import NoticeHistory from "./NoticeHistory";

function Notice() {
  return (
    <>
      <div className="container-xxl flex-grow-1">
        {/*              Content*/}
        <div className="row">
          <div className=" w-100">
            <div className="nav-align-top mb-4 ">
              <ul className="nav nav-tabs  " role="tablist">
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link active"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-top-home"
                    aria-controls="navs-top-home"
                    aria-selected="true"
                  >
                    Create Notice
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#navs-top-profile"
                    aria-controls="navs-top-profile"
                    aria-selected="false"
                  >
                    History
                  </button>
                </li>
              </ul>
              <div className="tab-content col-sm">
                <div
                  className="tab-pane fade show active"
                  id="navs-top-home"
                  role="tabpanel"
                >
                  <div className="container tab-content">
                    <div className="row">
                      <div className="col-sm">
                        <div className="mb-3 w-100 ">
                          <label htmlFor="defaultSelect" className="form-label">
                            Select Category
                          </label>
                          <select id="defaultSelect" className="form-select">
                            <option>All</option>
                            <option value="Standard">Standard</option>
                            <option value="PL">PL</option>
                          </select>
                        </div>
                        <div className="d-flex justify-content-between w-100 mb-5">
                          <div className="form-check mt-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="defaultCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              {" "}
                              Intern{" "}
                            </label>
                          </div>
                          <div className="form-check mt-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="defaultCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              {" "}
                              Contract Basis{" "}
                            </label>
                          </div>
                          <div className="form-check mt-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="defaultCheck3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="defaultCheck1"
                            >
                              {" "}
                              Permenent{" "}
                            </label>
                          </div>
                        </div>
                        <div className="w-100 mb-5">
                          <label
                            htmlFor="defaultFormControlInput"
                            className="form-label"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="defaultFormControlInput"
                            aria-describedby="defaultFormControlHelp"
                          />
                        </div>
                        <div className="mb-5 w-100">
                          <label htmlFor="formFile" className="form-label">
                            Choose a file
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                      </div>
                      <div className="col-sm">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={8}
                          defaultValue={""}
                        />
                        <p>
                          *It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters
                        </p>
                        <div className="row mt-3 d-flex justify-content-end">
                          <div className=" gap-2 col-lg-6" id="twobtn">
                            <button
                              type="button"
                              className="btn btn-primary w-px-100"
                              id="lftbtn"
                            >
                              Post
                            </button>
                            <button type="button" className="btn btn-danger">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <NoticeHistory />

              </div>
            </div>
          </div>
          {/*              Content*/}
        </div>

        <div className="content-backdrop fade" />
      </div>
    </>
  );
}

export default Notice;
