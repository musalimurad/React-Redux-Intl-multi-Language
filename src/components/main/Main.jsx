import React from 'react'
import { useSelector } from 'react-redux'
import './main.scss'
import { IntlProvider, FormattedMessage} from 'react-intl'
import { mainLang } from '../../language/Language'


const Main = () => {
  const {lang} = useSelector(state => state.langAndDark)
  
 
  return (
    <div id='main-section'>
        <div className="container">
      <IntlProvider locale={lang} messages={mainLang[lang]}>
      <div className="main-head">
         <h1 className='text-center'><FormattedMessage id='title'/></h1>
       </div>
       <div className="main-content">
         <p className='text-center'><FormattedMessage id='description'/></p>
       </div>
      </IntlProvider>
        </div>
      </div>
  )
}

export default Main