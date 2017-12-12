import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


class App extends React.Component {
    render() {
        return (
            <Routes/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));