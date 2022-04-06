import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useEmployeeData} from "../store/employeeStore";


const EmployeeInfo = () => {
    let {employee} = useParams();
    const {employeeData, fetchEmployeeData} = useEmployeeData();

    useEffect(() => {
        fetchEmployeeData(employee);
    }, [employee]);

    const employeeRole = employeeData[0];
    const directSubordinates = employeeData[1]?.["direct-subordinates"];


    return (
        <div>
            <h1>Інформація про Юзера</h1>
            {employee}
            <div>
                Роль: {employeeRole}
            </div>
            {employeeData.length > 1 ? //Можна зробити хук з булевим значення, і робити перевіреку на довжину а потім від значення відштовхуватись
                <div>
                    <h3>Підлеглі робітники</h3>
                    {directSubordinates.map((subordinates, index) => (
                        <div key={index} className="employee">
                            <NavLink to={`/${subordinates}`}>{subordinates}</NavLink>
                        </div>
                    ))}
                </div>
                : null}
            <div>
                <NavLink to={"/"}>Main page</NavLink>
            </div>
        </div>
    );
};

export default EmployeeInfo;