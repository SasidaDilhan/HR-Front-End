import React, { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import Swal from "sweetalert2";
import "../css/register.css";

export default function () {

  const [category, setCategory] = useState('');
  const [employeeTypeOptions, setEmployeeTypeOptions] = useState([]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    updateEmployeeTypeOptions(selectedCategory);
  };

  const updateEmployeeTypeOptions = (selectedCategory) => {
    let options = [];
    if (selectedCategory === 'standard') {
      options = ['Intern', 'Permanent'];
    } else if (selectedCategory === 'pl') {
      options = ['Contract base', 'Daily base', 'Permanent'];
    }
    setEmployeeTypeOptions(options);
  };


  /* date picker */
  useEffect(() => {
    const datePicker1 = document.getElementById("datepicker1");
    const datePicker2 = document.getElementById("datepicker2");
    const datePicker3 = document.getElementById("datepicker3");
    const datePicker4 = document.getElementById("datepicker4");
    const datePicker5 = document.getElementById("datepicker5");
    const datePicker6 = document.getElementById("datepicker6");

    flatpickr(datePicker1, { dateFormat: "Y-m-d", disableMobile: true });
    flatpickr(datePicker2, { dateFormat: "Y-m-d", disableMobile: true });
    flatpickr(datePicker3, { dateFormat: "Y-m-d", disableMobile: true });
    flatpickr(datePicker4, { dateFormat: "Y-m-d", disableMobile: true });
    flatpickr(datePicker5, { dateFormat: "Y-m-d", disableMobile: true });
    flatpickr(datePicker6, { dateFormat: "Y-m-d", disableMobile: true });

    return () => {
      flatpickr(datePicker1).destroy();
      flatpickr(datePicker2).destroy();
      flatpickr(datePicker3).destroy();
      flatpickr(datePicker4).destroy();
      flatpickr(datePicker5).destroy();
      flatpickr(datePicker6).destroy();
    };
  }, []);

  /* end of date picker */

  /* upload image */

  useEffect(() => {
    const handleImageUpload = (event) => {
      const input = event.target;
      const reader = new FileReader();

      reader.onload = () => {
        const image = document.getElementById("profile-image");
        if (image) {
          image.src = reader.result;
          image.style.display = "block"; // Show the image preview
        }
      };

      reader.readAsDataURL(input.files[0]);
    };

    const fileInput = document.getElementById("image-upload");
    if (fileInput) {
      fileInput.addEventListener("change", handleImageUpload);

      return () => {
        // Cleanup: Remove event listener when the component unmounts
        fileInput.removeEventListener("change", handleImageUpload);
      };
    }
  }, []);

  /* upload image */

  /* basic details form validation */

  useEffect(() => {
    const form = document.getElementById("bs-validation-form");

    const handleSubmit = (event) => {
      event.preventDefault();
      form.classList.add("was-validated");

      const elements = form.elements;
      for (let i = 0; i < elements.length; i++) {
        if (!elements[i].checkValidity()) {
          elements[i].classList.add("is-invalid");
        }
      }
    };

    const handleInputChange = (event) => {
      const input = event.target;
      if (input.checkValidity()) {
        input.classList.remove("is-invalid");
      } else {
        input.classList.add("is-invalid");
      }
    };

    form.addEventListener("submit", handleSubmit);

    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.addEventListener("input", handleInputChange);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      form.removeEventListener("submit", handleSubmit);
      inputs.forEach((input) => {
        input.removeEventListener("input", handleInputChange);
      });
    };
  }, []);

  /*  End of  basic details form validation */

  /* work details form validation part */

  useEffect(() => {
    const handleFormSubmit = (event) => {
      const form = event.target;
      form.classList.add("was-validated");

      const elements = form.elements;
      for (let i = 0; i < elements.length; i++) {
        if (!elements[i].checkValidity()) {
          elements[i].classList.add("is-invalid");
        }
      }

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const form = document.getElementById("bs-validation-form");
    const elements = form.elements;

    // Listen for the 'input' event on each form element
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("input", function () {
        if (this.checkValidity()) {
          this.classList.remove("is-invalid");
        }
      });
    }

    form.addEventListener("submit", handleFormSubmit);

    // Clean up event listeners when component unmounts
    return () => {
      form.removeEventListener("submit", handleFormSubmit);
      for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener("input", function () {
          if (this.checkValidity()) {
            this.classList.remove("is-invalid");
          }
        });
      }
    };
  }, []);

  /*end of work details form validation part */

  /* emergency form validation */
  useEffect(() => {
    const handleFormSubmit = (event) => {
      const form = event.target;
      form.classList.add("was-validated");

      const elements = form.elements;
      for (let i = 0; i < elements.length; i++) {
        if (!elements[i].checkValidity()) {
          elements[i].classList.add("is-invalid");
        }
      }

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const form = document.getElementById("bs-validation-form2");
    const elements = form.elements;

    // Listen for the 'input' event on each form element
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("input", function () {
        if (this.checkValidity()) {
          this.classList.remove("is-invalid");
        }
      });
    }

    form.addEventListener("submit", handleFormSubmit);

    // Clean up event listeners when component unmounts
    return () => {
      form.removeEventListener("submit", handleFormSubmit);
      for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener("input", function () {
          if (this.checkValidity()) {
            this.classList.remove("is-invalid");
          }
        });
      }
    };
  }, []);

  /*end of emergency form validation */

  /* previous work form repeater */
  useEffect(() => {
    const handleAddRepeaterButtonClick = (event) => {
      event.preventDefault(); // Prevent the default form submission

      const form = document.getElementById("myForm");
      const repeaterItem = form
        .querySelector("[data-repeater-item]")
        .cloneNode(true);
      const repeaterList = form.querySelector('[data-repeater-list="group-a"]');

      // Clear input values in the cloned repeater item
      repeaterItem.querySelectorAll("input, select").forEach(function (input) {
        input.value = "";
      });

      repeaterList.appendChild(repeaterItem);
    };

    const handleDeleteButtonClick = (event) => {
      const deleteButton = event.target.closest("[data-repeater-delete]");

      if (deleteButton) {
        event.preventDefault(); // Prevent the default form submission

        const form = document.getElementById("myForm");
        const repeaterItem = deleteButton.closest("[data-repeater-item]");
        const repeaterList = repeaterItem.parentElement;

        // Ensure there is always at least one form left
        if (repeaterList.childElementCount > 1) {
          // Show the Swal alert for confirmation
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            customClass: {
              confirmButton: "btn btn-primary me-1",
              cancelButton: "btn btn-label-secondary",
            },
            buttonsStyling: false,
          }).then(function (result) {
            if (result.value) {
              // If confirmed, remove the repeater item
              repeaterList.removeChild(repeaterItem);
              Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Your item has been deleted.",
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              // If cancelled, do nothing
              Swal.fire({
                title: "Cancelled",
                text: "Your item is safe :)",
                icon: "error",
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            }
          });
        } else {
          // Alert when there's only one form left
          alert("At least one form must be present!");
        }
      }
    };

    // Add event listeners
    const addRepeaterButton = document.getElementById("addRepeater");
    addRepeaterButton.addEventListener("click", handleAddRepeaterButtonClick);

    const form = document.getElementById("myForm");
    form.addEventListener("click", handleDeleteButtonClick);

    // Cleanup function to remove event listeners
    return () => {
      addRepeaterButton.removeEventListener(
        "click",
        handleAddRepeaterButtonClick
      );
      form.removeEventListener("click", handleDeleteButtonClick);
    };


  }, []);
  /* end of previous work form repeater */

  /* education form repeater */

  useEffect(() => {
    const handleAddRepeaterButtonClick = (event) => {
      event.preventDefault(); // Prevent the default form submission

      const form = document.getElementById("myForm1");
      const repeaterItem = form
        .querySelector("[data-repeater-item]")
        .cloneNode(true);
      const repeaterList = form.querySelector('[data-repeater-list="group-a"]');

      // Clear input values in the cloned repeater item
      repeaterItem.querySelectorAll("input, select").forEach(function (input) {
        input.value = "";
      });

      repeaterList.appendChild(repeaterItem);
    };

    const handleDeleteButtonClick = (event) => {
      const deleteButton = event.target.closest("[data-repeater-delete]");

      if (deleteButton) {
        event.preventDefault(); // Prevent the default form submission

        const form = document.getElementById("myForm");
        const repeaterItem = deleteButton.closest("[data-repeater-item]");
        const repeaterList = repeaterItem.parentElement;

        // Ensure there is always at least one form left
        if (repeaterList.childElementCount > 1) {
          // Show the Swal alert for confirmation
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            customClass: {
              confirmButton: "btn btn-primary me-1",
              cancelButton: "btn btn-label-secondary",
            },
            buttonsStyling: false,
          }).then(function (result) {
            if (result.value) {
              // If confirmed, remove the repeater item
              repeaterList.removeChild(repeaterItem);
              Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Your item has been deleted.",
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              // If cancelled, do nothing
              Swal.fire({
                title: "Cancelled",
                text: "Your item is safe :)",
                icon: "error",
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            }
          });
        } else {
          // Alert when there's only one form left
          alert("At least one form must be present!");
        }
      }
    };

    // Add event listeners
    const addRepeaterButton = document.getElementById("addRepeater1");
    addRepeaterButton.addEventListener("click", handleAddRepeaterButtonClick);

    const form = document.getElementById("myForm1");
    form.addEventListener("click", handleDeleteButtonClick);

    // Cleanup function to remove event listeners
    return () => {
      addRepeaterButton.removeEventListener(
        "click",
        handleAddRepeaterButtonClick
      );
      form.removeEventListener("click", handleDeleteButtonClick);
    };
  }, []);

  /* end of education form repeater */

  /* dependent details form repeater */

  useEffect(() => {
    const handleAddRepeaterButtonClick = (event) => {
      event.preventDefault();

      const form = document.getElementById("bs-validation-form");
      const repeaterItem = form.querySelector("[data-repeater-item]").cloneNode(true);
      const repeaterList = form.querySelector('[data-repeater-list="group-a"]');

      repeaterItem.querySelectorAll("input").forEach(function (input) {
        input.value = "";
      });

      repeaterList.appendChild(repeaterItem);
    };

    const handleDeleteButtonClick = (event) => {
      const deleteButton = event.target.closest("[data-repeater-delete]");

      if (deleteButton) {
        event.preventDefault();

        const repeaterItem = deleteButton.closest("[data-repeater-item]");
        const repeaterList = repeaterItem.parentElement;

        if (repeaterList.childElementCount > 1) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            customClass: {
              confirmButton: "btn btn-primary me-1",
              cancelButton: "btn btn-label-secondary",
            },
            buttonsStyling: false,
          }).then(function (result) {
            if (result.value) {
              // If confirmed, remove the repeater item
              repeaterList.removeChild(repeaterItem);
              Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Your item has been deleted.",
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              // If cancelled, do nothing
              Swal.fire({
                title: "Cancelled",
                text: "Your item is safe :)",
                icon: "error",
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            }
          });
        } else {
          alert("At least one form must be present!");
        }
      }
    };

    const addRepeaterButton = document.getElementById("addRepeater2");
    addRepeaterButton.addEventListener("click", handleAddRepeaterButtonClick);

    const form = document.getElementById("bs-validation-form");
    form.addEventListener("click", handleDeleteButtonClick);

    return () => {
      addRepeaterButton.removeEventListener("click", handleAddRepeaterButtonClick);
      form.removeEventListener("click", handleDeleteButtonClick);
    };
  }, []);

  /* end of dependent details form */

  /* success alert when save */
  useEffect(() => {
    const handleSaveButtonClick = (event) => {
      const activeTabPane = document.querySelector(".tab-pane.active");
      if (activeTabPane) {
        const saveButton = activeTabPane.querySelector(".btn-primary");
        if (saveButton && event.target === saveButton) {
          event.preventDefault();
          const lastEmergencyForm = document.getElementById(
            "form-tabs-emergency"
          );
          const currentTabPaneId = activeTabPane.getAttribute("id");

          if (currentTabPaneId === lastEmergencyForm.getAttribute("id")) {
            if (activeTabPane.querySelector("form").checkValidity()) {
              Swal.fire({
                position: "bottom-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                  title: "your-custom-title-class",
                  content: "your-custom-content-class",
                },
                buttonsStyling: false,
              });
            } else {
              activeTabPane.querySelector("form").reportValidity();
            }
          } else {
            if (activeTabPane.querySelector("form").checkValidity()) {
              // Navigate to the next tab
              const nextTabPane = activeTabPane.nextElementSibling;
              if (nextTabPane) {
                const nextTabPaneId = nextTabPane.getAttribute("id");
                const navLink = document.querySelector(
                  `[data-bs-target="#${nextTabPaneId}"]`
                );
                if (navLink) {
                  navLink.click();

                  // Scroll to the top of the active tab
                  setTimeout(() => {
                    window.scrollTo(0, activeTabPane.offsetTop);
                  }, 0);
                }
              }
            } else {
              activeTabPane.querySelector("form").reportValidity();
            }
          }
        }
      }
    };

    document.addEventListener("click", handleSaveButtonClick);

    return () => {
      document.removeEventListener("click", handleSaveButtonClick);
    };
  }, []);

  /* end of success alert when save */

  /* emergency details for repeater */
  useEffect(() => {

    const handleAddRepeaterButtonClick = (event) => {
      event.preventDefault();

      const form = document.getElementById("bs-validation-form1");
      const repeaterItem = form.querySelector("[data-repeater-item]").cloneNode(true);
      const repeaterList = form.querySelector('[data-repeater-list="group-a"]');

      repeaterItem.querySelectorAll("input").forEach(function (input) {
        input.value = "";
      });

      repeaterList.appendChild(repeaterItem);
    };

    const handleDeleteButtonClick = (event) => {
      const deleteButton = event.target.closest("[data-repeater-delete]");

      if (deleteButton) {
        event.preventDefault();

        const repeaterItem = deleteButton.closest("[data-repeater-item]");
        const repeaterList = repeaterItem.parentElement;

        if (repeaterList.childElementCount > 1) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            customClass: {
              confirmButton: "btn btn-primary me-1",
              cancelButton: "btn btn-label-secondary",
            },
            buttonsStyling: false,
          }).then(function (result) {
            if (result.value) {
              // If confirmed, remove the repeater item
              repeaterList.removeChild(repeaterItem);
              Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Your item has been deleted.",
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              // If cancelled, do nothing
              Swal.fire({
                title: "Cancelled",
                text: "Your item is safe :)",
                icon: "error",
                customClass: {
                  confirmButton: "btn btn-success",
                },
              });
            }
          });
        } else {
          alert("At least one form must be present!");
        }
      }
    };

    const addRepeaterButton = document.getElementById("addRepeater3");
    addRepeaterButton.addEventListener("click", handleAddRepeaterButtonClick);

    const form = document.getElementById("bs-validation-form1");
    form.addEventListener("click", handleDeleteButtonClick);

    return () => {
      addRepeaterButton.removeEventListener("click", handleAddRepeaterButtonClick);
      form.removeEventListener("click", handleDeleteButtonClick);
    };
  }, []);
  /* end of emergency details form repeater */

  return (
    <div>

      <div className="nav-align-top mb-3 container-xxl" >
        <h4 className="py-3 mb-4">Register</h4>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#form-tabs-personal"
              role="tab"
              aria-selected="true"
              fdprocessedid="5s9r1"
            >
              Basic Details
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#form-tabs-account"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Work Details
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#form-tabs-social"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Previous Work
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#form-tabs-education"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Education Qualification
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#form-tabs-dependent"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Dependent Details
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#form-tabs-emergency"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Emergency
            </button>
          </li>
        </ul>

        <div className="tab-content ">

          <div
            class="tab-pane fade active show"
            id="form-tabs-personal"
            role="tabpanel"
          >
            <div class="d-flex justify-content-start mb-3">
              <p class="d-inline fs-4">Basic Details</p>
              <p class="d-inline p-2 text-danger">*Required</p>
            </div>
            <div class="">
              <div class="">
                <form
                  class="needs-validation"
                  novalidate
                  id="bs-validation-form2"
                >
                  <div class="row">
                    <div class="mb-3 col-xl-6">
                      <label
                        class="form-label d-flex justify-content-start"
                        for="bs-validation-name"
                      >
                        FIRST NAME
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="bs-validation-name"
                        placeholder="John"
                        required
                      />
                      <div class="invalid-feedback">
                        Please enter your first name.
                      </div>
                    </div>
                    <div class="mb-2 col-xl-6">
                      <label
                        class="form-label d-flex justify-content-start"
                        for="bs-validation-last-name"
                      >
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="bs-validation-last-name"
                        placeholder="Doe"
                        required
                      />
                      <div class="invalid-feedback">
                        Please enter your last name.
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      className="form-label d-flex justify-content-start"
                      htmlFor="bs-validation-name"
                    >
                      NIC
                    </label>
                    <input
                      type="number"
                      className="form-control mb-3"
                      id="bs-validation-name"
                      placeholder="XXXXXXXXXXXXXXV"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your nic.
                    </div>
                  </div>

                  <div className="mb-2">
                    <label className="form-check-label mt-2 d-flex justify-content-start">
                      Gender
                    </label>
                    <div className="col mt-2 d-flex justify-content-start">
                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          id="bs-validation-radio-male"
                          name="gender"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="bs-validation-radio-male"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          type="radio"
                          id="bs-validation-radio-female"
                          name="gender"
                          className="form-check-input"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="bs-validation-radio-female"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label d-flex justify-content-start mt-3"
                      htmlFor="datepicker1 bs-validation-dob"
                    >
                      DOB
                    </label>
                    <input
                      type="text"
                      className="form-control flatpickr-validation flatpickr-input mb-2"
                      placeholder="YYYY/MM/DD"
                      id="datepicker1"
                      name="bs-validation-dob"
                      required
                      readOnly="readonly"
                    />
                    <div className="invalid-feedback">
                      Please Enter Your DOB
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label d-flex justify-content-start"
                      htmlFor="bs-validation-email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="bs-validation-email"
                      className="form-control"
                      placeholder="john.doe@example.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      className="form-label d-flex justify-content-start"
                      htmlFor="bs-validation-name"
                    >
                      ADDRESS
                    </label>
                    <textarea
                      type="text"
                      className="form-control mb-3"
                      id="bs-validation-name"
                      placeholder="address here"
                      required
                    ></textarea>
                    <div className="invalid-feedback">
                      Please enter your address.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label d-flex justify-content-start"
                      htmlFor="bs-validation-mobile"
                    >
                      MOBILE
                    </label>
                    <input
                      type="number"
                      id="bs-validation-mobile"
                      className="form-control"
                      placeholder="+1XXXXXXXXXX"
                      required

                    />
                    <div className="invalid-feedback">
                      Please enter a valid number
                    </div>
                  </div>

                  <div class="mb-3">
                    <label
                      className="form-label d-flex justify-content-start"
                      htmlFor="image-upload"
                    >
                      PROFILE PHOTO
                    </label>
                    <input
                      type="file"
                      id="image-upload"
                      name="profile-image"
                      accept="image/*"
                      class="form-control p-2"
                      required
                    />
                    <div class="mt-4 mb-4">
                      <img
                        id="profile-image"
                        src="#"
                        alt="Preview"
                        style={{ display: "none" }}
                        class="w-20 h-48 rounded-md"
                      />
                    </div>
                    <div class="invalid-feedback">
                      Please upload a profile photo.
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 d-flex justify-content-start">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        id="position-bottom-end"
                      >
                        Next
                      </button>
                      <button
                        type="reset"
                        class="btn btn-label-secondary ml-4"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="form-tabs-account"
            role="tabpanel"
          >
            <div className=" d-flex justify-content-start">
              <p className="d-inline fs-4 ">Current Work Details</p>
              <p className="d-inline p-2 mb-2 text-danger ">*Required</p>
            </div>
            <form
              className="needs-validation"
              noValidate=""
              id="bs-validation-form2"
            >
              <div className="mb-3">
                <label
                  className="form-label d-flex justify-content-start"
                  htmlFor="bs-validation-name"
                >
                  EMPLOYEEMENT NO
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bs-validation-name"
                  placeholder="XXXXXXX"
                  required
                />
                <div className="invalid-feedback">
                  Please enter your name.
                </div>
              </div>
              <div className="mb-3">
                <label
                  className="form-label d-flex justify-content-start"
                  htmlFor="bs-validation-name"
                >
                  BRANCH NAME
                </label>
                <select
                  className="form-select"
                  id="basic-default-country"
                  required
                  fdprocessedid="9ypqh3"
                >
                  <option value="">select the department</option>
                  <option value="usa">Gem</option>
                  <option value="uk">Jewelry</option>
                  <option value="france">License</option>

                </select>

              </div>
              <div className="mb-3">
                <label
                  className="form-label d-flex justify-content-start mb-2"
                  htmlFor="basic-default-country"
                >
                  DEPARTMENT
                </label>
                <select
                  className="form-select"
                  id="basic-default-country"
                  required
                  fdprocessedid="9ypqh3"
                >
                  <option value="">select the department</option>
                  <option value="usa">Gem</option>
                  <option value="uk">Jewelry</option>
                  <option value="france">License</option>

                </select>
              </div>

              <div className="mb-3">
          <label className="form-label d-flex justify-content-start mb-2" htmlFor="basic-default-country">EMPLOYMENT CATEGORY</label>
          <select className="form-select" id="employee-category" required fdprocessedid="9ypqh3" onChange={handleCategoryChange}>
            <option value="">select the category</option>
            <option value="standard">Standard</option>
            <option value="pl">PL</option>
          </select>
        </div>

              <div className="mb-3">
                <label className="form-label d-flex justify-content-start" htmlFor="employee-type">EMPLOYMENT TYPE</label>
                <select className="form-select" id="employee-type" required fdprocessedid="9ypqh3">
                  <option value="">select the type</option>
                  {employeeTypeOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label
                  className="form-label d-flex justify-content-start"
                  htmlFor="basic-default-country"
                >
                  DESIGNATION
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="bs-validation-name"
                  placeholder="XXXXXXX"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  className="form-label d-flex justify-content-start"
                  htmlFor="bs-validation-dob"
                >
                  STARTING DATE/JOINING DATE
                </label>
                <input
                  type="text"
                  className="form-control flatpickr-validation flatpickr-input"
                  placeholder="YYYY/MM/DD"
                  id="datepicker2"
                  required
                  readOnly="readonly"
                />
                <div className="invalid-feedback"></div>
              </div>

              <div className="mb-3">
                <label
                  className="form-label d-flex justify-content-start"
                  htmlFor="bs-validation-mobile"
                >
                  WORK TELEPHONE
                </label>
                <input
                  type="number"
                  id="bs-validation-mobile"
                  className="form-control "
                  placeholder="+94XXXXXXXXXX"
                  aria-label="john.doe"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid number
                </div>
              </div>
              <div className="row ">
                <div className="col-12 d-flex justify-content-start">
                  <button type="submit" className="btn btn-primary">
                    Next
                  </button>
                  <button
                    type="reset"
                    className="btn btn-label-secondary ml-4"
                    fdprocessedid="mo4gu"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div
            className="tab-pane fade"
            id="form-tabs-social"
            role="tabpanel"
          >
            <div id="form-container">
              {/* Initial form */}
              <div className="form-container" id="form-container-1">
                <p className=" fs-4  d-flex justify-content-start mb-3">
                  Previous Work History
                </p>
                <form className="form-repeater" id="myForm">
                  <div data-repeater-list="group-a">
                    <div data-repeater-item="">
                      <div className="row">
                        <div className="mb-2 col-lg-12 col col-12 mb-0">
                          <label
                            className="form-label d-flex justify-content-start mt-3"
                            htmlFor="form-repeater-1-1"
                          >
                            COMPANY/INSTITUTE NAME
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="john.doe"
                          />
                        </div>
                        <div className="row">
                          <div className="mb-2 col-lg-12 col col-12 mb-0">
                            <label
                              className="form-label d-flex justify-content-start"
                              htmlFor="form-repeater-1-1"
                            >
                              DESIGNATION
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="john.doe"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label d-flex justify-content-start"
                              htmlFor="bs-validation-dob "
                            >
                              STARTING DATE/JOINING DATE
                            </label>
                            <input
                              type="text"
                              className="form-control flatpickr-validation flatpickr-input"
                              placeholder="YYYY/MM/DD"
                              id="datepicker3"
                              required=""
                              readOnly="readonly"
                            />
                            <div className="invalid-feedback">
                              Please Enter Your DOB
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label d-flex justify-content-start"
                            htmlFor="bs-validation-dob"
                          >
                            STARTING DATE/JOINING DATE
                          </label>
                          <input
                            type="text"
                            className="form-control flatpickr-validation flatpickr-input"
                            placeholder="YYYY/MM/DD"
                            id="datepicker4"
                            required=""
                            readOnly="readonly"
                          />
                        </div>
                        <div className="col-lg-12 col-12 d-flex justify-content-end align-items-center mb-2 mt-0">
                          {/* Center the Delete button */}
                          <button
                            type="button"
                            className="btn btn-label-danger mb-4 w-15"
                            data-repeater-delete=""
                            id="confirm-color"
                          >
                            <i className="bx bx-plus me-1 " />
                            <span
                              className="align-middle"
                              style={{ fontSize: "15px" }}
                            >
                              Remove
                            </span>
                          </button>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div className="mb-0 mt-3">
                    <div className="row">
                      <div className="col-12 d-flex justify-content-between">
                        {/* Left-aligned Save and Cancel buttons */}
                        <div>
                          <button type="submit" className="btn btn-primary">
                            Next
                          </button>
                        </div>
                        {/* Right-aligned Add button */}
                        <div>
                          <button
                            className="btn btn-primary"
                            type="button"
                            id="addRepeater"
                          >
                            <i className="bx bx-plus me-1" />
                            <span
                              className="align-middle"
                              style={{ fontSize: "15px" }}
                            >
                              Add More
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="form-tabs-education"
            role="tabpanel"
          >
            <div id="form-container">
              {/* Initial form */}
              <div className="form-container" id="form-container-1">
                <p className=" fs-4 d-flex justify-content-start mb-3 ">
                  Education Qualification
                </p>
                <form className="form-repeater" id="myForm1">
                  <div data-repeater-list="group-a">
                    <div data-repeater-item="">
                      <div className="row">
                        <div className="mb-3 col-lg-12 col col-12 mb-0">
                          <label
                            className="form-label d-flex justify-content-start mt-3"
                            htmlFor="form-repeater-1-1"
                          >
                            UNIVERCITY/INSTITUTE NAME
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="type here"
                          />
                        </div>
                        <div className="row">
                          <div className="mb-3 col-lg-12 col col-12 mb-0">
                            <label
                              className="form-label d-flex justify-content-start"
                              htmlFor="form-repeater-1-1"
                            >
                              QUALIFICATION
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="type here"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label d-flex justify-content-start"
                              htmlFor="basic-default-country"
                            >
                              QUALIFICATION TYPE
                            </label>
                            <select
                              className="form-select"
                              id="basic-default-country"
                              required=""
                              fdprocessedid="9ypqh3"
                            >
                              <option value="">select the category</option>
                              <option value="usa">USA</option>
                              <option value="uk">UK</option>
                              <option value="france">France</option>
                              <option value="australia">Australia</option>
                              <option value="spain">Spain</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-label d-flex justify-content-start"
                              htmlFor="bs-validation-dob"
                            >
                              STARTING DATE/JOINING DATE
                            </label>
                            <input
                              type="text"
                              className="form-control flatpickr-validation flatpickr-input"
                              placeholder="YYYY/MM/DD"
                              id="datepicker5"
                              required=""
                              readOnly="readonly"
                            />
                            <div className="invalid-feedback">
                              Please Enter Your DOB
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label d-flex justify-content-start"
                            htmlFor="bs-validation-dob"
                          >
                            STARTING DATE/JOINING DATE
                          </label>
                          <input
                            type="text"
                            className="form-control flatpickr-validation flatpickr-input"
                            placeholder="YYYY/MM/DD"
                            id="datepicker6"
                            required=""
                            readOnly="readonly"
                          />
                          <div className="invalid-feedback">
                            Please Enter Your DOB
                          </div>
                        </div>
                        <div className="col-lg-12 col-12 d-flex justify-content-end align-items-center mb-3 mt-0">
                          {/* Center the Delete button */}
                          <button
                            type="button"
                            className="btn btn-label-danger mb-4 w-15"
                            data-repeater-delete=""
                          >
                            <i className="bx bx-plus me-1 " />
                            <span
                              className="align-middle"
                              style={{ fontSize: "15px" }}
                            >
                              Remove
                            </span>
                          </button>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div className="mb-0 mt-3">
                    <div className="row">
                      <div className="col-12 d-flex justify-content-between">
                        {/* Left-aligned Save and Cancel buttons */}
                        <div>
                          <button type="submit" className="btn btn-primary">
                            Next
                          </button>
                        </div>
                        {/* Right-aligned Add button */}
                        <div>
                          <button
                            className="btn btn-primary"
                            type="button"
                            id="addRepeater1"
                          >
                            <i className="bx bx-plus me-1" />
                            <span
                              className="align-middle"
                              style={{ fontSize: "15px" }}
                            >
                              Add More
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="form-tabs-dependent" role="tabpanel">
            <div className="mb-3">
              <p className="d-inline fs-4 d-flex justify-content-start mb-4">Dependent Details</p>
            </div>
            <form className="" id="bs-validation-form">
              <div className="mb-3" data-repeater-list="group-a">
                <div className="mb-3" data-repeater-item>
                  <label className="form-label d-flex justify-content-start" htmlFor="">DEPENDENT NAME</label>
                  <input type="text" className="form-control mb-4" id="" placeholder="John Doe" />
                  <div className="invalid-feedback" />
                  <label className="form-label d-flex justify-content-start" htmlFor="">RELATIONSHIP</label>
                  <input type="text" className="form-control" id="" placeholder="Relationship" />
                  <div className="col-lg-12 col-12 d-flex justify-content-end align-items-center mb-5 mt-4">
                    <button type="button" className="btn btn-label-danger   w-15" data-repeater-delete id="confirm-color">
                      <i className="bx bx-plus me-1 " />
                      <span className="align-middle" style={{ fontSize: "15px" }}>Remove</span>
                    </button>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="mb-0 mt-3">
                <div className="">
                  <div className="col-12 d-flex justify-content-between">
                    <div>
                      <button type="submit" className="btn btn-primary">Next</button>
                    </div>
                    <div className="" style={{ marginLeft: "auto" }}>
                      <button className="btn btn-primary" type="button" id="addRepeater2">
                        <i className="bx bx-plus me-1" />
                        <span className="align-middle" style={{ fontSize: "15px" }}>Add More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="tab-pane fade" id="form-tabs-emergency" role="tabpanel">
            <div className="mb-3 d-flex justify-content-start">
              <p className="d-inline fs-4">Emergency Contact</p>
              <p className="d-inline p-2 text-danger">*Required</p>
            </div>
            <form className="needs-validation" noValidate id="bs-validation-form1" style={{ height: "auto" }}>
              <div className="mb-3" data-repeater-list="group-a">
                <div className="mb-3" data-repeater-item>
                  <label className="form-label d-flex justify-content-start" htmlFor="bs-validation-name">
                    NAME
                  </label>
                  <input type="text" className="form-control mb-3" id="bs-validation-name" placeholder="John Doe" required />
                  <div className="invalid-feedback" />
                  <label className="form-label d-flex justify-content-start" htmlFor="bs-validation-relationship">
                    RELATIONSHIP
                  </label>
                  <input type="text" className="form-control mb-3" id="bs-validation-relationship" placeholder="Relationship" required />
                  <div className="invalid-feedback" />
                  <label className="form-label d-flex justify-content-start" htmlFor="bs-validation-mobile">
                    WORK TELEPHONE
                  </label>
                  <input type="number" id="bs-validation-mobile" className="form-control" placeholder="+94XXXXXXXXXX" aria-label="john.doe" required />
                  <div className="invalid-feedback">Please enter a valid number</div>
                  <div className="col-lg-12 col-12 d-flex justify-content-end align-items-center mb-3 mt-4">
                    <button type="button" className="btn btn-label-danger mb-4 w-15" data-repeater-delete="">
                      <i className="bx bx-plus me-1" />
                      <span className="align-middle" style={{ fontSize: "15px" }}>Remove</span>
                    </button>
                  </div>
                  <hr className="mb-3" />
                </div>
              </div>
              <div className="">
                <div className="col-12 d-flex justify-content-between">
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary" type="button" id="addRepeater3">
                      <i className="bx bx-plus me-1" />
                      <span className="align-middle" style={{ fontSize: "15px" }}>Add More</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>


        </div>
      </div>
      {/*              Content*/}

    </div>
  );
}
