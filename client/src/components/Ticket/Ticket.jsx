import style from "./Ticket.module.scss";

export default function Ticket({title, icon}){
  return(
      <>
        <div className={style.container}>
          <div className={style.icon}>
             <div dangerouslySetInnerHTML={{ __html: icon}} />
          </div>
          <p className={style.title}>{title}</p>
          <div className={style.line}></div>
        </div>
      </>
  )
}