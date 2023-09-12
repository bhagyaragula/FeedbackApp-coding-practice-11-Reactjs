// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  feedBackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="fbques-container">
        <h1 className="qus-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                className="emojis-btn"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={emoji.imageUrl}
                  className="emoji-img"
                  alt={emoji.name}
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedBackAnswer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="fbans-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
        <h1 className="ans-heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="main-container">
        <div className="fb-card">
          {isFeedbackSelected ? this.feedBackAnswer() : this.feedBackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
