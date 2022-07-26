import React, {useState} from "react";
import PropTypes from 'prop-types'

// style
import  './index.scss'

const ToDoMainMenu = ({ addToDoToArray }) => {
	const [userString, setUserString] = useState('');

	const inputHandler = e => setUserString(e.currentTarget.value);

	const submitHandler = (e) => {
		e.preventDefault();
		addToDoToArray(userString);
		setUserString('');
	};

	const enterKeyHandler = (e) => {
		if (e.key === 'Enter') {
			submitHandler(e);
		}
	};

	return (
		<>
			<div className="main_menu">
				<form
					action={"create_to_do"}
					className='main_menu_form'
					onSubmit={submitHandler}
					onKeyDown={enterKeyHandler}
				>
					<textarea
						className='main_menu_input'
						value={userString}
						aria-multiline={true}
						placeholder='Write task here'
						onInput={inputHandler}
					/>
					<button
						className='main_menu_button'
						type='submit'
					>
						Create
					</button>
				</form>
			</div>
		</>
	)
};

ToDoMainMenu.propTypes = {
	addToDoToArray: PropTypes.func.isRequired,
}

export default ToDoMainMenu;
