import styled from 'styled-components';
import homeBg from '@/assets/image/home-bg.jpg';
import { primaryColorRgba } from '@/assets/css/variables';

export const FirstSectionWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	background-image: url(${homeBg}); // 背景图
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 2;

	/* 遮罩层 */

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(107, 150, 205, 0.08);
		z-index: -1;
	}

	/* 头像区域 */

	.img-box {
		width: 180px;
		height: 180px;
		border-radius: 50%;
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
			background: linear-gradient(rgba(107, 150, 205, 0), rgba(107, 150, 205, 0.5));
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
			border-radius: 50%; /* 将图片设置为圆形 */
			z-index: 9999;
		}
	}

	.personal-info {
		width: 400px;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 35px;
		background-color: ${primaryColorRgba};
		margin-bottom: 30px;
		font-weight: 600;
		font-size: 20px;
		color: #ffffff;
		cursor: pointer;

		&:hover {
			box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3); /* hover时的阴影效果 */
		}

		.divider {
			width: 1px;
			height: 20px;
			background-color: #fff;
			margin: 0 20px;
		}

		.anticon {
			margin: 0 10px;
		}
	}
`;
