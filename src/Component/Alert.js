import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        let val = word.charCodeAt(0);
        if (val >= 97 && val <= 122) {
            val = val - 32;
        }
        let char = String.fromCharCode(val);
        let remain = word.substr(1);

        return char + remain;

        
    }
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert
