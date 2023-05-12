import { css } from "@lit/reactive-element"

export const paginationStyles = css`
	.container {
		display: flex;
		justify-content: center;
	}

	.pagination-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 38px;
		height: 38px;
		font-family: Roboto, Arial, sans-serif;
		font-size: 16px;
		padding: 0;
		margin: 0px 2px;
		background-color: var(--md-sys-color-secondary-container-light);
		color: var(--md-sys-color-on-secondary-container-light);
		border-radius: 19px;
		border: none;
		transition: 200ms;
		cursor: pointer;
	}

	.pagination-button:hover {
		background-color: rgb(var(--md-ref-palette-secondary85-rgb));
	}

	.pagination-button:active,
	.pagination-button:focus {
		background-color: rgb(var(--md-ref-palette-secondary80-rgb));
	}

	.pagination-button.disabled {
		cursor: not-allowed;
	}

	.pagination-button.selected {
		background-color: var(--md-sys-color-secondary-light);
		color: var(--md-sys-color-on-secondary-light);
	}

	.pagination-button.selected:hover {
		background-color: rgb(var(--md-ref-palette-secondary35-rgb));
	}

	.pagination-button.selected:active,
	.pagination-button.selected:focus {
		background-color: rgb(var(--md-ref-palette-secondary30-rgb));
	}

	.button-placeholder {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 38px;
		margin: 0px 1px;
		color: var(--md-sys-color-on-surface-light);
	}

	svg {
		width: 16px;
		height: 16px;
		fill: var(--md-sys-color-on-secondary-container-light);
	}

	.forward-button svg {
		transform: rotate(180deg);
	}
`
