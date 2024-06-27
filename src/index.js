import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { HashRouter } from 'react-router-dom';
import '@/assets/css/index.css';
import appTheme from '@/assets/theme/index'; // 主题样式
import { ThemeProvider } from 'styled-components'; // 样式共享组件
import store, { persistor } from '@/store/index'; // redux数据
import { Provider } from 'react-redux'; // redux数据共享组件
import { PersistGate } from 'redux-persist/integration/react'; // redux持久化组件
import GlobalLoading from '@/components/Loading/GlobalLoading';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		{/* redux数据共享 */}
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{/* css样式共享，通过props.theme就可以拿到自定义的样式 */}
				<ThemeProvider theme={appTheme}>
					{/* 异步加载 */}
					<Suspense fallback={<GlobalLoading />}>
						{/* Hash路由 */}
						<HashRouter>
							<App />
						</HashRouter>
					</Suspense>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
