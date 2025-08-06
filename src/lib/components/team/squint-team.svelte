<script lang="ts">
	const leadership = [
		{
			name: 'Alex Chen',
			role: 'CEO & Co-Founder',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
		},
		{
			name: 'Sarah Rodriguez',
			role: 'CTO & Co-Founder', 
			avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
		}
	];

	const engineering = [
		{
			name: 'Marcus Kim',
			role: 'Lead Engineer',
			avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
		},
		{
			name: 'Priya Patel',
			role: 'Computer Vision Engineer',
			avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
		},
		{
			name: 'David Thompson',
			role: 'Backend Engineer',
			avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
		}
	];

	const operations = [
		{
			name: 'Lisa Wang',
			role: 'Head of Customer Success',
			avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face'
		}
	];
</script>

<section class="py-12 md:py-32">
	<div class="mx-auto max-w-4xl px-8 lg:px-6">
		<h2 class="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Meet the team</h2>

		<!-- Leadership -->
		<div class="mb-12">
			<h3 class="mb-6 text-lg font-medium">Leadership</h3>
			<div class="grid grid-cols-1 gap-6 border-t py-6 md:grid-cols-2">
				{#each leadership as member}
					<div class="flex items-center gap-4">
						<div class="size-16 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5 flex-shrink-0">
							<img
								class="aspect-square rounded-full object-cover"
								src={member.avatar}
								alt={member.name}
								height="64"
								width="64"
								loading="lazy"
							/>
						</div>
						<div>
							<span class="block text-base font-medium">{member.name}</span>
							<span class="block text-sm text-muted-foreground">{member.role}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Engineering -->
		<div class="mb-12">
			<h3 class="mb-6 text-lg font-medium">Engineering</h3>
			<div class="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-3">
				{#each engineering as member}
					<div class="text-center">
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
						<span class="mt-2 block text-sm font-medium">{member.name}</span>
						<span class="block text-xs text-muted-foreground">{member.role}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Operations -->
		<div>
			<h3 class="mb-6 text-lg font-medium">Operations</h3>
			<div class="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-3">
				{#each operations as member}
					<div class="text-center">
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
						<span class="mt-2 block text-sm font-medium">{member.name}</span>
						<span class="block text-xs text-muted-foreground">{member.role}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>