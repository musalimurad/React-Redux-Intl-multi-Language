import React from 'react'
import './footer.scss'
import {useSelector} from 'react-redux'
import { IntlProvider, FormattedMessage } from 'react-intl'
import LanguageActions from '../../redux/actions/LanguageActions'
import { footerLang } from '../../language/Language'
const Footer = () => {
  const {lang} = useSelector(state => state.langAndDark)

  return (
    <footer id='footer'>
      
        <div className="container">
          <IntlProvider locale={lang} messages={footerLang[lang]}>
          <div className="head-footer-text">
                <h2 className='text-center'>select language  movcud dil: {<FormattedMessage id='home'/>}</h2>
            </div>
           <LanguageActions/>
          </IntlProvider>
           
        </div>
    </footer>
  )
}

export default Footer