import CardContainer from './../components/Card/CardContainer'
import * as Card from './Card.stories'

export default {
	title: 'Dashboard/CardGrid',
	component:CardContainer,
	argTypes: {
		cols:{
			control: {type:'range', min: 1, max:5, step: 1},
			defaultValue: 4
		}

	}
}

const Template = args => <CardContainer {...args}/>

export const Default = Template.bind({});
Default.args = {
	children: [
		Card.Default, 
		Card.Default,
		Card.Default, 
		Card.Default,
		Card.Default, 
		Card.Default,
		Card.Default, 
		Card.Default
	]
}


export const Empty = Template.bind({});
Empty.args = {
	children: []
}
