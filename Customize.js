import React from 'react';
import Currency from './Currency';
import slugify from 'slugify';
import Feature from './Feature';
import Parts from './Parts';

class Customize extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <Feature
                        itemHash={itemHash}
                        inputName={slugify(feature)}
                        onChange={e => this.props.handleFeature(feature, item)}
                        checked={item.name === this.props.selected[feature].name}
                        itemName={item.name}
                        itemCost={<Currency amount={(item.cost)} />} />
                );
            });

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Parts features={features} />
            </form>
        )
    }
}

export default Customize;