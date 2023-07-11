import style from "./SearchForm.module.scss";
import {useState} from "react";
import Button from "../Button/Button.jsx";

export default function SearchForm(){
  const [rent, setRent] = useState(true)
  const handleSubmit = e => {
    e.preventDefault()

  }
  return(
      <>
        <form className={style.form_body} onSubmit={handleSubmit}>
          <div className={style.from__head}>
            <button className={rent ? style.active : ""} onClick={()=> setRent(!rent)}>Rent</button>
            <button className={!rent ? style.active : ""} onClick={() => setRent(!rent)}>Sell</button>
          </div>
          <div className={style.form__body}>
            <div className={style.form_inside}>
              <select name="property_type" id="type">
                <option value="">Property type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="modern house">Modern House</option>
                <option value="contemporary house">contemporary house</option>
              </select>
              <div className={style.form__control}>
                <svg
                    width={18}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M16.9954 15.3417L13.2853 11.63C14.3977 10.1804 14.9171 8.36189 14.738 6.54341C14.559 4.72493 13.6949 3.04265 12.3211 1.83782C10.9473 0.632996 9.16667 -0.00415771 7.34037 0.0556126C5.51408 0.115383 3.7789 0.867602 2.48683 2.15968C1.19475 3.45175 0.442531 5.18693 0.382761 7.01323C0.322991 8.83952 0.960144 10.6202 2.16497 11.994C3.3698 13.3678 5.05208 14.2318 6.87056 14.4109C8.68904 14.5899 10.5075 14.0706 11.9572 12.9581L15.6704 16.6722C15.7577 16.7594 15.8612 16.8286 15.9751 16.8758C16.0891 16.923 16.2112 16.9473 16.3345 16.9473C16.4578 16.9473 16.58 16.923 16.6939 16.8758C16.8078 16.8286 16.9114 16.7594 16.9986 16.6722C17.0858 16.585 17.155 16.4815 17.2022 16.3675C17.2493 16.2536 17.2736 16.1315 17.2736 16.0081C17.2736 15.8848 17.2493 15.7627 17.2022 15.6488C17.155 15.5348 17.0858 15.4313 16.9986 15.3441L16.9954 15.3417ZM2.26967 7.25502C2.26967 6.20431 2.58124 5.17719 3.16499 4.30355C3.74873 3.42992 4.57843 2.749 5.54916 2.34691C6.5199 1.94482 7.58806 1.83961 8.61859 2.0446C9.64911 2.24958 10.5957 2.75555 11.3387 3.49852C12.0816 4.24148 12.5876 5.18808 12.7926 6.2186C12.9976 7.24913 12.8924 8.31729 12.4903 9.28803C12.0882 10.2588 11.4073 11.0885 10.5336 11.6722C9.66 12.2559 8.63288 12.5675 7.58217 12.5675C6.17365 12.5661 4.82324 12.0059 3.82726 11.0099C2.83129 10.014 2.27112 8.66354 2.26967 7.25502Z"
                      fill="#222222"
                      fillOpacity={0.9}
                  />
                </svg>
                <input type="text" name="search_value" placeholder="Search by location or peroperty ID..." />
              </div>
              <Button content="Find now" classType="primary" />
            </div>
          </div>
          <div className={style.form__footer}>
            <div className={style.form__control}>
              <input type="checkbox" name="exclusive_rep" id="exclusive"/>
              <label htmlFor="exclusive">Only properties in exclusive representation</label>
            </div>
            <div className={style.form__control}>
              <input type="checkbox" name="new_dev" id="new"/>
              <label htmlFor="new">Only new developments</label>
            </div>
          </div>
        </form>
      </>
  )
}