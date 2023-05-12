import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { getGlobalStyleHtml } from "../utils.js"
import { globalStyles } from "../styles.js"
import { tabBarStyles } from "./tab-bar.styles.js"

export const tabBarTagName = "ui-tab-bar"

@customElement(tabBarTagName)
export class TabBar extends LitElement {
	static styles = [globalStyles, tabBarStyles]

	render() {
		return html`
			${getGlobalStyleHtml()}

			<div id="container">
				<slot></slot>
			</div>
		`
	}
}
