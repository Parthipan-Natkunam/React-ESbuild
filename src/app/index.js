import * as ReactDOM from 'react-dom';
import App  from "./app";

const appRootElement = document.getElementById('app-root');
const root = ReactDOM.createRoot(appRootElement);

root.render(<App/>);