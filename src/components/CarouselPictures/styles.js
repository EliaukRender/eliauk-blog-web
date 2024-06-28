import styled from 'styled-components';
import { mld_blue_one } from '@/assets/css/variables';
import { hexToRgba } from '@/utils/hexToRgba';

export const CarouselPicturesStyles = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	.carousel-img {
		position: absolute;
		width: 100%;
		border-radius: 0 20px 20px 0;
		cursor: move;
	}

	.next,
	.prev {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 9;
		padding: 10px;
		background-color: ${hexToRgba(mld_blue_one, 0.5)};
		font-size: 20px;
		color: #ffffff;
		cursor: pointer;

		&:hover {
			background-color: ${hexToRgba(mld_blue_one, 0.8)};
		}
	}

	.next {
		right: 0;
		border-radius: 50% 0 0 50%;
	}

	.prev {
		left: 0;
		border-radius: 0 50% 50% 0;
	}

	.anticon-right {
		transform: translateX(3px);
	}

	.anticon-left {
		transform: translateX(-3px);
	}
`;
