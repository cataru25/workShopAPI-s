import React from 'react';
const ACTIVE_CLASSNAMES = 'list__item list__item--active';
const INACTIVE_CLASSNAMES = 'list__item';

function HeaderOption(props) {
    const activeOption = props && props.activeOption || "";
    const optionText = props && props.optionText || "";
    const option = props && props.option || "";
    const path = props && props.path || "";
    const onClick = props && props.onClick || "";
    const isActive = activeOption === option;
    const isOnClickFunction = typeof onClick === 'function';
    const itemClassnames = isActive ? ACTIVE_CLASSNAMES : INACTIVE_CLASSNAMES
    
    if (onClick && isOnClickFunction) {
        return (
            <li className={itemClassnames}
                onClick={() => onClick(option, path)}>
                {optionText}
            </li>
        );
    }
    return null;
}

export default HeaderOption
