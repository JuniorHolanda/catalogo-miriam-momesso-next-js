import React from 'react';
import animationLoader from '@/animation/animation-loader.json';
import Lottie from 'react-lottie-player';

type LoaderDataProps = {
	className?: string;
};

const LoaderData = ( {className}: LoaderDataProps ) => {
	return (
		<div className={className}>
			<Lottie animationData={animationLoader} loop={true} play={true} />
		</div>
	);
};

export default LoaderData;