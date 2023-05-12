module.exports = {
	name: "Textfield",
	properties: [
		{
			name: "value",
			type: "String"
		},
		{
			name: "label",
			type: "String"
		},
		{
			name: "placeholder",
			type: "String"
		},
		{
			name: "errorMessage",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default Textfield",
			template: `
				<ui-textfield
					value="Monty"
					label="Name"
					placeholder="Your name"
					autocomplete="given-name"
				></ui-textfield>
			`
		},
		{
			title: "Disabled Textfield",
			template: `
				<ui-textfield
					value="Monty"
					label="Name"
					placeholder="Your name"
					autocomplete="given-name"
					disabled
				></ui-textfield>
			`
		},
		{
			title: "Textfield with error",
			template: `
				<ui-textfield
					value="Monty"
					label="Name"
					placeholder="Your name"
					autocomplete="given-name"
					errorMessage="Please enter your real name"
				></ui-textfield>
			`
		},
		{
			title: "Textfield for numeric values only",
			template: `
				<ui-textfield
					value="20"
					label="Age"
					placeholder="Your age"
					type="number"
					min="10"
					max="100"
				></ui-textfield>
			`
		}
	]
}
