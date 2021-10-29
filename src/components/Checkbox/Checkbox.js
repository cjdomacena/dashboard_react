import PropTypes from 'prop-types'
const Checkbox = ({label}) => {
	return (

			<div className="w-full p-4 flex space-x-2 items-center">
				<input type="checkbox" className="rounded border-gray-300 text-green-400 focus:ring-green-400 h-5 w-5" />
				<label htmlFor="" className="overflow-ellipsis">
					<h2>{label}</h2>
				</label>
			</div>

	)
}

export default Checkbox


Checkbox.propTypes = 
{
	label: PropTypes.string,
}