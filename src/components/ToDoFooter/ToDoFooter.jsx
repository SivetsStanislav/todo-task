import React, {useState} from "react";
import PropTypes from "prop-types";

// style
import './index.scss';

const ToDoFooter = ({infoArray}) => {
	const [infoStatus, setInfoStatus] = useState(false);

	const showInfo = (e) => {
		e.preventDefault();
		setInfoStatus(!infoStatus);
	}

	if (infoStatus) {
		return (
			<div className='footer_info_container'>
				{infoArray.length > 0 && infoArray.map((el, index) => (
						<p key={index} className='footer_info_text'>{el}</p>
					)
				)}
				<button
					className='footer_button'
					onClick={(e) => showInfo(e)}
				>
					&#10006;
					{/*hide*/}
				</button>
			</div>
		)
	}

	return (
		<div
			className='footer_container'
		>
			<button
				className='footer_button'
				onClick={(e) => showInfo(e)}
			>
				&#8505;
				{/*<i className="fa fa-info"/>*/}
			</button>
		</div>
	)
};

ToDoFooter.propTypes = {
	infoArray: PropTypes.array.isRequired,
}

export default ToDoFooter;
