module.exports = {
	name: "Dropdown",
	examples: [
		{
			title: "Default Dropdown",
			controller: function(element) {
				element.style.height = "200px"
				let dropdown = element.getElementsByTagName("ui-dropdown")[0]

				dropdown.options = [
					{
						key: "system",
						value: "System default",
						type: 0
					},
					{
						key: "light",
						value: "Light",
						type: 0
					},
					{
						key: "dark",
						value: "Dark",
						type: 0
					}
				]
			},
			template: `
				<ui-dropdown
					label="Theme">
				</ui-dropdown>
			`
		}
	]
}
