export const Tab = ({nameTab, onToggleClick}) => (
    <li className='tab-menu__item' data-tabs="tab">
        <a className='tab-menu__link' onClick={() => onToggleClick(nameTab)}>
        <span className='tab-menu__text'>Tab {nameTab}</span>
        </a>
    </li>
)