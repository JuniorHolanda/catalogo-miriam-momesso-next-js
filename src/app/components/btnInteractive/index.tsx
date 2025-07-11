import { likeProduct } from '@/services/productsMomessoServices';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';
import type { AnimationItem } from 'lottie-web';
import { setItemLocalStorage } from '@/utils/localStorage/localSorage';

type BtnInteractiveProps = {
    productId: string;
    icon: object;
    isLikeBtn: boolean;
    type: string; 
    style: string;
}


const BtnInteractive = ({ productId, icon, isLikeBtn, type, style }: BtnInteractiveProps) => {
	
	const animationRef = useRef<AnimationItem  | null>(null);
	const animation = icon;

	const [action, setAction] = useState(() => {
		const getAction = localStorage.getItem(`${type}${productId}`);
		return getAction === 'true'; // converte para booleano
	});

	//verifica o valor de action na montagem do componente
	useEffect(() => {
		if (action && animationRef.current) {
			const fullframe = animationRef.current.getDuration(true);
			animationRef.current.goToAndStop(fullframe - 1, true);
		}
	}, []);

	//incrementa like no banco, (usar essa função apenas no para likes)
	async function incLikeDataBase(action: boolean): Promise<void> {
		action ? await likeProduct(productId, 1) : await likeProduct(productId, -1);
	}

	//incrementa e decrementa dados na localStorage
	function incLocalStorage(action: boolean) : void {
		action
			? setItemLocalStorage(`${type}${productId}`, true)
			: setItemLocalStorage(`${type}${productId}`, false);
	}
	// gerencia backend e localStorage
	function manipulationData(action: boolean): void {
		if (isLikeBtn) {
			incLikeDataBase(action);
		}
		incLocalStorage(action);
	}

	//anima o btn
	function animationBtn(action: boolean): void {
		if (action && animationRef.current) {
			animationRef.current?.setDirection(1);
			animationRef.current.play();
		} else if (animationRef.current) {
			animationRef.current?.setDirection(-1);
			animationRef.current.play();
		}
	}

	//CONTROLADOR PRINCIPAL
	const handleBtn = async () => {
		const currentAction = !action;
		setAction(currentAction);
		animationBtn(currentAction);
		manipulationData(currentAction);
	};

	return (
		<div>
			<Lottie
				ref={animationRef}
				play={false}
				animationData={animation}
				loop={false}
				className={style}
				onClick={handleBtn}
				style={{ height: '50px' }}
			/>
		</div>
	);
};

export default BtnInteractive;
