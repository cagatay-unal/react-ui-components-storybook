import styled from 'styled-components';

export const Badge = ({text, className}) => {
    return(
        <UIBadge className={`badge badge__${className}`}>{ text }</UIBadge>
    )
}

const UIBadge = styled.span`
    html body &.badge{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 4px 8px;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: 4px;
        color: white;

        &__default{
            background-color: #d91e65;

            &_outline{
                border-color: #d91e65;
                color: #d91e65;
            }
        }

        &__success{
            background-color: var(--success);

            &_outline{
                border-color: var(--success);
                color: var(--success);
            }
        }

        &__info{
            background-color: var(--info);

            &_outline{
                border-color: var(--info);
                color: var(--info);
            }
        }

        &__alert{
            background-color: var(--alert);

            &_outline{
                border-color: var(--alert);
                color: var(--alert);
            }
        }

        &__warning{
            background-color: var(--warning);

            &_outline{
                border-color: var(--warning);
                color: var(--warning);
            }
        }
    }
`;