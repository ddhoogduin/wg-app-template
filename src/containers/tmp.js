import {Transition} from "semantic-ui-react";
import React from "react";

wrapTransition =  (object) => {
    return (
        <Transition
            onHide={"fade"}
            unmountOnHide={true}
            animation={"fade up"}
            duration={{ show:500 }}
            key={`page-${object.props.path}`}
            transitionOnMount={true}
        >
            <div>
                {object}
            </div>
        </Transition>
    )
};

// renderContent() {
//     if(this.props.pageList.length === 0){
//         return null
//     }
//     return (
//         <Router history={history}>
//             <Switch>
//                 <Route
//                     path="/"
//                     exact
//                     render={(props) => this.wrapTransition(
//                         <WhatIs {...props} path={'/'}
//                                 content={this.props.pageList}
//                                 toolSteps={this.props.toolSteps}
//                                 outputExamples={this.props.outputExamples}
//                         />)
//                     }
//                 />
//             </Switch>
//         </Router>
//     );
// }