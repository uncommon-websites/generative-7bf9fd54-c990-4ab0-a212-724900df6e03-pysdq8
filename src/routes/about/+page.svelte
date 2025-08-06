<script lang="ts">
	import ContentOne from '$lib/components/content/content-one.svelte';
	import StatsOne from '$lib/components/stats/stats-one.svelte';
	import FooterTwo from '$lib/components/footer/footer-two.svelte';
</script>

<svelte:head>
	<title>About Squint - Documenting Tribal Knowledge for Manufacturing Teams</title>
	<meta name="description" content="Learn how Squint is revolutionizing knowledge management for manufacturing teams by automatically capturing and scaling operational expertise through visual documentation workflows." />
</svelte:head>

<!-- Hero Section -->
<section class="py-16 md:py-24 lg:py-32">
	<div class="mx-auto max-w-5xl px-6">
		<div class="text-center space-y-6">
			<h1 class="text-4xl font-medium lg:text-6xl xl:text-7xl text-balance">
				Documenting tribal knowledge shouldn't take tribal knowledge
			</h1>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
				Squint makes it effortless to capture and scale the know-how of your best people—right from the shop floor
			</p>
		</div>
	</div>
</section>

<!-- Main Content Section -->
<section class="py-16 md:py-32">
	<div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
		<div class="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
			<div class="relative mb-6 sm:mb-0">
				<div
					class="relative aspect-76/59 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700"
				>
					<img
						src="/static/generated/image-a-manufacturing-worker-documenting-an-as.webp"
						class="rounded-[15px] w-full h-full object-cover"
						alt="Manufacturing worker documenting assembly process"
						width={1207}
						height={929}
					/>
				</div>
			</div>

			<div class="relative space-y-6">
				<p class="text-muted-foreground text-lg">
					Most knowledge management tools weren't built for the factory floor. They're clunky, slow, and sit unused while critical expertise stays locked in someone's head. <span
						class="font-bold text-accent-foreground">That's where Squint is different.</span>
				</p>
				<p class="text-muted-foreground">
					We work where your teams do—on the line, during real workflows, in the moments that matter. Squint turns day-to-day processes into clear, visual instructions that anyone can follow, instantly and repeatably.
				</p>
				<p class="text-muted-foreground">
					We're building the fastest way to scale operational excellence across every location, shift, and hire.
				</p>

				<div class="pt-6">
					<blockquote class="border-l-4 pl-4 border-primary">
						<p class="text-lg italic">
							"Your team already knows how to do the work. Squint makes that knowledge work harder."
						</p>
					</blockquote>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Mission Section -->
<section class="py-16 md:py-24 bg-muted/30">
	<div class="mx-auto max-w-4xl px-6 text-center space-y-8">
		<h2 class="text-3xl font-medium lg:text-4xl">
			Solving the $47B Knowledge Management Problem
		</h2>
		<p class="text-lg text-muted-foreground max-w-3xl mx-auto">
			Manufacturing companies lose billions every year to inconsistent processes, quality issues, and knowledge gaps. We're changing that by making tribal knowledge instantly accessible and actionable for every team member.
		</p>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
			<div class="space-y-2">
				<h3 class="text-2xl font-bold text-primary">500K+</h3>
				<p class="text-sm text-muted-foreground">Process captures targeted</p>
			</div>
			<div class="space-y-2">
				<h3 class="text-2xl font-bold text-primary">50-500</h3>
				<p class="text-sm text-muted-foreground">Person companies we serve</p>
			</div>
			<div class="space-y-2">
				<h3 class="text-2xl font-bold text-primary">Real-time</h3>
				<p class="text-sm text-muted-foreground">Knowledge capture</p>
			</div>
		</div>
	</div>
</section>

<FooterTwo />