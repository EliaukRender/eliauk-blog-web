import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 拖拽mini播放器
 */
export const useDragMiniPlayer = () => {
	const { miniPlayer } = useSelector(
		(state) => ({
			miniPlayer: state.musicApp.miniPlayer,
		}),
		shallowEqual,
	);
	const [dragging, setDragging] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	// 更新mini播放器初始位置
	const updateInitialPosition = () => {
		setPosition({
			x: window.innerWidth - 330 - 200,
			y: window.innerHeight - 70,
		});
	};

	const handleMouseDown = (e) => {
		setDragging(true);
		setOffset({
			x: e.clientX - position.x,
			y: e.clientY - position.y,
		});
	};

	const handleMouseMove = (e) => {
		if (dragging) {
			setPosition({
				x: e.clientX - offset.x,
				y: e.clientY - offset.y,
			});
		}
	};

	const handleMouseUp = () => {
		setDragging(false);
	};

	useEffect(() => {
		updateInitialPosition(); // 更新初始位置

		window.addEventListener('resize', updateInitialPosition);

		return () => {
			window.removeEventListener('resize', updateInitialPosition);
		};
	}, [miniPlayer]);

	return {
		position,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
	};
};
