import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Search from 'components/Search';
import { setStartData } from 'containers/Body/actions';
import { changeSearchString, changeSearchBy } from './actions';
import { searchData } from './selectors';

const mapStateToProps = createStructuredSelector({
  searchData,
});

const mapDispatchToProps = {
  changeSearchString,
  changeSearchBy,
  setStartData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
