import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAPIThunk } from '../actions/cardGrid';

class Cards extends React.Component {
  componentDidMount() {
    this.props.meuFetch();
  }
  render() {
  
   const { characters } = this.props;

    return (
        <div>
          <h1>Marvel's Character</h1>
          {characters.map((character) => (
            <>
            <p>{ character.name }</p>
            <img href={ character.thumbnail.path } alt="character-name"/>
            </>
          ))}
        </div>
     
    )
  }
}

const mapStateToProps = (state) => ({
  characters: state.cardGrid.characters,
  isLoading: state.cardGrid.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  meuFetch: () => dispatch(getAPIThunk())
});

Cards.propTypes = {
  characters: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);