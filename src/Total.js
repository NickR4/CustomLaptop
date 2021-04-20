import React from 'react';
import Currency from './Currency';

class Total extends React.Component{

    render(){
        return(
            <section> 
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    <Currency amount={this.props.total} />
                </div>
            </div>
        </section> 
        )
    }

}
export default Total;