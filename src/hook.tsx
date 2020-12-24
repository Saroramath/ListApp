import {useState} from 'react';

export function useLocalStorage(key, defaultValue){
    const getInitialValue = () => localStorage.getItem(key) ?? defaultValue;// changed to a function so only read once, see ch 22
    const [value, setValue] = useState(getInitialValue);//this set the inital value
    const setAndStoreValue = (newValue) => { // we define new function whic 
        setValue(newValue);// uses same setValue to do that function and moreover 
        localStorage.setItem(key,newValue);// store to local storage
    };
    return [value,setAndStoreValue];

} 