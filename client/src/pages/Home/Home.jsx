import image_01 from '../../assets/image_01.png';
import image_02 from "../../assets/image_02.png";
import image_03 from "../../assets/image_03.png";
import image_04 from "../../assets/image_04.png";
import image_05 from "../../assets/image_05.png";
import image_06 from "../../assets/image_06.png";
import image_08 from "../../assets/image_08.png";
import image_09 from "../../assets/image_09.png";
import image_10 from "../../assets/image_10.png";
import image_11 from "../../assets/image_11.png";
import image_12 from "../../assets/image_12.png";
import image_13 from "../../assets/image_13.png";

import style from "./Home.module.scss";

import SearchForm from "../../components/Search-Form/SearchForm.jsx";
import Ticket from "../../components/Ticket/Ticket.jsx";
import Card from "../../components/Card/Card.jsx";
import LeftSection from "../../components/Left-Section/LeftSection.jsx";

import icons from "../../assets/vsg_icons.json";
import SectionHead from "../../components/Section-Head/SectionHead.jsx";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {togglePageExists} from "../../redux/guest/guest.slice.js";

export default function Home(){
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(togglePageExists(true))
  }, [])
  return(
      <>
        <header className={style.header}>
          <div className={style.__background}>
            <div className={style.__left}></div>
            <div className={style.__right}>
              <img src={image_01} alt="dream home"/>
            </div>
          </div>
          <div className={style.__main}>
            <div className={style.__title}>
              <h1>Find your next dream home</h1>
              <p>Magnam consequatur quos reiciendis exercitationem modi quaerat voluptas. Voluptatem reiciendis voluptatem.
                Repellendus labore voluptatem aut voluptas libero in.</p>
            </div>
            <div className={style.__search}>
              <SearchForm />
            </div>
            <div className={style.__tickets}>
              {icons.tickets.map((item, index) => <Ticket key={index} {...item} />)}
            </div>
          </div>
        </header>
        <section className={style.services}>
          <LeftSection title="Our Services" header="We’re Here To help you to find your dream house." />
          <div className={style.services__right_side}>
            <div className={style.front__side}>
              <img src={image_02} alt=""/>
            </div>
            <div className={style.back__side}>
              <img src={image_03} alt=""/>
            </div>
          </div>
        </section>
        <section className={style.recommendation}>
          <SectionHead title="Best recommendation" />
          <div className={style.recommendation__body}>
            <Card image={image_04} />
            <Card image={image_05} />
            <Card image={image_06} />
          </div>
        </section>
        <section className={style.benefits} id="benefits">
          <LeftSection title="Benefits" header="Why choose us" />
          <div className={style.benefits__right_side}>
            <div className={style.front__side}>
              <img src={image_08} alt=""/>
            </div>
            <div className={style.back__side}></div>
          </div>
        </section>
        <section className={style.last_news}>
          <SectionHead title="See our latest news & read blogs" />
          <div className={style.grid_temp}>
            <div className={style.item__a}>
              <img src={image_09} alt=""/>
            </div>
            <div className={style.item__b}>
              <img src={image_10} alt=""/>
            </div>
            <div className={style.item__c}>
              <img src={image_11} alt=""/>
            </div>
            <div className={style.item__d}>
              <img src={image_12} alt=""/>
            </div>
          </div>
        </section>
        <section className={style.testimonial} id="testimonial">
          <div className={style.backgound_image}>
            <img src={image_13} alt=""/>
            <div className={style.mask}>
              <h1>See what our customers said about us</h1>
            </div>
          </div>
          <div className={style.testimonials}>
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </section>
      </>
  )
}