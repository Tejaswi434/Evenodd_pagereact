import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {value: 0}

  changevalue = () => {
    const {value} = this.state
    if (value < 100) {
      const random = Math.ceil(Math.random() * 100)
      this.setState({value: value + random})
    } else {
      this.setState({value: 0})
    }
  }

  render() {
    const {value} = this.state

    return (
      <div className="bg_container">
        <h1>
          Count<span>{value}</span>
        </h1>
        {value % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}
        <button onClick={this.changevalue} type="button" className="but-style">
          Increment
        </button>
        <p>Increase by Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
