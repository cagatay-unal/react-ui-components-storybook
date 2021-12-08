import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Button = ({ router, text, status, outline }) => {
    const classStatus =
    status === 'success' ? 'btn-success' :
    status === 'info' ? 'btn-info' :
    status === 'alert' ? 'btn-alert' :
    status === 'warning' ? 'btn-warning' : 'btn-default';

    if (router) {
        return (
            <UIRouterButton href="#" className={`btn ${classStatus} ${outline ? 'btn-outline' : ''}`}>{text}</UIRouterButton>
        );
    }

    return(
        <UIButton type="button" className={`btn ${classStatus} ${outline ? 'btn-outline' : ''}`}>
            {text}
        </UIButton>
    );
};

Button.propTypes = {
    status: PropTypes.oneOf(['default', 'success', 'info', 'alert', 'warning']).isRequired,
    text: PropTypes.string,
    router: PropTypes.bool,
    outline: PropTypes.bool
}

Button.defaultProps = {
    status: 'default',
    text: 'Button',
    router: false,
    outline: false
}

const UIRouterButton = styled.a`
    html body &.btn{
        padding: 14px 24px;
        border-radius: 6px;
        border: 1px solid transparent;
        font-size: 16px;
        line-height: 20px;
        color: white;
        outline: none;
        text-decoration: none;
        cursor: pointer;

        &-outline{ background-color: transparent !important; }

        &-default{
            background-color: var(--default);
            color: var(--defaultTextColor);

            &.btn-outline{
                border-color: var(--default);
            }
        }
        &-success{
            background-color: var(--success);

            &.btn-outline{
                border-color: var(--success);
                color: var(--success);
            }
        }
        &-info{
            background-color: var(--info);
            
            &.btn-outline{
                border-color: var(--info);
                color: var(--info);
            }
        }
        &-alert{
            background-color: var(--alert);

            &.btn-outline{
                border-color: var(--alert);
                color: var(--alert);
            }
        }
        &-warning{
            background-color: var(--warning);

            &.btn-outline{
                border-color: var(--warning);
                color: var(--warning);
            }
        }
    }
`;
const UIButton = styled.button`
    html body &.btn{
        padding: 14px 24px;
        border-radius: 6px;
        border: 1px solid transparent;
        font-size: 16px;
        line-height: 20px;
        color: white;
        outline: none;
        cursor: pointer;

        &-outline{ background-color: transparent !important; }

        &-default{
            background-color: var(--default);
            color: var(--defaultTextColor);

            &.btn-outline{
                border-color: var(--default);
            }
        }
        &-success{
            background-color: var(--success);

            &.btn-outline{
                border-color: var(--success);
                color: var(--success);
            }
        }
        &-info{
            background-color: var(--info);
            
            &.btn-outline{
                border-color: var(--info);
                color: var(--info);
            }
        }
        &-alert{
            background-color: var(--alert);

            &.btn-outline{
                border-color: var(--alert);
                color: var(--alert);
            }
        }
        &-warning{
            background-color: var(--warning);

            &.btn-outline{
                border-color: var(--warning);
                color: var(--warning);
            }
        }
    }
`;