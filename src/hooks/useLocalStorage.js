import {useState} from 'react'

export const useLocalStorage =()=>{
    const [value,setValue]=useState('')

    const setItem=(key,value)=>{
        localStorage.setItem(key,value)
        setValue(value)
    }

    const getItem =(key)=>{
        localStorage.getItem(key)
       
    }

    const removeItem =(key)=>{
        localStorage.removeItem(key)
        setValue(null)
    }

        return{value,setItem,getItem,removeItem}
}