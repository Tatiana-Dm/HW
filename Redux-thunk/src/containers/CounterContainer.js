import { connect } from "react-redux";

import ReduxCounter from "../components/ReduxCounter";
import { actionInc, actionDec } from "../actions/counter";

const mapStateToProps = (state) => ({
    counter: state.count
});

const mapDispatchToProps = {
    actionInc: actionInc,
    actionDec
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
