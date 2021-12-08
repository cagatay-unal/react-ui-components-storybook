import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Input = ({ type, status, placeholderText}) => {
    const classNameStatus = 
    status === 'success' ? 'input-success' :
    status === 'info' ? 'input-info' :
    status === 'alert' ? 'input-alert' :
    status === 'warning' ? 'input-warning' : 'input-default';

    return(
        <UIinput 
            type={type}
            className={`input ${classNameStatus}`}
            placeholder={placeholderText}
        />
    )
}

Input.propTypes = {
    type: PropTypes.oneOf(['checkbox', 'color', 'email', 'number', 'password', 'radio', 'range', 'search', 'tel', 'text']).isRequired,
    status: PropTypes.oneOf(['default', 'success', 'info', 'alert', 'warning']).isRequired,
    placeholderText: PropTypes.string
}

Input.defaultProps = {
    type: 'text',
    status: 'default',
    placeholderText: 'placeholder text'
}

const UIinput = styled.input`
    html body &.input{
        width: auto;
        padding: 12px;
        border-radius: 6px;
        border: 2px solid;
        font-size: 14px;
        color: #23262F;
        outline: none;

        &-default{
            border-color: #E6E8EC;
        }
        &-success{
            border-color: #059669;
        }
        &-info{
            border-color: #2563EB;
        }
        &-alert{
            border-color: #F59E0B;
        }
        &-warning{
            border-color: #DC2626;
        }
    }
`;

