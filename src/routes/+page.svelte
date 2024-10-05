<script lang="ts">
	import Hero from '$lib/components/ui/hero/hero.svelte';

	const subtitle = [
		'Computer Science Student',
		'Societies Forum President',
		'WorldSkills Ireland Champion',
		'VT/STAR Student @ SAP'
	];
</script>

<Hero subtitle={subtitle[Math.floor(Math.random() * subtitle.length)]} />
