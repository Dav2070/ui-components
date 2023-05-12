import { css } from "@lit/reactive-element"

export const panelStyles = css`
	#container {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}

	#overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: var(--md-sys-color-scrim-light);
	}

	#content {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		width: 340px;
		background-color: var(--md-sys-color-surface-light);
		border-radius: 28px 0 0 28px;
	}

	#header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24px 24px 0 24px;
		color: var(--md-sys-color-on-surface-light);
	}

	#header {
		font-size: 22px;
		font-family: Roboto, sans-serif;
		font-weight: 500;
		margin: 0;
	}

	#close-button {
		float: right;
	}

	#close-button svg {
		width: 24px;
		height: 24px;
		color: var(--md-sys-color-on-surface-variant-light);
	}

	#slot-container {
		margin: 12px 0 0 24px;
		overflow-y: auto;
	}
`
