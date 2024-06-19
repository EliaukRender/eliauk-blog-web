/**
 * @description: Y轴方向滚动
 */

// scrollY的值是相对于当前位置
export const handleScrollBy = (scrollY) => {
  window.scrollBy({top: scrollY, behavior: 'smooth'});
};

// scrollY的值是相对于起始位置
export const handleScrollTo = (scrollY) => {
  window.scrollTo({top: scrollY, behavior: 'smooth'});
};
