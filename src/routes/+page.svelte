<script lang="ts">
	import Hero from '$lib/components/ui/hero/hero.svelte';

	const subtitles = [
		'Computer Science Student',
		'Societies Forum President',
		'WorldSkills Ireland Champion',
		'VT/STAR Student @ SAP'
	];

	let tempSubtitles = subtitles;
	let subtitle = updateSubtitle();

	function updateSubtitle() {
		const index = Math.floor(Math.random() * tempSubtitles.length);

		const newSubtitle = tempSubtitles[index];
		tempSubtitles = tempSubtitles.filter((_, i) => i !== index);

		if (tempSubtitles.length === 0) {
			tempSubtitles = subtitles;
		}

		return newSubtitle;
	}

	setInterval(() => {
		subtitle = updateSubtitle();
	}, 3000);
</script>

<Hero {subtitle} />
