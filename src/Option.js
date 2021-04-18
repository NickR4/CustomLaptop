import React from 'react';

class Option extends React.Component {
    render() {
        return (
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.name} </div>
                <div className="summary__option__value">{this.props.description}</div>
                <div className="summary__option__cost">
                    {this.props.cost}
                </div>
            </div>
        )
    }
}

export default Option;