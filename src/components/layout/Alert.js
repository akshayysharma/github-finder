import React from 'react'

function Alert({alert}) {
    return (
        alert !== null && (
            <div className={`alert alert-alert.type}`} data-testid="alert">
                <i className="fas fa-info-circle"></i>{" "}{alert.msg}
            </div>
        )
    )
}

export default Alert
