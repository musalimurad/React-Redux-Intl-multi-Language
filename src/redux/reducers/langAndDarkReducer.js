import { createSlice } from "@reduxjs/toolkit";
const isLocale = localStorage.getItem("locale")
const defaultLang = isLocale? isLocale : navigator.language;

export const langAndDarkReducer = createSlice({
    name: "languageAndDark",
    initialState:{
        dark: false,
        lang: defaultLang
    },
  
    reducers:{
        setDarkMode: state => {
            state.dark = !state.dark
        },
        setLanguage: (state, action) => {
            state.lang = action.payload
        }
    }
})


export const {setDarkMode, setLanguage} = langAndDarkReducer.actions

export default langAndDarkReducer.reducer