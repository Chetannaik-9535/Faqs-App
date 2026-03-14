// Write your code here.
import {useState} from 'react'
import './index.css'

const FaqItem = props => {
  const {faqItemDetails} = props
  const {questionText, answerText} = faqItemDetails

  const [isClickButton, setIsClickButton] = useState(false)

  const onClickShowAns = () => {
    setIsClickButton(prevState => !prevState)
  }

  const imageUrl = isClickButton
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const imageAlt = isClickButton ? 'minus' : 'plus'

  return (
    <li className="FaqItem-container">
      <div className="button-container">
        {/* ✅ Use a heading tag (h1 or h2) instead of <p> */}
        <h1 className="question">{questionText}</h1>

        <button className="button" type="button" onClick={onClickShowAns}>
          <img src={imageUrl} alt={imageAlt} className="image" />
        </button>
      </div>

      {isClickButton && (
        <>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </>
      )}
    </li>
  )
}

export default FaqItem
