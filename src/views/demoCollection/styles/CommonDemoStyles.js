import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor } from '@/assets/css/variables';

/**
 * @description: 公共的类样式
 */
export const CommonDemoStyles = styled.div`
	width: 100%;
	height: 100%;
	padding: 25px;
	font-size: 14px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	.title {
		font-size: 16px;
		color: ${primaryColor};
		padding-bottom: 20px;
		box-sizing: border-box;
	}
`;

/**
 * @description: demo的样式组件中用到的所有全局变量
 */
export const GlobalStyle = createGlobalStyle`
  :root {
    --delay-time: -0.5s;  // 延迟-0.5s
  }
`;
