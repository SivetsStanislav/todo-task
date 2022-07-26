import React, { useState } from "react";
import PropTypes from "prop-types";

// components
import UpdateMenu from "../UpdateMenu/UpdateMenu";

// styles
import './index..scss'

const ToDoItem = ({ item, removeItem, updateItem }) => {
	 const [update, setUpdate] = useState({
		 id: null,
		 value: '',
	 })

	const updateHandler = (value) => {
		updateItem(update, value);

		setUpdate({
			id: null,
			value: '',
		})
	}

	if (update.id) {
		return (
			<UpdateMenu updateHandler={updateHandler} update={update.value} />
		)
	}

	return (
		<>
			<div className='item_container'>
						<span
							key={item.id}
							className='item_text'
						>
							{item.value.split(' ').map(el =>
								el.match(/#[a-z,A-Z,А-Я,а-я]+/gmu) ?
									<span className='hash' key={item.id + Math.random()}>{el}</span> :
									<span className='usual-text' key={item.id + Math.random()}>{el}</span>
							)}
						</span>
					<div className='item_button_container'>
						<button
							className='item_update_button'
							onClick={() => setUpdate({ id: item.id, value: item.value })}
						>
							&#9998;
							{/*<i className='fas fa-pencil-alt'/>*/}
						</button>
						<button
							className='item_delete_button'
							onClick={() => removeItem(item.id)}
						>
							&#9851;
							{/*<i className='fas fa-trash-alt' />*/}
						</button>
					</div>
			</div>
		</>
	)
}

ToDoItem.propTypes = {
	item: PropTypes.object.isRequired,
	removeItem: PropTypes.func.isRequired,
	updateItem: PropTypes.func.isRequired,
};

export default ToDoItem;
