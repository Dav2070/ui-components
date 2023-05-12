import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { globalStyles } from "../styles.js"
import { toggleStyles } from "./toggle.styles.js"

export const toggleTagName = "ui-toggle"

@customElement(toggleTagName)
export class Toggle extends LitElement {
	static styles = [globalStyles, toggleStyles]

	@state() private inputClasses = {
		checked: false
	}
	@state() private sliderClasses = {
		darkTheme: false
	}

	@property({ type: Boolean }) checked: boolean = false

	private checkboxClicked(event: PointerEvent) {
		event.preventDefault()

		this.checked = !this.checked

		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { checked: this.checked }
			})
		)
	}

	render() {
		this.inputClasses.checked = this.checked

		return html`
			<label id="switch" class=${classMap(this.inputClasses)}>
				<input
					type="checkbox"
					?checked=${this.checked}
					@click=${this.checkboxClicked}
				/>
				<span id="slider" class=${classMap(this.sliderClasses)}></span>
			</label>
		`
	}
}
