<script lang="ts">
	import { Card, CardContent, CardHeader } from '$lib/components/card';
	import CardDecorator from '$lib/components/feature/card-decorator.svelte';
	import Camera from '@lucide/svelte/icons/camera';
	import Search from '@lucide/svelte/icons/search';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Zap from '@lucide/svelte/icons/zap';
	import Eye from '@lucide/svelte/icons/eye';
	import Settings from '@lucide/svelte/icons/settings';
</script>

<svelte:head>
	<title>Features - Squint's Visual Documentation Platform for Manufacturing</title>
	<meta name="description" content="Discover how Squint's computer vision technology captures tribal knowledge in real-time, creates searchable work instructions, and standardizes processes across manufacturing locations." />
</svelte:head>

<!-- Hero Section -->
<section class="py-16 md:py-24 lg:py-32">
	<div class="mx-auto max-w-5xl px-6">
		<div class="text-center space-y-6">
			<h1 class="text-4xl font-medium lg:text-6xl xl:text-7xl text-balance">
				The fastest way to turn know-how into can-do
			</h1>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
				Transform your manufacturing expertise into searchable, visual work instructions that scale across every location and shift.
			</p>
		</div>
	</div>
</section>

<!-- Main Features Section -->
<section class="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
	<div class="@container mx-auto max-w-5xl px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-semibold text-balance lg:text-5xl">Built for the factory floor</h2>
			<p class="mt-4 text-muted-foreground">
				No complex setups. No IT headaches. Just one tool that works where your people do.
			</p>
		</div>
		<div
			class="mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16 @min-4xl:max-w-full @min-4xl:grid-cols-3"
		>
			<Card class="group shadow-zinc-950/5">
				<CardHeader class="pb-3">
					<CardDecorator>
						<Camera class="size-6" aria-hidden />
					</CardDecorator>

					<h3 class="mt-6 font-medium">Capture processes as they happen</h3>
				</CardHeader>

				<CardContent>
					<p class="text-sm">
						Stop chasing people for SOPs. Squint records and structures work instructions in real time without interrupting production.
					</p>
				</CardContent>
			</Card>

			<Card class="group shadow-zinc-950/5">
				<CardHeader class="pb-3">
					<CardDecorator>
						<Eye class="size-6" aria-hidden />
					</CardDecorator>

					<h3 class="mt-6 font-medium">Visual documentation, automatically</h3>
				</CardHeader>

				<CardContent>
					<p class="mt-3 text-sm">
						Photos, videos, step-by-step instructions—automatically stitched into an easy-to-follow format. No editing required.
					</p>
				</CardContent>
			</Card>

			<Card class="group shadow-zinc-950/5">
				<CardHeader class="pb-3">
					<CardDecorator>
						<Search class="size-6" aria-hidden />
					</CardDecorator>

					<h3 class="mt-6 font-medium">Searchable tribal knowledge</h3>
				</CardHeader>

				<CardContent>
					<p class="mt-3 text-sm">
						Search by part, team, machine, or keyword. Tribal knowledge is now just a search away from anyone who needs it.
					</p>
				</CardContent>
			</Card>
		</div>
	</div>
</section>

<!-- Secondary Features Section -->
<section class="py-16 md:py-32">
	<div class="mx-auto max-w-6xl px-6">
		<div class="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
			<div class="lg:col-span-2">
				<div class="md:pr-6 lg:pr-0">
					<h2 class="text-4xl font-semibold lg:text-5xl">Scale across every location</h2>
					<p class="mt-6 text-muted-foreground">
						Whether you've got 2 sites or 20, Squint helps you roll out process changes instantly and consistently everywhere.
					</p>
				</div>
				<ul class="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
					<li>
						<MapPin class="size-5" />
						Multi-location standardization
					</li>
					<li>
						<Zap class="size-5" />
						Instant process updates
					</li>
					<li>
						<Settings class="size-5" />
						Consistent quality control
					</li>
					<li>
						<Eye class="size-5" />
						Real-time visibility
					</li>
				</ul>
			</div>
			<div class="relative rounded-3xl border border-border/50 p-3 lg:col-span-3">
				<div
					class="relative aspect-76/59 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700"
				>
					<img
						src="/static/generated/image-a-manufacturing-worker-documenting-an-as.webp"
						class="rounded-[15px] w-full h-full object-cover"
						alt="Manufacturing process documentation"
						width={1207}
						height={929}
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Computer Vision Section -->
<section class="py-16 md:py-24 bg-muted/30">
	<div class="mx-auto max-w-4xl px-6 text-center space-y-8">
		<h2 class="text-3xl font-medium lg:text-4xl">
			Powered by Computer Vision
		</h2>
		<p class="text-lg text-muted-foreground max-w-3xl mx-auto">
			Our advanced computer vision technology automatically identifies key steps, tools, and safety procedures in your manufacturing processes, creating comprehensive documentation without manual input.
		</p>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
			<div class="space-y-4">
				<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
					<Camera class="size-6 text-primary" />
				</div>
				<h3 class="text-lg font-medium">Automatic Capture</h3>
				<p class="text-sm text-muted-foreground">
					Captures every critical step without interrupting workflow
				</p>
			</div>
			<div class="space-y-4">
				<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
					<Settings class="size-6 text-primary" />
				</div>
				<h3 class="text-lg font-medium">Smart Processing</h3>
				<p class="text-sm text-muted-foreground">
					AI organizes and structures documentation automatically
				</p>
			</div>
			<div class="space-y-4">
				<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
					<Search class="size-6 text-primary" />
				</div>
				<h3 class="text-lg font-medium">Instant Search</h3>
				<p class="text-sm text-muted-foreground">
					Find any process, part, or procedure in seconds
				</p>
			</div>
		</div>
	</div>
</section>