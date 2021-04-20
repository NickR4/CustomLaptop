import React from 'react';
import Currency from './Currency';
import Option from './Option';
import Total from './Total';

class Summary extends React.Component {

    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return (
                <Option
                    featureHash={featureHash}
                    name={feature}
                    description={selectedOption.name}
                    cost={<Currency amount={selectedOption.cost} />}
                />
            );
        });

        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );
        
        return(
        <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
            <Total total={total} />
            </section>
       )
    }
}

export default Summary;