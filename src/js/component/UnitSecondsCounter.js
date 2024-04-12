import React from "react";

const UnitSecondsCounter = (props) => {

    return (
        <div className="col gx-0">
            <div className="unitSecond d-flex justify-content-center align-items-center">
                <span>
                    {props.UnitSeconds}
                </span>
            </div>
        </div>
    )
}

export default UnitSecondsCounter