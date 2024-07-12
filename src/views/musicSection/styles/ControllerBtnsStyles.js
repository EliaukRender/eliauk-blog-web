import styled from 'styled-components';

export const ControllerBtnsStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	.play-pause {
		width: 40px;
		height: 32px;
		border-radius: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #00f268;
	}

	.anticon {
		margin: 0 10px;
		padding: 5px;
		font-size: 26px;
		cursor: pointer;

		&:hover {
			color: #00cc65;
		}
	}

	.anticon-caret-right,
	.anticon-pause {
		&:hover {
			color: #000000;
		}
	}

	.anticon-pause {
		font-size: 22px;
	}

	.anticon-sound {
		//opacity: 0;
		font-size: 20px;
	}

	.anticon-forward {
		margin-left: 0;
	}

	.anticon-backward {
		margin-right: 0;
	}

	/* 鼠标hover进入控制区域时显示音量控制和歌曲模式按钮 */
	//&:hover {
	//	.anticon-sound {
	//		opacity: 1;
	//	}
	//}
`;
