import style from "./Button.module.scss";
export default function Button({ content, width, type, marginTop, classType }) {
  return (
    <button
      className={`${style.btn} ${
        classType === "primary" ? style.primary : style.secondary
      }`}
      style={{ width: width ?? "", marginTop: marginTop ?? "" }}
      type={type ?? "button"}
    >
      {content}
    </button>
  );
}
