<script lang="ts">
	import Meta from '$components/utils/Meta.svelte'
	import { t, locale } from 'svelte-intl-precompile'
</script>

<Meta
	title="Project rules"
	description="See our project rules and how they relate to your projects." />

<h1>{$t('pages.rules')}</h1>

{#if $locale !== 'en'}
	<p><b>{$t('locale.no_translation')}</b></p>
{/if}

<p>
	In order to facilitate the Modrinth's
	<a href="/legal/terms">Terms of Service</a>, all Projects (a form of Content as defined there)
	must obey the following Rules.
</p>

<h2 id="malware">1. Malware</h2>

<p>Projects cannot contain or download malware, which we define as software that is designed:</p>
<ul>
	<li>
		to upload any data to a remote server (i.e. one that the user does not directly choose to
		connect to in-game) without clear disclosure on the Project's page
	</li>
	<li>to disrupt, damage, or otherwise cause harm to an individual, computer, or network</li>
</ul>

<h2 id="function">2. Clear Function</h2>

<p>
	Projects must make a clear attempt to describe their function on the page(s) where it may be found
	and must not omit critical information a user must know before installing a Project.
</p>

<h2 id="misleading">3. Misleading Claims</h2>

<p>
	Projects must not make intentionally wrong or misleading claims about the function of a Project.
</p>

<h2 id="cheats">4. Cheats and Hacks</h2>

<p>
	Projects cannot contain or download "cheats", which we define as a client-side modification that:
</p>
<ul>
	<li>is advertised as a "cheat", "hack", or "hacked client"</li>
	<li>
		gives an unfair advantage in a multiplayer setting over other players that do not have a
		comparable modification and does not provide a server-side opt-out
	</li>
	<li>
		contains any of the following functions without requiring a server-side opt-in:
		<ul>
			<li>X-ray or the ability to see through opaque blocks</li>
			<li>aim bot or aim assist</li>
			<li>flight, speed, or other movement modifications</li>
			<li>automatic PvP</li>
			<li>
				active hiding of client modifications from a server, setting client brand to mimic vanilla,
				or others on a case-by-case basis
			</li>
			<li>item duplication</li>
		</ul>
	</li>
</ul>

<h2 id="legal-license">5. Legal License</h2>

<p>Projects must be uploaded only by someone who has the legal license to do so.</p>

<h2 id="explicit">6. Explicit Content</h2>

<p>Projects cannot contain sexual or explicit content.</p>

<h2 id="appendix">Appendix</h2>

<p>
	Modrinth reserves the right to remove any file, Project, or other Content uploaded to our platform
	which the Modrinth moderators deem is in violation of the Terms and/or Rules outlined in this
	document. Modrinth also reserves the right to introduce new rules at any time, which may or may
	not retroactively apply to already uploaded Content at the Modrinth moderators' discretion.
</p>
