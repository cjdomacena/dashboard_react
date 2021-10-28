import Card from './../components/Card/Card'

export default 
{
	title:'Dashboard/Card',
	component: Card
}

const Template = args => <Card {...args}/>

export const Default = Template.bind({});
Default.args = 
{
	color: "gray"
}

export const Hovered = Template.bind({});
Hovered.args = 
{
	color: "red"
}