import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { getGlobalStyleHtml } from "../utils.js"
import { globalStyles } from "../styles.js"
import { settingStyles } from "./setting.styles.js"

export const settingTagName = "ui-setting"

@customElement(settingTagName)
export class Setting extends LitElement {
	static styles = [globalStyles, settingStyles]

	@property() header: string = ""

	render() {
		return html`
			${getGlobalStyleHtml()}

			<div id="setting-container">
				<p id="setting-header">
					${this.header}
				</p>

				<div>
					<slot></slot>
				</div>
			</div>
		`
	}
}
