import React, { memo, useEffect, useRef, useState } from 'react';
import { SpecialSheetStyles } from '@/views/musicSection/views/RightViews/OnlineMusic/styles/SpecialSheetStyles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { motion, useAnimationControls } from 'framer-motion';
import { music_green_select } from '@/assets/css/variables';

const imageList = require.context('@/views/musicSection/images/online-sheet/special-images')?.keys();

/**
 * @description: 精选歌单--轮播图形式推荐
 */
const SpecialSheet = () => {
	const containerRef = useRef();
	const [width, setWidth] = useState(300); // 图片宽度
	const [height, setHeight] = useState(220); // 图片高度
	const controls = useAnimationControls();
	const [activePointerList, setActivePointerList] = useState([0, 1, 2]); // 指示器激活的图片索引值

	// 动态计算图片宽度与高度
	const dynamicUpdateImagesWH = () => {
		if (!containerRef.current) return;
		const containerWidth = containerRef.current.clientWidth;
		const containerHeight = containerRef.current.clientHeight;
		setWidth((containerWidth - 40) / 3); // 默认显示3张图片
		setHeight(containerHeight);
		containerRef.current.scrollLeft = 0; // 复位
	};

	// 处理指示器左右滚动
	const handleScroll = () => {
		if (!containerRef.current) return;
		const count = Math.round(containerRef.current.scrollLeft / (width + 20));
		setTimeout(() => {
			setActivePointerList(activePointerList.map((item) => item + count));
		}, 100);
	};

	// 向左
	const handlePre = () => {
		// 20是margin值
		containerRef.current.scrollTo({ left: containerRef.current.scrollLeft + width + 20, behavior: 'smooth' });
	};

	// 向右
	const handleNext = () => {
		containerRef.current.scrollTo({ left: containerRef.current.scrollLeft - width - 20, behavior: 'smooth' });
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
			// 监听
			containerRef.current.addEventListener('scroll', handleScroll);
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			// 卸载
			if (containerRef.current) {
				containerRef.current.removeEventListener('scroll', handleScroll);
				resizeObserver.unobserve(containerRef.current);
			}
		};
	}, []);

	return (
		<motion.div
			onMouseEnter={() => {
				onMouseEnter();
			}}
			onMouseLeave={() => {
				onMouseLeave();
			}}>
			<SpecialSheetStyles height={height}>
				{/* 轮播图 */}
				<div className='images-box' ref={containerRef}>
					{imageList.map((image) => {
						return (
							<img
								className='img'
								style={{ width: width }}
								src={require(`@/views/musicSection/images/online-sheet/special-images${image.substring(1)}`)}
							/>
						);
					})}
				</div>
				{/* 左、右切换按钮 */}
				<motion.div className='next' initial={{ opacity: 0 }} animate={controls} onClick={handlePre}>
					<RightOutlined />
				</motion.div>
				<motion.div className='prev' initial={{ opacity: 0 }} animate={controls} onClick={handleNext}>
					<LeftOutlined />
				</motion.div>
				{/* 指示器 */}
				<div className='pointer-list'>
					{imageList.map((item, index) => {
						return <div className='pointer' style={activePointerList.includes(index) ? { backgroundColor: music_green_select } : {}}></div>;
					})}
				</div>
			</SpecialSheetStyles>
		</motion.div>
	);
};

export default memo(SpecialSheet);
