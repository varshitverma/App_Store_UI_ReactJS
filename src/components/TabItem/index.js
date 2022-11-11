// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, getTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onSelectedTab = () => {
    getTabItem(tabId)
  }

  const activeBtnStyle = isActive ? 'selected-btn' : ''

  return (
    <>
      <li className="tab-list-item">
        <button
          type="button"
          className={`button ${activeBtnStyle}`}
          onClick={onSelectedTab}
        >
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabItem
