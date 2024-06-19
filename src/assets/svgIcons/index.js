/**
 * @description: 统一导入所有的svg文件到项目中; webpack中需要配置svg
*/
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const svgList = require.context('./icons', false, /\.svg$/);
requireAll(svgList);