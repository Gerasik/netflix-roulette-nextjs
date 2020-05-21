import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Film from 'components/Film';
import { setFilmId } from './actions';
import { filmData } from './selectors';

const mapStateToProps = createStructuredSelector({
  filmData,
});

const mapDispatchToProps = {
  setFilmId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
