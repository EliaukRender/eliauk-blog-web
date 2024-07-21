import { useCallback, useEffect, useRef, useState } from 'react';
import { useAnimationControls } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * @description: 轮播图形式的图片列表； 基于显示尺寸动态调整图片显示的宽高
 * @param showImagesNum    可视区域需要展示的图片数量
 * @param showActivePointer  是否需要显示指示器
 * @param imagesLength    图片列表数组总长度
 * @param marginRightValue    图片的右边距大小
 */
export const useDynamicImagesList = (
	showImagesNum = 3,
	showActivePointer = false,
	imagesLength = 0,
	marginRightValue = 20,
) => {
	const containerRef = useRef();
	const [width, setWidth] = useState(300); // 图片宽度
	const [height, setHeight] = useState(220); // 图片高度
	const controls = useAnimationControls();
	const [activePointerList, setActivePointerList] = useState([]); // 指示器激活的图片索引值

	// 生成指示器列表
	const createPointerList = useCallback(() => {
		let list = [];
		for (let i = 0; i < showImagesNum; i++) {
			list.push(i);
		}
		setActivePointerList(list);
	}, [showImagesNum]);

	// 动态计算图片宽度与高度
	const dynamicUpdateImagesWH = () => {
		if (!containerRef.current) return;
		const containerWidth = containerRef.current.clientWidth;
		const containerHeight = containerRef.current.clientHeight;
		setWidth((containerWidth - marginRightValue * (showImagesNum - 1)) / showImagesNum); // marginRightValue是图片之间的间距，三张图时就有2个marginRightValue
		setHeight(containerHeight);
		containerRef.current.scrollLeft = 0; // 复位
	};

	// 向左
	const handlePre = () => {
		containerRef.current.scrollTo({
			left: containerRef.current.scrollLeft - width - marginRightValue,
			behavior: 'smooth',
		});
		if (showActivePointer && activePointerList[0] !== 0) {
			setActivePointerList((prevList) => prevList.map((item) => item - 1));
		}
	};

	// 向右
	const handleNext = () => {
		containerRef.current.scrollTo({
			left: containerRef.current.scrollLeft + width + marginRightValue,
			behavior: 'smooth',
		});
		if (showActivePointer && activePointerList[activePointerList.length - 1] !== imagesLength - 1) {
			setActivePointerList((prevList) => prevList.map((item) => item + 1));
		}
	};

	// 鼠标进入
	const onMouseEnter = () => {
		controls.start({ opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } });
	};

	// 鼠标离开
	const onMouseLeave = () => {
		controls.start({ opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } });
	};

	// 动态调整图片的宽度与高度、监听图片左右滚动事件、监听resize事件
	useEffect(() => {
		createPointerList();

		if (containerRef.current) {
			dynamicUpdateImagesWH();
		}

		// 监听元素的resize事件
		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				// console.log('监听元素的宽度', entry.contentRect.width);
			}
			setTimeout(() => {
				dynamicUpdateImagesWH(); // 等动画效果快结束时更新尺寸
			}, 150);
		});

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				resizeObserver.unobserve(containerRef.current);
			}
		};
	}, []);

	return {
		containerRef,
		width,
		height,
		onMouseEnter,
		onMouseLeave,
		handleNext,
		handlePre,
		controls,
		activePointerList,
	};
};

useDynamicImagesList.propTypes = {
	showImagesNum: PropTypes.number, // 可视区域显示图片的数量
	showActivePointer: PropTypes.bool, // 是否显示指示器
	imagesLength: PropTypes.number, // 显示图片总数
	marginRightValue: PropTypes.number, // 图片之间的间距值
};
