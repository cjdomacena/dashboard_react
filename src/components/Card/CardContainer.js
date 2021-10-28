import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const CardContainer = ({ children, cols }) => {
	
	const colors = children.map(child => child.args.color)


	if(colors.length === 0)
	{
		return <div className="text-gray-500">Nothing here yet.</div>
	}

	return (

		<div className="xl:p-16 lg:p-16 w-auto h-full md:p-1 sm:p-1 xs:p-1 flex overflow-auto">
			<div className={`w-full overflow-auto gap-4 p-4 
			grid place-items-center
			2xl:grid-flow-row 2xl:grid-cols-${cols} 
			lg:grid-flow-row lg:grid-cols-3 lg:gap-4
			md:grid-flow-row md:grid-cols-2
			`}>

				{colors.map(color =>(
					<Card color={color}/>
				))}

		

			</div>
		</div>

	)
}

export default CardContainer


CardContainer.propTypes = 
{
	children: PropTypes.arrayOf(Card.propTypes.args),
	cols: PropTypes.oneOf([1,2,3,4,5])
}
