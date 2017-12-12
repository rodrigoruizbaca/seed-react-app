import React from 'react';
import ReactDOM, {NavLink} from 'react-dom';

const Portfolio = (props) => {
    return <div>
        A thing I have done {props.match.params.id}
    </div>
};

export default Portfolio;