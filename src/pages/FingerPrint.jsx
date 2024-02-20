import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function FingerPrint() {
    const [successList, setSuccessList] = useState([]);

    const handleAddButtonClick = (index) => {
        // Show SweetAlert popup
        Swal.fire({
            title: 'Finger Print',
            input: 'text',
            showCancelButton: false,
 
            preConfirm: (value) => {
                setSuccessList([...successList, { index, value }]);
            }
        }).then(() => {
            Swal.fire({
                title: 'Success!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
        });
    };

    const renderButtonOrSuccess = (index) => {
        const successItem = successList.find(item => item.index === index);
        if (successItem) {
            return (
                <div>
                    <span style={{ color: "green" }} >Success!</span>
                    <button className='btn btn-danger p-3 h-2 w-25' style={{ marginLeft: "10px" }} onClick={() => handleRemoveButtonClick(index)}>Remove</button>
                </div>
            );
        } else {
            return (
                <button className='btn btn-primary' onClick={() => handleAddButtonClick(index)}>Add</button>
            );
        }
    };

    const handleRemoveButtonClick = (index) => {
        alert("Are you sure..?")
        setSuccessList(successList.filter(item => item.index !== index));
    };

    return (
        <div className="content-wrapper mt-5">
            <div className="container-xxl flex-grow-1">
                <h4 className="py-3 mb-4">Finger print</h4>

                <div className="card">
                    <div className="input-group input-group-merge p-4" id="attendanceSearch"><span className="input-group-text " id="basic-addon-search31"><i className="bx bx-search"></i></span><input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon-search31" /></div>
                    <div className="table-responsive text-nowrap p-3">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>NIC</th>
                                    <th>Finger_Print_1</th>
                                    <th>Finger_Print_2</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                <tr>
                                    <td><span className="fw-medium">PT12345</span></td>
                                    <td>Saman Kumara</td>
                                    <td>2000XXXXXXXX</td>
                                    <td>{renderButtonOrSuccess(0)}</td>
                                    <td>{renderButtonOrSuccess(1)}</td>
                                </tr>
                                <tr>
                                    <td><span className="fw-medium">PT12346</span></td>
                                    <td>Nimal Perera</td>
                                    <td>2000YYYYYYYY</td>
                                    <td>{renderButtonOrSuccess(2)}</td>
                                    <td>{renderButtonOrSuccess(3)}</td>
                                </tr>

                                <tr>
                                    <td><span className="fw-medium">PT12346</span></td>
                                    <td>Nimal Perera</td>
                                    <td>2000YYYYYYYY</td>
                                    <td>{renderButtonOrSuccess(4)}</td>
                                    <td>{renderButtonOrSuccess(5)}</td>
                                </tr>

                                <tr>
                                    <td><span className="fw-medium">PT12346</span></td>
                                    <td>Nimal Perera</td>
                                    <td>2000YYYYYYYY</td>
                                    <td>{renderButtonOrSuccess(6)}</td>
                                    <td>{renderButtonOrSuccess(7)}</td>
                                </tr>

                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
