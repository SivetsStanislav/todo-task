import React, { useState } from "react";
import PropTypes from 'prop-types'

// style
import  './index.scss'

const UpdateMenu = ({ updateHandler, update }) => {
	let [userString, setUserString] = useState(update);

	const inputHandler = e => setUserString(e.currentTarget.value);

	const submitHandler = (e) => {
		e.preventDefault();
		updateHandler(userString);
	};

	const enterKeyHandler = (e) => {
		if (e.key === 'Enter') {
			submitHandler(e);
		}
	};

	return (
		<>
			<div className="update_menu">
				<form
					className='update_menu_form'
					action={"update_to_do"}
					onSubmit={submitHandler}
					onKeyDown={enterKeyHandler}
				>
					<textarea
						className='update_menu_input'
						value={ userString }
						onInput={inputHandler}
					/>
					<button
						className='update_menu_button'
						type='submit'
					>
						&#10004;
						{/*<i className="fa fa-save" />*/}
					</button>
				</form>
			</div>
		</>
	)
};

UpdateMenu.propTypes = {
	updateHandler: PropTypes.func.isRequired,
	update: PropTypes.string.isRequired,
}

export default UpdateMenu;
