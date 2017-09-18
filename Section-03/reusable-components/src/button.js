import React from 'react'

/**
 * A generic button with text.
 */
const Button = ({ text }) => <button>{text}</button>
Button.propTypes = {
 /**
 * The text of the button.
 */
 text: React.PropTypes.string,
}
export default button
