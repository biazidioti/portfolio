import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Cards extends React.Component {
  render() {
    // const { characters } = this.props;
    return (
      <section>
        <div>
        </div>
      </section>
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