import React from 'react'
import PropTypes from 'prop-types';
import Counter from './Counter'


export default function Employee(props) {

    return (
        <>
            <h2>Employee</h2>
            <Counter employee={props.employee} />
            <div className="list-group mb-4">
                {props.employee.map((employe, id) =>
                    <div
                        className="list-group-item d-flex justify-content-between align-item-center bd-callout-warning"
                        key={id}>

                        <div className="employe">
                            <i className="mr-2 fas fa-user"></i> {employe.name}</div>
                        <div>
                            <span
                                onClick={() => props.onStatus(employe.name)}
                                className={"badge badge-pill ml-4 " + (employe.available ? "badge-success" : "badge-warning")}>{employe.available ? "Available" : "Not available"}</span>
                        </div>

                    </div>

                )}
            </div>
        </>
    )
}

Employee.propTypes = {
    employee: PropTypes.array.isRequired,
    onStatus: PropTypes.func.isRequired
};