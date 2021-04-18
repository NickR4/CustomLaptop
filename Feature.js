import React from 'react';

class Feature extends React.Component {
    render() {
        return (
            <div key={this.props.itemHash} className="feature__item">
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={this.props.inputName}
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.itemName} ({this.props.itemCost})
                </label>
            </div>
        )
    }
}

export default Feature;

