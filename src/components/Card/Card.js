import PropTypes from 'prop-types'
const Card = ({color ="gray", }) => {
	return (
		<div className="h-64 w-64 bg-white shadow rounded-sm">
			<div className="flex p-4 justify-center">
				<div className={`rounded-full bg-${color}-200 h-24 w-24`}></div>
			</div>
		</div>
	)
} 

export default Card

Card.propTypes = {
	color: PropTypes.string
}

