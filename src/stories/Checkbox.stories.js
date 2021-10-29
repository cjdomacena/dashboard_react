import Checkbox from "../components/Checkbox/Checkbox";


export default
{
	title:'Forms/Checkbox',
	component: Checkbox,
}


const Template = args => <Checkbox {...args}/>


export const Default = Template.bind({});

Default.args = 
{
	label: "Default Checkbox"
}

export const LongLabel = Template.bind({});
LongLabel.args = 
{
	label: "This is a long label might be useful?"
}