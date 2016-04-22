import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Photos from '../components/Photos';
import * as FileActions from '../actions/files';

function mapStateToProps(state) {
    return {
        files: state.files,
        folder: state.folder,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(FileActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
