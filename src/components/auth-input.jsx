import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const OpenEye = ({setShow}) => {
  return (
      <FontAwesomeIcon
          icon={faEye}
          className={"absolute end-0 mt-2 me-2"}
          size={"2xl"}
          onClick={() => setShow(true)}
      />
  )
}

const CloseEye = ({setShow}) => {
  return (
      <FontAwesomeIcon
          icon={faEyeSlash}
          className={"absolute end-0 mt-2  me-2"}
          size={"2xl"}
          onClick={() => setShow(false)}
      />
  )
}



export const AuthInput = ({
  value,
  setValue,
  type,
  placeholder,
  error,
  setError,
  name,
  required=false,
  showError=false,
  ...rest
}) => {

  const handleChange = (e) => {
    if (error) setError(name, "");
    if (e.target.value.trim() === '' && required){
      setError(name, `Field is required`);
    }
    setValue(e.target.value);
    setError('general', "");
  }

  useEffect(() => {
    if (value.trim() === '' && required)
      setError(name, `Field is required`);
  }, []);

  const [show, setShow] = useState(type==="password" ? false : undefined);

  return (
    <div className={`${show === undefined ? undefined : "relative"}`}>
      <input
        type={show === undefined ? type : (show ? "text" : "password")}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full p-3 border border-purple-700 rounded-md text-white"
        {...rest}
      />
      { show !== undefined &&  (!show ? <OpenEye setShow={setShow} />  : <CloseEye setShow={setShow} />)}
      <p className="text-red-500 text-sm h-7 w-full">
        {showError && error}
      </p>
    </div>
  );
};
