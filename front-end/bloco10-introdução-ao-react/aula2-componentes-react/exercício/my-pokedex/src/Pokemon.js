import React from "react";
import PropTypes from 'prop-types';
class Pokemon extends React.Component {
render () {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
<section>
    <h1>{name}</h1>
    <h1>{type}</h1>
    <h1>Avarage Weight: {averageWeight.value} {averageWeight.measurementUnit}</h1>
    <img src={image} alt='pokemon'/>
</section>
    );
}
};
Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
}
export default Pokemon;