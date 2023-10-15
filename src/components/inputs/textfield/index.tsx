import { useState } from "react"
import validateInput from '../../../utils/validator'
import {BsExclamationLg, BsFillCheckCircleFill} from 'react-icons/bs'
import { LuEye, LuEyeOff } from 'react-icons/lu'

interface TextProps {
  text: string,
  icon?: string,
  lefticon?: string,
  className?: string,
  value?: string,
  type?:string,
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function TextField({text, icon ='', lefticon = "", className, value = "", onChange, type ="text"}: TextProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValidity, setInputValidity] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputCss = `w-full text-primary-100 placeholder-primary-100 border-[1px] border-primary-50 outline-none rounded-lg px-[14px] py-[8px] font-primary text-[15px] ${lefticon ? 'pl-[40px]' :'pr-[40px]'}`

  const toggleVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }
  const validate = () => {
    if (type == 'search') return
    try {
      setErrorMessage("")
      validateInput(type, value, `${type} cannot be blank`)
      setInputValidity(true);
      setErrorMessage("validated")
    } catch(error: unknown ) {
      if (error instanceof Error) {
        setInputValidity(false);
        setErrorMessage(error.message)
      }
    }
  }


  const iconCss = (icon: string) => {
    switch(icon) {
      case "eye": return (
        <div onClick={toggleVisibility} className="cursor-pointer">
          {
            showPassword ? (
              <LuEyeOff className="text-[20px] my-auto text-primary-100" bounce/>
            ) : (
              <LuEye className="text-[20px] my-auto text-primary-100"/>
            )
          }
        </div>
      )
      case "failed": return (
        <div onClick={toggleVisibility}>
          <BsExclamationLg className="text-[20px]" style={{color: "rgb(244 63 94)",}}/>
        </div>
      )
      case "success": return (
        <div onClick={toggleVisibility}>
          <BsFillCheckCircleFill className="text-[20px]" style={{color: "rgb(34 197 94)",}}/>
        </div>
      )
      case "search": return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" stroke="#32D583" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      )
      default: return ""
    }
  }

  return (
    <div className="relative">
      <input 
        type={showPassword ? 'text' : type}
        placeholder={text} 
        className={`${inputCss} ${className}`}
        value={value}
        onChange={onChange}
        onBlur={validate}
      />
      {
        !inputValidity && errorMessage && (
          <div className="text-left text-[12px] text-rose-500 font-medium font-primary pt-[6px] ml-[4px]">{errorMessage}</div>
        )
      }
      <div className="absolute h-full top-0 flex items-center left-[10px]">{iconCss(lefticon)}</div>
      <div className="absolute top-[0px] translate-y-[50%] right-[14px]">{iconCss(errorMessage ? (inputValidity ? 'success' : 'failed') : icon)}</div>
    </div>
  )
}