module.exports = {
	name: "Button",
	properties: [
		{
			name: "size",
			type: "String",
			values: `"normal", "small"`
		},
		{
			name: "color",
			type: "String",
			values: `"primary", "secondary", "tertiary", "error"`
		},
		{
			name: "tonal",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "outline",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "text",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Primary button",
			template: `
				<div style="display: flex; gap: 30px">
					<ui-button>Hello World</ui-button>
					<ui-button tonal>Hello World</ui-button>
					<ui-button outline>Hello World</ui-button>
					<ui-button text>Hello World</ui-button>
				</div>

				<div style="display: flex; gap: 30px; margin-top: 30px">
					<ui-button size="small">Hello World</ui-button>
					<ui-button size="small" tonal>Hello World</ui-button>
					<ui-button size="small" outline>Hello World</ui-button>
					<ui-button size="small" text>Hello World</ui-button>
				</div>
			`
		},
		{
			title: "Secondary button",
			template: `
				<div style="display: flex; gap: 30px">
					<ui-button color="secondary">Hello World</ui-button>
					<ui-button color="secondary" tonal>Hello World</ui-button>
					<ui-button color="secondary" outline>Hello World</ui-button>
					<ui-button color="secondary" text>Hello World</ui-button>
				</div>

				<div style="display: flex; gap: 30px; margin-top: 30px">
					<ui-button size="small" color="secondary">Hello World</ui-button>
					<ui-button size="small" color="secondary" tonal>Hello World</ui-button>
					<ui-button size="small" color="secondary" outline>Hello World</ui-button>
					<ui-button size="small" color="secondary" text>Hello World</ui-button>
				</div>
			`
		},
		{
			title: "Tertiary tonal button",
			template: `
				<div style="display: flex; gap: 30px">
					<ui-button color="tertiary">Hello World</ui-button>
					<ui-button color="tertiary" tonal>Hello World</ui-button>
					<ui-button color="tertiary" outline>Hello World</ui-button>
					<ui-button color="tertiary" text>Hello World</ui-button>
				</div>

				<div style="display: flex; gap: 30px; margin-top: 30px">
					<ui-button size="small" color="tertiary">Hello World</ui-button>
					<ui-button size="small" color="tertiary" tonal>Hello World</ui-button>
					<ui-button size="small" color="tertiary" outline>Hello World</ui-button>
					<ui-button size="small" color="tertiary" text>Hello World</ui-button>
				</div>
			`
		},
		{
			title: "Error button",
			template: `
				<div style="display: flex; gap: 30px">
					<ui-button color="error">Hello World</ui-button>
					<ui-button color="error" tonal>Hello World</ui-button>
					<ui-button color="error" outline>Hello World</ui-button>
					<ui-button color="error" text>Hello World</ui-button>
				</div>

				<div style="display: flex; gap: 30px; margin-top: 30px">
					<ui-button size="small" color="error">Hello World</ui-button>
					<ui-button size="small" color="error" tonal>Hello World</ui-button>
					<ui-button size="small" color="error" outline>Hello World</ui-button>
					<ui-button size="small" color="error" text>Hello World</ui-button>
				</div>
			`
		},
		{
			title: "Disabled button",
			template: `
				<div style="display: flex; gap: 30px">
					<ui-button disabled>Hello World</ui-button>
					<ui-button tonal disabled>Hello World</ui-button>
					<ui-button outline disabled>Hello World</ui-button>
					<ui-button text disabled>Hello World</ui-button>
				</div>

				<div style="display: flex; gap: 30px; margin-top: 30px">
					<ui-button size="small" disabled>Hello World</ui-button>
					<ui-button size="small" tonal disabled>Hello World</ui-button>
					<ui-button size="small" outline disabled>Hello World</ui-button>
					<ui-button size="small" text disabled>Hello World</ui-button>
				</div>
			`
		}
	]
}
