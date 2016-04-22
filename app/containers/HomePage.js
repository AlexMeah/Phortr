import Home from '../components/Home';
import { chooseFolder } from '../actions/folder';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        folder: state.folder
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        chooseFolder
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
