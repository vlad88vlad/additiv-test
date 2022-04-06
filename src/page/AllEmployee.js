import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useEmployeeData} from "../store/employeeStore";


const AllEmployee = () => {
    const {allEmployeeData, fetchAllEmployeeData, error, loading} = useEmployeeData();
    useEffect(() => {
        fetchAllEmployeeData();
    }, [])

    return (
        <div>
            <h1>Список робітників</h1>
            <div>{error ? error : loading ? "Loading..."
                : allEmployeeData.map((employee, index) => (
                    <div key={index} className="employee">
                        <NavLink to={employee}>{employee}</NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllEmployee;