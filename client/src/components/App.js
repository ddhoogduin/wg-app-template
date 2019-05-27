import React, {Component} from 'react'

import '../assets/main.css'

class App extends Component{
    render() {
        return(
            <div className='appContent'>
                {this.props.children}
            </div>
        )
    }
}

export default App;