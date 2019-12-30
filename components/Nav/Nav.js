import React from 'react';
import './Nav.scss';
import {ReactSVG} from 'react-svg'
import LinkTag from "../LinkTag/LinkTag";

const links = [
    {href: '#main', label: 'Главная'},
    {href: '#price', label: 'Стоимость'},
    {href: '#constructor', label: 'Онлайн конструктор'},
    {href: '#why-are-we', label: 'Почему мы'},
    {href: '#feedback', label: 'Отзывы'}
].map(link => {
    link.key = `nav-link-${link.href}`;
    return link
});

const Nav = () => (
    <nav className="nav">
        <div className="container">
            <div className="nav__wrap">
                <div className="nav__menu">
                    <a className="logo" href="/">
                    <ReactSVG src={'/icon/logo.svg'}/>
                </a>
                <ul className="menu">
                    {links.map(({key, href, label}) => (
                        <li key={key}>
                            <LinkTag href={href}
                                     choice="default"
                                     size="small"
                                     onClick={(e) => {
                                         e.preventDefault();
                                         console.log(label)
                                     }}
                            >
                                {label}
                            </LinkTag>
                        </li>
                    ))}
                </ul>
                </div>
                <div className="nav__phone">
                    <span>
                        Заказать звонок
                    </span>
                    <LinkTag href='tel:+78005056533'
                             choice='primary'
                             size='big'
                    >
                        +7-(800)-505-65-33
                    </LinkTag>
                </div>
            </div>
        </div>
    </nav>
);

export default Nav
