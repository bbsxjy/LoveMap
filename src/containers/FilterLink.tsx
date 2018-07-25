import {connect} from "react-redux";
import {setVisibilityFilter} from "../actions";
import {Link} from "../components/Link";
import {Dispatch} from "redux";

export const mapStateToProps = (state: any, ownProps: any) => ({
    active: ownProps.filter === state.visibilityFilter
});
export const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
