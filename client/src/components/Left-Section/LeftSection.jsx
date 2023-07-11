import style from "./LeftSection.module.scss";
import icons from "../../assets/vsg_icons.json";

export default function LeftSection({title, header}){
return(
    <div className={style.section__left_side}>
      <p className={style.section__title}>{ title}</p>
      <h1 className={style.section__header}>{ header }</h1>
      <p className={style.section__sub_header}>
        Ipsa esse accusamus optio est. Veniam molestias voluptate ipsum non officia quo aut molestias.
        Quam at et amet dolores modi recusandae ex. Molestiae soluta accusantium recusandae quidem sed explicabo.
      </p>
      <div className={style.section__quotes}>
        {icons.services.map((item, index) => <div className={style.quote} key={index}>
          <span dangerouslySetInnerHTML={{ __html : item.icon}} />
          <span>{ item.title }</span>
        </div>)}
      </div>
    </div>
)
}