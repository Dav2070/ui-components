module.exports = {
	name: "IconButton",
	properties: [
		{
			name: "selected",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Default IconButton",
			controller: function(element) {
				let iconButton = element.getElementsByTagName("ui-icon-button")[0]

				iconButton.onclick = () => {
					iconButton.selected = !iconButton.selected
				}
			},
			template: `
				<ui-icon-button>
					<i class="fa-solid fa-magnifying-glass"></i>
				</ui-icon-button>
			`
		},
		{
			title: "Small IconButton",
			controller: function(element) {
				let iconButton = element.getElementsByTagName("ui-icon-button")[0]

				iconButton.onclick = () => {
					iconButton.selected = !iconButton.selected
				}
			},
			template: `
				<ui-icon-button size="small">
					<i class="fa-solid fa-magnifying-glass"></i>
				</ui-icon-button>
			`
		},
		{
			title: "IconButton with link",
			template: `
				<ui-icon-button href="https://projektarbeitstore.web.app/" target="blank">
					<i class="fa-solid fa-globe"></i>
				</ui-icon-button>
			`
		},
		{
			title: "Small IconButton with link",
			template: `
				<ui-icon-button size="small" href="https://projektarbeitstore.web.app/" target="blank">
					<i class="fa-solid fa-globe"></i>
				</ui-icon-button>
			`
		}
	]
}
