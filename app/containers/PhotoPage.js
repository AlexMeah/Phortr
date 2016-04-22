import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Photos from '../components/Photos';
import * as FileActions from '../actions/files';
import * as NavigationActions from '../actions/navigation';

function mapStateToProps(state) {
    return {
        files: state.files,
        folder: state.folder,
        navigation: state.navigation
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, FileActions, NavigationActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
