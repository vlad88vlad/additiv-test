//Використав zustand для state-менеджеру, також можна було використати redux

import create from "zustand";
import axios from "axios";


const url = `http://api.additivasia.io/api/v1/assignment/employees/`;


export const useEmployeeData = create(
    (set) => ({
        allEmployeeData: [],
        employeeData: [],
        loading: true,
        error: undefined,
        fetchAllEmployeeData: async () => {
            try {
                const response = await axios.get(url)
                set({allEmployeeData: response.data})
                set({loading: false})
            } catch (exception) {
                set({error: "Something went wrong..."})
            } finally {
                set({loading: false})
            }
        },
        fetchEmployeeData: async (employee) => {
            try {
                const response = await axios.get(url + employee)
                set({employeeData: response.data})
                set({loading: false})
            } catch (exception) {
                set({error: "Something went wrong..."})
            } finally {
                set({loading: false})
            }
        }
    })
)