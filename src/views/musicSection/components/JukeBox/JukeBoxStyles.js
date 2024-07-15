import styled from 'styled-components';

export const JukeBoxStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 450px;
	height: 100%;
	margin-right: 100px;

	.box {
		width: 450px;
		height: 420px;
		background-color: #131313;
		border-radius: 40px;
		display: flex;
		justify-content: center;
		align-items: center;

		.outer {
			width: 400px;
			height: 400px;
			background-color: #1f1f1f;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;

			.inner {
				width: 350px;
				height: 350px;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
				background-color: #979794;
				position: relative;

				.line {
					position: absolute;
					transform: translate(-50%， -50%);
					border: 1px solid #efefef;
					border-radius: 50%;
				}

				.image {
					width: 220px;
					height: 220px;
					border-radius: 50%;
				}
			}
		}
	}
`;
