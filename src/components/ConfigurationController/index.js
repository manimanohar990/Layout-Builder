// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controls-container">
          <h1 className="layout-heading">Layout</h1>
          <div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="content"
                onChange={onChangeContent}
                checked={showContent}
              />
              <label className="label-text" htmlFor="content">
                Content
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="leftNavbar"
                onChange={onChangeLeftNavbar}
                checked={showLeftNavbar}
              />
              <label className="label-text" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="rightNavbar"
                onChange={onChangeRightNavbar}
                checked={showRightNavbar}
              />
              <label className="label-text" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
