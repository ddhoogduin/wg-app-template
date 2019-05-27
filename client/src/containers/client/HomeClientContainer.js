import React, {Component, PureComponent} from 'react'
import {connect} from "react-redux";
import HomeClient from "../../components/pages/client/HomeClient";



class homeClientContainer extends Component{


    render(){
        return(
            <HomeClient
                client={this.props.client}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        client: state.activeClient
    }
};
export default connect(mapStateToProps)(homeClientContainer);
