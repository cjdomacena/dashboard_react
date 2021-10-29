import Checkbox from "../Checkbox/Checkbox"
import PropTypes from 'prop-types'

const Card = ({label ="Default"}) => {



	return (
		<div className=" p-4 flex">
			<div className={`h-auto max-w-80 bg-white shadow-sm rounded-lg hover:shadow-xl transition-all ease-linear`}>
			<Checkbox label={label}/>
			</div>
		</div>
	)
}

export default Card

Card.propTypes = 
{
	label: PropTypes.string,
}