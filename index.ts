import { DropdownOption, DropdownOptionType } from "./src/types.js"

// Components
import {
	BlurhashImage,
	blurhashImageTagName
} from "./src/blurhash-image/blurhash-image.js"
import { Button, buttonTagName } from "./src/button/button.js"
import { Checkbox, checkboxTagName } from "./src/checkbox/checkbox.js"
import { Dropdown, dropdownTagName } from "./src/dropdown/dropdown.js"
import { IconButton, iconButtonTagName } from "./src/icon-button/icon-button.js"
import { List, listTagName } from "./src/list/list.js"
import { ListItem, listItemTagName } from "./src/list-item/list-item.js"
import { Pagination, paginationTagName } from "./src/pagination/pagination.js"
import { Panel, panelTagName } from "./src/panel/panel.js"
import { Setting, settingTagName } from "./src/setting/setting.js"
import { TabBar, tabBarTagName } from "./src/tab-bar/tab-bar.js"
import {
	TabBarItem,
	tabBarItemTagName
} from "./src/tab-bar-item/tab-bar-item.js"
import { Textfield, textfieldTagName } from "./src/textfield/textfield.js"
import { Toggle, toggleTagName } from "./src/toggle/toggle.js"

declare global {
	interface HTMLElementTagNameMap {
		[blurhashImageTagName]: BlurhashImage
		[buttonTagName]: Button
		[checkboxTagName]: Checkbox
		[dropdownTagName]: Dropdown
		[iconButtonTagName]: IconButton
		[listTagName]: List
		[listItemTagName]: ListItem
		[paginationTagName]: Pagination
		[panelTagName]: Panel
		[settingTagName]: Setting
		[tabBarTagName]: TabBar
		[tabBarItemTagName]: TabBarItem
		[textfieldTagName]: Textfield
		[toggleTagName]: Toggle
	}
}

export {
	DropdownOption,
	DropdownOptionType,
	BlurhashImage,
	Button,
	Checkbox,
	Dropdown,
	IconButton,
	List,
	ListItem,
	Pagination,
	Panel,
	Setting,
	TabBar,
	TabBarItem,
	Textfield,
	Toggle
}
