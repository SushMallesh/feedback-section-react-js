import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onSelectEmoji = () => {
    this.setState(prevState => ({
      isFeedbackSelected: !prevState.isFeedbackSelected,
    }))
  }

  renderFeedbackSection = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedback-question-card">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojis">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                onClick={this.onSelectEmoji}
                className="emoji-button"
                type="button"
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span>{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankyou-card">
        <img className="emoji" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thankyou-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderThankyouScreen()
            : this.renderFeedbackSection()}
        </div>
      </div>
    )
  }
}

export default Feedback
