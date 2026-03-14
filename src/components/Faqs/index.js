// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="Faqs-App-container">
        <div className="Faqs-card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="Unordered-list-container">
            {/* ✅ Ensure you map with a unique key */}
            {faqsList.map(eachQuestion => (
              <FaqItem key={eachQuestion.id} faqItemDetails={eachQuestion} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

/*import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="Faqs-App-container">
        <div className="Faqs-card-container">
          <h1 className="heading">FAQs</h1>

          <div className="Faqs-items-container">
            <ul className="Unordered-list-container">
              {faqsList.map(eachQestion => (
                <FaqItem key={eachQestion.id} faqItemDetails={eachQestion} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs*/
