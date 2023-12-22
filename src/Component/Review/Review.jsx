import styles from './Review.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { client_reviews } from '../../Assets/GoogleReview';
import {Rating} from '@mui/material';


export default function Review(){
    return(<>
    
    <div className={styles.parentWrapper}>
        <p className={styles.reviewHeader}>People Say The Nicest Things</p>
        <Swiper
            slidesPerView={3}
            spaceBetween={0}
            autoplay={{ delay: 4000}}
            modules={[Autoplay]}
            className="mySwiper"
        >
            {client_reviews.map((client, idx)=>{
                    return(<SwiperSlide key={idx}>
                    <div className={styles.reviewItems}>
                        <div className={styles.wrapper}>
                            <div className={styles.clientPhoto}>
                                <img src={client.image} alt={client.name} />
                            </div>
                            <div className={styles.nameLocationStars}>
                                <div className={styles.clientName}>{client.name}</div>
                                <div className={styles.clientLocation}>{client.location}</div>
                                <div className={styles.rating}><Rating name="half-rating-read" defaultValue={client.Rating} precision={0.5} readOnly /></div>
                            </div>
                           
                        </div>
                        <div className={styles.reviewBody}>
                            {client.review}
                        </div>
                    </div>
                </SwiperSlide>)
                
            })}
        </Swiper>
    </div>
    </>)
}