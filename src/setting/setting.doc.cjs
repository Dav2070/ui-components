module.exports = {
	name: "Setting",
	properties: [
		{
			name: "header",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default Setting",
			template: `
				<ui-setting header="Hello World">
					<ui-toggle></ui-toggle>
				</ui-setting>
			`
		}
	]
}
