<script lang="ts">
	import SquintTeam from '$lib/components/team/squint-team.svelte';
	import CtaTwo from '$lib/components/cta/cta-two.svelte';
</script>

<svelte:head>
	<title>Team - Meet the Squint Team Building the Future of Manufacturing Documentation</title>
	<meta name="description" content="Meet the team behind Squint's revolutionary visual documentation platform. Engineers, designers, and manufacturing experts obsessed with solving tribal knowledge challenges." />
</svelte:head>

<!-- Hero Section -->
<section class="py-16 md:py-24 lg:py-32">
	<div class="mx-auto max-w-4xl px-6">
		<div class="text-center space-y-6">
			<h1 class="text-4xl font-medium lg:text-6xl xl:text-7xl text-balance">
				Built with operators in mind
			</h1>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
				We don't just build the software. We listen on the factory floor, iterate fast, and solve real problems with real ops teams.
			</p>
		</div>
	</div>
</section>

<!-- Mission Section -->
<section class="py-16 md:py-24 bg-muted/30">
	<div class="mx-auto max-w-4xl px-6 text-center space-y-8">
		<h2 class="text-3xl font-medium lg:text-4xl">
			Our Mission
		</h2>
		<div class="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto">
			<p>
				Our team is made up of builders, designers, and engineers obsessed with one simple question:
			</p>
			<blockquote class="text-2xl font-medium text-foreground italic">
				"What would it look like if documenting a process took less time than doing it?"
			</blockquote>
			<p>
				We're driven by the idea that better documentation leads to better consistency, better quality, and better teams.
			</p>
			<p class="font-medium">
				And we're just getting started.
			</p>
		</div>
	</div>
</section>

<!-- Team Component -->
<SquintTeam />

<!-- Join Us CTA -->
<CtaTwo />