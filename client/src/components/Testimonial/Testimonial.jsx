import style from "./Testimonial.module.scss";
import user from "../../assets/user.jpg";

export default function Testimonial(){
  return(
      <div className={style.container}>
        <div className={style.user__info}>
          <div className={style.user__image}>
            <img src={user} alt=""/>
          </div>
          <div className={style.user__data}>
            <p>hanna schleifer</p>
            <span>Top customer</span>
          </div>
        </div>
        <p className={style.user__testi}>
          Et animi enim consequuntur at numquam possimus dolorem. Quis quasi earum
        </p>
        <p className={style.date}>Date: 02-04-2023</p>
      </div>
  )
}