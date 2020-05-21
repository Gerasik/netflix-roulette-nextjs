import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Body from '../components/Body';
import { changeSortBy } from 'containers/Search/actions';
import { setStartData } from './actions';
import { moviesData } from './selectors';

const mapStateToProps = createStructuredSelector({
  moviesData,
});

const mapDispatchToProps = {
  changeSortBy,
  setStartData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
