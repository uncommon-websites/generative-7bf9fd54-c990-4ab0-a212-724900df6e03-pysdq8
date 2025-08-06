<script lang="ts">
	import FooterTwo from '$lib/components/footer/footer-two.svelte';

	const leadership = [
		{
			name: 'Alex Chen',
			role: 'CEO & Co-Founder',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
			bio: 'Former manufacturing operations director with 15+ years scaling production teams.'
		},
		{
			name: 'Sarah Rodriguez',
			role: 'CTO & Co-Founder', 
			avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
			bio: 'Computer vision expert, previously led AI initiatives at major automotive manufacturers.'
		}
	];

	const engineering = [
		{
			name: 'Marcus Kim',
			role: 'Lead Engineer',
			avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
			bio: 'Full-stack engineer specializing in manufacturing systems integration.'
		},
		{
			name: 'Priya Patel',
			role: 'Computer Vision Engineer',
			avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
			bio: 'PhD in Computer Vision, expert in real-time process recognition.'
		},
		{
			name: 'David Thompson',
			role: 'Backend Engineer',
			avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
			bio: 'Infrastructure specialist focused on scalable manufacturing data systems.'
		}
	];

	const operations = [
		{
			name: 'Lisa Wang',
			role: 'Head of Customer Success',
			avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
			bio: 'Manufacturing consultant helping teams optimize their documentation workflows.'
		}
	];
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

<!-- Team Sections -->
<section class="py-12 md:py-32">
	<div class="mx-auto max-w-5xl px-6">
		
		<!-- Leadership -->
		<div class="mb-16">
			<h2 class="mb-8 text-3xl font-bold lg:text-4xl">Leadership</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
				{#each leadership as member}
					<div class="flex flex-col sm:flex-row gap-6 items-start">
						<div class="size-24 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5 flex-shrink-0">
							<img
								class="aspect-square rounded-full object-cover"
								src={member.avatar}
								alt={member.name}
								height="96"
								width="96"
								loading="lazy"
							/>
						</div>
						<div class="space-y-2">
							<h3 class="text-lg font-medium">{member.name}</h3>
							<p class="text-sm text-primary font-medium">{member.role}</p>
							<p class="text-sm text-muted-foreground">{member.bio}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Engineering -->
		<div class="mb-16">
			<h2 class="mb-8 text-3xl font-bold lg:text-4xl">Engineering</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each engineering as member}
					<div class="text-center space-y-4">
						<div class="size-20 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5 mx-auto">
							<img
								class="aspect-square rounded-full object-cover"
								src={member.avatar}
								alt={member.name}
								height="80"
								width="80"
								loading="lazy"
							/>
						</div>
						<div class="space-y-1">
							<h3 class="text-base font-medium">{member.name}</h3>
							<p class="text-sm text-primary font-medium">{member.role}</p>
							<p class="text-xs text-muted-foreground">{member.bio}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Operations -->
		<div class="mb-16">
			<h2 class="mb-8 text-3xl font-bold lg:text-4xl">Operations</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each operations as member}
					<div class="text-center space-y-4">
						<div class="size-20 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5 mx-auto">
							<img
								class="aspect-square rounded-full object-cover"
								src={member.avatar}
								alt={member.name}
								height="80"
								width="80"
								loading="lazy"
							/>
						</div>
						<div class="space-y-1">
							<h3 class="text-base font-medium">{member.name}</h3>
							<p class="text-sm text-primary font-medium">{member.role}</p>
							<p class="text-xs text-muted-foreground">{member.bio}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

	</div>
</section>

<!-- Join Us Section -->
<section class="py-16 md:py-24 bg-muted/30">
	<div class="mx-auto max-w-4xl px-6 text-center space-y-8">
		<h2 class="text-3xl font-medium lg:text-4xl">
			Join Our Team
		</h2>
		<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
			We're always looking for talented individuals who share our passion for solving real manufacturing challenges.
		</p>
		<div class="space-y-4">
			<p class="text-base">
				Want to work with us? 
				<a href="mailto:careers@squint.com" class="text-primary hover:underline font-medium">
					careers@squint.com
				</a>
			</p>
		</div>
	</div>
</section>

<FooterTwo />