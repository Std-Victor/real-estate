import FormInput from "../Form-input/FormInput.jsx";
import Button from "../Button/Button.jsx";

import image_14 from "../../assets/image_14.png";

import style from "./SignUp.module.scss";
import Modal from "../Modal/Modal.jsx";
import ImageCropper from "../Image-Cropper/ImageCropper.jsx";
import { useState} from "react";
import {useDispatch} from "react-redux";
import {SignUpUser} from "../../redux/user/user.api.calls.js";

export default function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageURL, setImageURL] = useState();
  const [file, setFile] = useState();
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const handleChange = (e) => {
    if (e.target.files === null) return;
    setFile(e.target.files[0]);
    setIsOpen(true);
    setImageURL(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit = e => {
    e.preventDefault()
    const form_data = new FormData(e.target)
    const user_data = Object.fromEntries(form_data);
    console.log(user_data)
    dispatch(SignUpUser({...user_data}))
  }

  return (
    <>
      <form className={style.form__body} method="dialog" onSubmit={onSubmit} encType="multipart/form-data" >
        <div className={style.image__control}>
          <input
            type="file"
            name="user_profile"
            id="img"
            hidden
            onChange={handleChange}
          />
          <label htmlFor="img">
            <img src={imageURL ?? image_14} alt="user_profil" />
          </label>
        </div>
        <div className={style.fields__control}>
          <div>
            <FormInput
              title="First name"
              type="text"
              name="first_name"
              placeholder="Enter your first name..."
              pattern="^[a-zA-Z]{3,15}$"
              required
            />
            <FormInput
              title="Last name"
              type="text"
              name="last_name"
              placeholder="Enter your last name..."
              pattern="^[a-zA-Z]{3,15}$"
              required
            />
          </div>
          <div>
            <FormInput
              title="Email"
              name="email"
              type="email"
              placeholder="Enter you email..."
              required
            />
            <FormInput
              title="Phone number"
              type="text"
              name="phone_number"
              placeholder="Enter your phone number..."
              required
              pattern="^\+?[0-9]{8,}$"
            />
          </div>
          <div>
            <FormInput
              title="Password"
              name="password"
              type="password"
              placeholder="Enter you password..."
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
              autoComplete = "off"
              required
              onChange={e => setPassword(e.target.value)}
            />
            <FormInput
              title="conform password"
              name="password_confirmation"
              type="password"
              placeholder="Conform you password..."
              pattern ={password.replaceAll("$", "\\$").replaceAll("^", "\\^")}
              autoComplete = "off"
              required
            />
          </div>
        </div>
        <Button
          classType="primary"
          type="submit"
          content="Sign up"
          width="31rem"
          marginTop="5rem"
        />
      </form>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ImageCropper
          IMAGE={imageURL}
          aspect={1}
          setImageURL={setImageURL}
          setfile={setFile}
          setIsOpen={setIsOpen}
        />
      </Modal>
    </>
  );
}
