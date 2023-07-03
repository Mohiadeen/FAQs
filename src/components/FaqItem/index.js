import {Component} from 'react'

import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  toggleFaqs = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const image = isActive ? minusImg : plusImg
    const altText = isActive ? 'minus' : 'plus'
    return (
      <li className="faqList">
        <div className="faqList-item">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.toggleFaqs}>
            <img src={image} alt={altText} className="img" />
          </button>
        </div>
        {isActive && (
          <div>
            <hr className="line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
