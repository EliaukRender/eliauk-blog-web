import { useState, memo, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import PropTypes from 'prop-types';
import { CarouselPicturesStyles } from '@/components/CarouselPictures/styles';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

// 动画组
const variants = {
	// 进入时
	enter: (direction) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 1
		};
	},
	// 静止时
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1
	},
	// 退出时
	exit: (direction) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0
		};
	}
};

/**
 * @description: 轮播图组件： 单张或多张图片均支持
 */
const CarouselPictures = ({ images, showSwitchBtn = true }) => {
	const [[page, direction], setPage] = useState([0, 0]);
	const imageIndex = wrap(0, images.length, page); // 图片索引值

	// 上下翻页
	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	// 处理拖拽结束事件；offset:位移、velocity:速度
	const swipeConfidenceThreshold = 10000; // 翻页阈值
	const onDragEnd = (offset, velocity) => {
		const swipe = Math.abs(offset.x) * velocity.x; // 计算阈值
		if (swipe < -swipeConfidenceThreshold) {
			paginate(1); // 下一张
		} else if (swipe > swipeConfidenceThreshold) {
			paginate(-1); // 上一张
		}
	};

	return (
		<CarouselPicturesStyles>
			{/* 轮播图区域 */}
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					className='carousel-img'
					key={page}
					src={images[imageIndex]}
					custom={direction}
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 }
					}}
					drag='x'
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						onDragEnd(offset, velocity);
					}}
				/>
			</AnimatePresence>
			{/* 切换按钮 */}
			{showSwitchBtn && (
				<Fragment>
					<div className='next' onClick={() => paginate(1)}>
						<RightOutlined />
					</div>
					<div className='prev' onClick={() => paginate(-1)}>
						<LeftOutlined />
					</div>
				</Fragment>
			)}
		</CarouselPicturesStyles>
	);
};
export default memo(CarouselPictures);

CarouselPictures.propTypes = {
	images: PropTypes.array, // 轮播图数组
	showSwitchBtn: PropTypes.bool // 是否显示切换按钮
};
