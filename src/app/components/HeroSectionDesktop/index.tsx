'use client';
import styles from './heroSectionDesktop.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Importa os estilos do Swipper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import dataHoliday from '@/data/holyDay.json';
import Holiday from '../HolidaysCard';
import FavoriteSection from '../../components/FavoriteSection';


const HeroSectionDesktop = () => {
	const allKeyStorage = Object.keys(localStorage);
	const favoriteKeys = allKeyStorage.filter((key) => key.includes('favorite'));
	const productId = favoriteKeys.map((key) => key.replace('favorite', ''));

	return (
		<section className={styles.wrapper}>
			{productId.length >= 5 && <FavoriteSection listId={productId} />}
			<div className={styles.content}>
				<div className={styles.cta}>
					<h2 className={styles.title}>Confira nossas sugestões para datas e eventos</h2>
					<p className={styles.text}>
						Ou se preferir, solicite sugestões exclusivas para o seu evento.
					</p>
					<button className={styles.btn}>Sugestões exclusivas</button>
				</div>

				<div className={styles.swiper}>
					<div className={styles.swiperContainer}>
						<Swiper
							slidesPerView={3}
							spaceBetween={20}
							navigation={true}
							pagination={{ clickable: true }}
							loop={true}
							modules={[Autoplay, Navigation, Pagination, EffectFade]}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false, // continua mesmo com interações
							}}
							speed={1500}
						>
							{dataHoliday.map((item) => (
								<SwiperSlide>
									<Holiday key={item.id} card={item} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSectionDesktop;
