import HeaderSection from '../../components/HeaderSection';
import styles from './categoryPage.module.scss';
import dataHoliday from '@/data/holyDay.json';
import CardSearch from '../../components/CardSearch';
import LoaderData from '../../components/Loader';
import { getProducts } from '@/services/productsMomessoServices';
import { Holiday, Product } from '@/types/AllTypes';
import { slugifyText } from '@/utils/slugfyText';

type Props = {
	params: {
		slug: string;
	};
};

const CategoryPage = async ({ params }: Props) => {

	const categorySlugified = params.slug;
	console.log('Categoria:', categorySlugified);

	const title: string | undefined = dataHoliday.find((item: Holiday) => {
		const slugTitle = slugifyText(item.category);
		return slugTitle === categorySlugified;
	})?.category;

	const products = await getProducts()

	return (
		<section className={styles.wrapper}>
			<HeaderSection id={title || params.slug} className={styles.headerSection} />
			<div className={styles.container}>
				{!products || products.length === 0 ? (
					<LoaderData className={styles.loaderData} />
				) : (
					products.filter((card: Product) =>
						card.category.some((categ) => slugifyText(categ) === categorySlugified)
					).map((card: Product) => <CardSearch key={card._id} product={card} />)
				)}
			</div>
		</section>
	);
};

export default CategoryPage;
