import styled from 'styled-components';
import { hexToRgba } from '@/utils/hexToRgba';
import { french_Cool_blue, french_Cool_gray } from '@/assets/css/variables';

export const HomeImageWrapper = styled.div`
	z-index: 10;

	.img-box {
		width: 180px;
		height: 180px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 50px;
		cursor: pointer;

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background: linear-gradient(${hexToRgba(french_Cool_blue, 0.3)}, ${hexToRgba(french_Cool_gray, 0.3)});
			animation: wave 3s infinite ease-in-out;
		}

		@keyframes wave {
			0% {
				transform: scale(1);
			}
			50% {
				transform: scale(1.1);
			}
			100% {
				transform: scale(1);
			}
		}

		.person-pic {
			width: 160px;
			height: 160px;
			border-radius: 50%;
		}
	}

	.duola {
		width: 200px;
		margin-bottom: 50px;
		cursor: pointer;
	}
`;
