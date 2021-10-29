import Card from "../components/Card/Card";

export default 
{
	title: 'Forms/CardWithCheckbox',
	component: Card
}

const Template = args => <Card {...args}/>

export const Default = Template.bind({});
Default.args = 
{
	label: "Hello"
}

export const LongLabel = Template.bind({});
LongLabel.args = 
{
	label: "This is a long label testing"
}


