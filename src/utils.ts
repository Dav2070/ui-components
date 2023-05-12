import { html } from "lit"
import {
	ButtonColor,
	ButtonSize,
	Alignment,
	Orientation,
	ListItemSize
} from "./types.js"

var settingsChangeCallbacks: Function[] = []

export function getGlobalStyleHtml() {
	return html`
		<!-- Bootstrap -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
			crossorigin="anonymous"
		/>

		<!-- Office UI Fabric Core -->
		<link
			href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css"
			rel="stylesheet"
		/>

		<!-- Goole Font -->
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
			rel="stylesheet"
		/>
	`
}

//#region Enum converter functions
export function convertStringToButtonColor(value: string): ButtonColor {
	switch (value) {
		case "secondary":
			return ButtonColor.secondary
		case "tertiary":
			return ButtonColor.tertiary
		case "error":
			return ButtonColor.error
		default:
			return ButtonColor.primary
	}
}

export function convertStringToButtonSize(value: string): ButtonSize {
	switch (value) {
		case "small":
			return ButtonSize.small
		default:
			return ButtonSize.normal
	}
}

export function convertStringToAlignment(value: string): Alignment {
	switch (value) {
		case "start":
			return Alignment.start
		case "end":
			return Alignment.end
		default:
			return Alignment.center
	}
}

export function convertStringToOrientation(value: string): Orientation {
	switch (value) {
		case "horizontal":
			return Orientation.horizontal
		default:
			return Orientation.vertical
	}
}

export function convertStringToListItemSize(value: string): ListItemSize {
	switch (value) {
		case "small":
			return ListItemSize.small
		default:
			return ListItemSize.normal
	}
}
//#endregion
