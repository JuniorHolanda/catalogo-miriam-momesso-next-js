'use client';

import styles from './favoriteSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Importa os estilos do Swipper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import { getProducts } from '@/services/productsMomessoServices';
import { useState, useEffect } from 'react';
import CardSearch from '../CardSearch';
import MediaQuery from '@/utils/MediaQuery/MediaQuery';
import { Product } from '@/types/AllTypes';
import { flightRouterStateSchema } from 'next/dist/server/app-render/types';

type FavoriteSectionProps = {
	style?: string;
	listId: string[];
}

const FavoriteSection = ({ style, listId }: FavoriteSectionProps) => {
	const isMobile = MediaQuery('(max-width: 700px)');
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await getProducts(); // já trata erros
			setProducts(response);
		};
		fetchProducts();
	}, []);

	const favoriteProducts = products.filter((product) => listId.includes(product._id));

	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.cta}>
					<h2 className={styles.title}>
						Seus produtos <br />
						<strong>favoritos</strong>
						<br />em um único lugar
					</h2>
					<p className={styles.text}>
						Nesta seção ficam os produtos que você marcou como favorito.
						<br /> Assim, <strong>sempre que quiser rever suas melhores escolhas, é só passar por aqui.</strong>
						<br />Nada de perder tempo procurando de novo, seus favoritos estão todos reunidos.
					</p>
				</div>

				<div className={styles.swiper}>
					<div className={styles.swiperContainer}>
						<Swiper
							slidesPerView={isMobile ? 1.3 : 5}
							spaceBetween={20}
							navigation={true}
							pagination={{ clickable: true }}
							loop={true}
							modules={[Autoplay, Navigation, Pagination, EffectFade]}
							autoplay={{
								delay: 3500,
								disableOnInteraction: false,
							}}
							speed={1500}
						>
							{favoriteProducts.map((item) => (
								<SwiperSlide>
									<CardSearch key={item._id} product={item} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FavoriteSection;
