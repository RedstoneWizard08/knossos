<script context="module" lang="ts">
	export function load({ error, status }) {
		return {
			props: {
				status,
				message: error.message,
			},
		}
	}
</script>

<script lang="ts">
	import { t } from 'svelte-intl-precompile'
	import Logo404 from '$assets/images/logo/404.svg'
	import { Button } from 'omorphia'
	import { markdownInline } from 'omorphia/utils'
	import Meta from '$components/utils/Meta.svelte'

	export let status: number
	export let message = ''
</script>

<Meta
	title={$t('error.status', { values: { status } })}
	description={message || $t('error.message.default')}
	noindex />

<div class="status">
	{#if status === 404}
		<Logo404 width="100%" />
	{:else}
		<h1>{$t('error.status', { values: { status } })}</h1>
	{/if}
</div>

<p class="error-message">
	{#if message}
		{message}
	{:else if status === 404}
		{@html markdownInline($t('error.message.404'))}
	{:else}
		{$t('error.message.default')}
	{/if}
</p>

<div class="error-actions">
	<Button href="/" color="primary">{$t('error.actions.home')}</Button>
	<Button href="/discord" color="raised" target="_blank">{$t('error.actions.discord')}</Button>
</div>

<style lang="postcss">
	.status {
		display: flex;
		margin: 2rem 0;
		max-width: 600px;
		font-size: 2rem;
	}

	.error-actions {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.error-message {
		text-align: center;
		line-height: 200%;
		margin-top: -1rem;

		:global(a) {
			color: var(--color-link);

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
