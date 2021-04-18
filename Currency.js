import React from 'react';

const USCurrency= new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Currency extends React.Component {
    render() {
        return (
            <>
                {USCurrency.format(this.props.amount)}
            </>
        )
    }
}

export default Currency;