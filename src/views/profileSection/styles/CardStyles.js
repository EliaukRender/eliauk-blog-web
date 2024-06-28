import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardStyles = styled(motion.div)`
	position: relative;
	padding: 15px;
	height: 33.33%;
	box-sizing: border-box;

	.card-content {
		position: relative;
		display: inline-block;
		width: 100%;
		height: 100%;
		border-radius: 20px;
		box-sizing: border-box;
		text-align: center;
	}
`;
