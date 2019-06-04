import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {
    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired
        })
    }

    static defaultProps = {

    }

    render() {
        const { movie } = this.props;

        return (
            <div>
                <h3>{movie.title}</h3>
                <p>{movie.desc || "Description not available."}</p>
            </div>
        )
    }
}
 