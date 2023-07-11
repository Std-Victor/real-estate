import style from "./SectionHead.module.scss";

export default function SectionHead({title}){
  return(
      <div className={style.container}>
        <h1>{title}</h1>
        <a href="/property">
          <span>Explore All</span>
          <span>
                <svg
                    width={35}
                    height={15}
                    viewBox="0 0 35 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M1 7.5h32.75m-5.625-5.625L33.75 7.5l-5.625 5.625"
                      stroke="#0065C1"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                </svg>
              </span>
        </a>
      </div>
  )
}