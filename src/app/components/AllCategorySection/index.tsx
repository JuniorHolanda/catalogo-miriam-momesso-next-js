'use client';
import MediaQuery from '@/utils/MediaQuery/MediaQuery';
import { useRef } from 'react';
import CategorySection from '../CategorySection';
import DataCardsCategory from '@/data/DataCardsCategory.json';
import CardCategory from '../CardCategory';


import styles from './allCategorySection.module.scss'


const AllCategorySection = () => {

    const isMobile = MediaQuery('(max-width: 700px)');
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const scrollToSection = (id: number) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {isMobile && (
                <nav className={styles.containerCard}>
                    {DataCardsCategory.map((card) => (
                        <CardCategory
                            onClick={() => scrollToSection(card.id)}
                            key={card.id}
                            {...card}
                        />
                    ))}
                </nav>
            )}

            {DataCardsCategory.map((card, index) => (
                <CategorySection
                    key={card.id}
                    {...card}
                    ref={(el) => { (sectionRefs.current[index] = el) }}
                />
            ))}
        </div>
    )
}

export default AllCategorySection
