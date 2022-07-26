import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

// style
import "./index.scss";

const ToDoSearchMenu = ({ toDoArr }) => {
	const [userString, setUserString] = useState('');
	const [findedItems, setFindedItems] = useState([]);
	const [searchStatus, setSearchStatus] = useState(false);

	const inputHandler = e => setUserString(e.currentTarget.value);

	useEffect(() => {
		if (userString && toDoArr.length > 0) {
			setFindedItems([...toDoArr.filter((el) => el.value.includes(userString))]);
		} else {
			setFindedItems([]);
		}
	}, [userString, toDoArr]);

	const submitHandler = (e) => {
		e.preventDefault();
		setSearchStatus(!searchStatus)
	};

	const enterKeyHandler = (e) => {
		if (e.key === 'Enter') {
			submitHandler(e);
		}
	};

	if (searchStatus && findedItems.length > 0) {
		return (
			<>
				<div className="finded_item_container">
					{findedItems.map(el => (
							<p
								className='finded_item_text'
								key={el.id}
							>
								{el.value}
							</p>
						)
					)}
					<button
						className="finded_item_button"
						onClick={() => setSearchStatus(!searchStatus)}
					>
						&#10004;
					</button>
				</div>
			</>
		)
	}

	if (searchStatus && findedItems.length === 0) {
		return (
			<>
				<div className="finded_item_container">
							<p className='finded_item_text'>
								Sorry, nothing was found :(
							</p>
					<button
						className="finded_item_button"
						onClick={() => setSearchStatus(!searchStatus)}
					>
						&#10004;
					</button>
				</div>
			</>
		)
	}

	return (
		<>
			<div className="search_menu">
				<form
					action={"create_to_do"}
					className='search_menu_form'
					onSubmit={submitHandler}
					onKeyDown={enterKeyHandler}
				>
					<textarea
						className='search_menu_input'
						value={userString}
						aria-multiline={true}
						placeholder='What are you looking for?'
						onInput={inputHandler}
					/>
					<button
						className='search_menu_button'
						type='submit'
					>
						&#9906;
					</button>
				</form>
			</div>
		</>
	)
};

ToDoSearchMenu.propTypes = {
	toDoArr: PropTypes.array.isRequired,
};

export default ToDoSearchMenu;
