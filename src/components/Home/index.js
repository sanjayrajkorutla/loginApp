// Write your code here
import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isLogin: true}

  onClickI = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    const headText = isLogin ? 'Please Login' : 'Welcome User'
    const buttonText = isLogin ? 'Login' : 'Logout'
    return (
      <div className="container">
        <div className="column">
          <h1>{headText}</h1>
          <button type="button" onClick={this.onClickI}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
