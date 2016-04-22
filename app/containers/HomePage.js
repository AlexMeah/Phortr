import Home from '../components/Home';
import * as FolderActions from '../actions/folder';
import * as FileActions from '../actions/files';
import * as NavigationActions from '../actions/navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        folder: state.folder
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        Object.assign(
            {},
            FolderActions,
            FileActions,
            NavigationActions
        ), dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
