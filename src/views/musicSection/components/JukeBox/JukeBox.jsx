import React, { memo, useEffect, useRef, useState } from 'react';
import { JukeBoxStyles } from '@/views/musicSection/components/JukeBox/JukeBoxStyles';
import { shallowEqual, useSelector } from 'react-redux';
import classNames from 'classnames';
import { motion, useAnimationControls } from 'framer-motion';

/**
 * @description: 唱片机
 */
const JukeBox = () => {
	const innerRef = useRef();
	const { isPlaying } = useSelector(
		(state) => ({
			isPlaying: state.audio.isPlaying,
		}),
		shallowEqual,
	);
	const imageRef = useRef();
	const [deg, setDeg] = useState(0);
	const [id, setId] = useState();

	useEffect(() => {
		if (innerRef.current) {
			// 生成30个圆环模拟纹路效果
			for (let i = 1; i < 25; i++) {
				const ring = document.createElement('div');
				ring.classList.add('line');
				ring.style.width = 350 - i * 4 + 'px';
				ring.style.height = 350 - i * 4 + 'px';
				innerRef.current.appendChild(ring);
			}
		}
	}, []);

	useEffect(() => {
		if (isPlaying) {
			// 更新旋转角度
			const id = setInterval(() => {
				setDeg((pre) => pre + 0.2);
			}, 50);
			setId(id);
		} else {
			clearInterval(id);
		}
	}, [isPlaying]);

	return (
		<JukeBoxStyles>
			<div className='box'>
				<div className='outer'>
					<div className='inner' ref={innerRef}>
						<img
							ref={imageRef}
							style={{ transform: `rotate(${deg}deg)`, transition: 'transform 50ms linear' }}
							className={classNames('image', isPlaying ? '' : '')}
							src={require('@/views/musicSection/images/changpianji.png')}></img>
					</div>
				</div>
			</div>
		</JukeBoxStyles>
	);
};

export default memo(JukeBox);
