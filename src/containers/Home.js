import { connect } from 'react-redux';
import { getPolls } from '../actions/pollsAction';
import Polls from '../components/Polls/Polls';
import getStatePolls from '../selectors/PollsSelector';

const mapStateToProps = state => ({
  polls: getStatePolls(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getPolls());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Polls);
