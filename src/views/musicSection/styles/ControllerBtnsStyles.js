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
		font-size: 28px;
		cursor: pointer;
	}

	.anticon-pause {
		font-size: 22px;
	}

	.anticon-sound {
		font-size: 20px;
	}

	.anticon-forward {
		margin-left: 0;
	}

	.anticon-backward {
		margin-right: 0;
	}
`;
