import style from "./FormInput.module.scss";
import {useState} from "react";

export default function FormInput({
  name,
  title,
  placeholder,
  type,
  onChange,
  ...props
}) {

  const [focused, setFocused] = useState(false)

  return (
    <>
      <div className={style.container}>
        <label htmlFor={title}>{title}</label>
        <input
          type={type}
          name={name}
          id={title}
          placeholder={placeholder}
          {...props}
          onChange={onChange}
          onBlur={()=> setFocused(true)}
          focused={focused.toString()}
          onFocus={()=> name === "conform_password" && setFocused(true)}
        />
      </div>
    </>
  );
}
