import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSession } from '../../actions/session';

class Callback extends React.PureComponent {
  static propTypes = {
    handleAuth: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    return <h1>Logging in now...</h1>;
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  handleAuth() {
    const action = setSession();
    dispatch(action);
    action.payload.then(() => {
      props.history.replace('/');
    });
  }
});

export default connect(
  mapDispatchToProps
)(Callback);
