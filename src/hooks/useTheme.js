import {ThemeContext} from '../contexts'; 
import {useContext} from 'react'

export  default function useTheme() {
    return useContext(ThemeContext)
}