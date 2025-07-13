import React from 'react';
import HeaderSection from './components/HeaderSection';
import styles from './page.module.scss';
import SearchBar from './components/SearchBar';
import HeroSectionDesktop from './components/HeroSectionDesktop';
import AllCategorySection from './components/AllCategorySection';
import { isMobileUserAgent } from '@/utils/isMobileUserAgent/isMobileUserAgent';
import { headers } from 'next/headers';

const HomeSection = async () => {
	const headersList = await headers();
	const userAgent = headersList.get('user-agent') || '';
	const isMobile = isMobileUserAgent(userAgent);

	return (
		<main className={styles.wrapper}>
			{isMobile && <HeaderSection />}
			<SearchBar className={styles.containerInpt} btnSubmit={styles.btnSubmit} />
			{!isMobile && <HeroSectionDesktop />}
			<AllCategorySection />
		</main>
	);
};

export default HomeSection;
