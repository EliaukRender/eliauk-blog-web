import styled from 'styled-components';
import { music_green } from '@/assets/css/variables';

export const ClassificationStyles = styled.div`
	width: 100%;
	height: 90px;

	.menu-title {
		font-size: 22px;
		font-weight: 600;
		margin-bottom: 20px;
	}

	.title-list {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 15px;
		height: 25px;

		.item {
			margin-left: 2px;
			margin-right: 20px;
			cursor: pointer;

			&:first-child {
				margin-left: 0;
			}

			&:last-child {
				margin-right: 0;
			}
		}

		.item-selected {
			display: inline-block;
			position: relative;
			color: ${music_green};

			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -10px;
				width: 100%;
				height: 2px;
				background-color: ${music_green};
			}
		}
	}
`;
