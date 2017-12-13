import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Routes/>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));