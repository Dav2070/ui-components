module.exports = {
	name: "Panel",
	examples: [
		{
			title: "Default Panel",
			controller: function(element) {
				let button = element.getElementsByTagName("ui-button")[0]
				let panel = element.getElementsByTagName("ui-panel")[0]

				button.onclick = () => {
					panel.visible = true
				}

				panel.addEventListener("dismiss", () => {
					panel.visible = false
				})
			},
			template: `
				<ui-button>
					Open panel
				</ui-button>

				<ui-panel header="Hello World">
				</ui-panel>
			`
		}
	]
}
