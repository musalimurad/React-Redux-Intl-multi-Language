import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './header.scss'
import { IntlProvider, FormattedMessage } from 'react-intl'
import { headerLang } from '../../language/Language'


const Header = () => {

    const {lang} = useSelector(state => state.langAndDark)
   
  return (
    <header id='header'>
        <div className="container d-flex justify-content-between align-items-center">
            <div className="logo">
                <h1>Logo movcud dil: {lang}</h1>
                
            </div>
          <IntlProvider locale={lang} messages={headerLang[lang]}>
          <nav className="nav-menu">
                <ul className='d-flex list-unstyled m-0'>
                    <li>
                        <NavLink className="nav-menu-link" to="/"><FormattedMessage id='home'/></NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-menu-link" to="/About"><FormattedMessage id='about'/></NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-menu-link" to="/Contact"><FormattedMessage id='contact'/></NavLink>
                    </li>
                </ul>
            </nav>
          </IntlProvider>
        </div>
    </header>
  )
}

export default Header