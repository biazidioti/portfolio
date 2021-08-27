import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Cards extends React.Component {
  render() {
    const { characters: { name } } = this.props;
    return (
        <div>
          <h1>Marvel's Character</h1>
          <h2>{ name }</h2>
        </div>
     
    )
  }
}

const mapStateToProps = (state) => ({
  characters: state.cardGrid.characters,
});

Cards.propTypes = {
  characters: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Cards);