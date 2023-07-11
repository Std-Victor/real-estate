import style from "./Login.module.scss";
import FormInput from "../Form-input/FormInput.jsx";
import Button from "../Button/Button.jsx";
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/user/user.api.calls.js";

export default function Login() {
    const dispatch = useDispatch();
    const onSubmit = e => {
        e.preventDefault()
        const form_data = new FormData(e.target)
        const user_data = Object.fromEntries(form_data);
        e.target.reset();
        dispatch(loginUser(user_data))
    }
  return (
    <>
      <form className={style.form__body} method="dialog" onSubmit={onSubmit}>
        <FormInput
          title="Email"
          name="email"
          type="email"
          placeholder="Enter you email..."
          required
        />
        <FormInput
          title="Password"
          name="password"
          type="password"
          placeholder="Enter you password..."
          required
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          autoComplete = "off"
        />
        <Button type="submit" classType="primary" content="Log in" width="100%" marginTop="3rem" />
      </form>
    </>
  );
}
