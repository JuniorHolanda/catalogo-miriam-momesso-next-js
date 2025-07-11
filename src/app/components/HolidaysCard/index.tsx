import styles from './holiday.module.scss';
import Link from 'next/link';
import slugify from 'slugify';

type HolidayProps = {
	card: {
		id: number;
		category: string;
		description: string;
		img: string;
		altImg: string;
	}
	};

const Holiday = ({ card }: HolidayProps) => {
	return (
		<Link
			href={`/category/${slugify(card.category, {
				lower: true,
				strict: true,
			})}`}
			className={styles.wrapper}
		>
			<div className={styles.containerImg}>
				<img src={card.img} alt={card.altImg} />
			</div>

			<div className={styles.containerInfo}>
				<h2>{card.category}</h2>
				<p>{card.description}</p>
			</div>
		</Link>
	);
};

export default Holiday;
