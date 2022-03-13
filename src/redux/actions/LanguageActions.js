import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../reducers/langAndDarkReducer'
import '../../components/footer/footer.scss'

const LanguageActions = () => {
    const dispatch = useDispatch()
  const {lang} = useSelector(state => state.langAndDark)

    const handleLanguage = lang => {
        dispatch(setLanguage(lang));
      }
      useEffect(() => {
        localStorage.setItem("locale",lang)
   }, [lang])
  return (
    <div className="select-language">
    <button>Azerbaijan</button>
    <button onClick={()=> handleLanguage("tr-TR")}>Turkey</button>
    <button onClick={()=> handleLanguage("en-US")}>English</button>
  </div>
  )
}

export default LanguageActions