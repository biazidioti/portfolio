import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAPIThunk } from '../actions/cardGrid';
import '../App.css';

class Cards extends React.Component {
  componentDidMount() {
    this.props.meuFetch();
  }
  render() {
  
   const { characters } = this.props;

    return (
        <div>          
          <h1 className="App">Marvel's Character</h1>
          <div>
          {characters.map((character) => (
            <div className="App-header">
            <p>{ character.name }</p>
            <img src={ `${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}` } alt="character-name"/>
            </div>
          ))}
          </div>
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