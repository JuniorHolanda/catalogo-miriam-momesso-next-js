import styles from './headerSection.module.scss'
import Link from 'next/link';

type typesHeaderSection = {
  id: 'string',
  className: 'string',
}

const HeaderSection = ({id , className}: typesHeaderSection) =>{
  return (
    <header className={className}>
      <div className={styles.titleContainer}>
        
        <Link href="/" className={styles.link}>
          <img src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745342991/logo-novo-para-fundo-black_gbm10y.svg" alt="logo da empresa Momesso Brindes" />
        </Link>
        <h1>{id}</h1>
      </div>
    </header>
  );
}

export default HeaderSection;