import styled from 'styled-components';

export const HomeImageWrapper = styled.div`
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
`;
