<script lang="ts">
	import Button from '../button/button.svelte';
</script>

<section>
	<div class="bg-muted py-24 md:py-32 dark:bg-background">
		<div class="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
			<div class="order-last mt-6 flex flex-col gap-12 md:order-first">
				<div class="space-y-6">
					<h2 class="text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
						Connects with your manufacturing stack
					</h2>
					<p class="text-muted-foreground">
						Squint integrates seamlessly with your existing ERP, MES, QMS, and collaboration tools to capture knowledge where work happens.
					</p>
					<Button variant="outline" size="sm">View Integrations</Button>
				</div>

				<div class="mt-auto grid grid-cols-[auto_1fr] gap-3">
					<div class="flex aspect-square items-center justify-center border bg-background p-2">
						<img src="https://logo.clearbit.com/sap.com" alt="SAP" class="h-8 w-8 object-contain" />
					</div>
					<blockquote>
						<p>"Squint eliminated our tribal knowledge bottleneck. Now when our senior assembler retires, their expertise stays with us."</p>
						<div class="mt-2 flex gap-2 text-sm">
							<cite>Sarah Chen</cite>
							<p class="text-muted-foreground">Operations Manager, Precision Manufacturing</p>
						</div>
					</blockquote>
				</div>
			</div>

			<div
				class="-mx-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] px-6 sm:mx-auto sm:max-w-md md:-mx-6 md:mr-0 md:ml-auto"
			>
				<div class="rounded-2xl border bg-background p-3 shadow-lg md:pb-12 dark:bg-muted/50">
					<div class="grid grid-cols-2 gap-2">
						{@render IntergrationCardv8({
							logoUrl: 'https://logo.clearbit.com/sap.com',
							name: 'SAP',
							description: 'ERP and manufacturing execution systems'
						})}
						{@render IntergrationCardv8({
							logoUrl: 'https://logo.clearbit.com/oracle.com',
							name: 'Oracle',
							description: 'Manufacturing cloud and supply chain'
						})}
						{@render IntergrationCardv8({
							logoUrl: 'https://logo.clearbit.com/microsoft.com',
							name: 'Microsoft',
							description: 'Teams, SharePoint, and Dynamics 365'
						})}
						{@render IntergrationCardv8({
							logoUrl: 'https://logo.clearbit.com/salesforce.com',
							name: 'Salesforce',
							description: 'Manufacturing cloud and service tools'
						})}
						{@render IntergrationCardv8({
							logoUrl: 'https://logo.clearbit.com/slack.com',
							name: 'Slack',
							description: 'Team communication and workflows'
						})}
						{@render IntergrationCardv8({
							logoUrl: 'https://logo.clearbit.com/zapier.com',
							name: 'Zapier',
							description: 'Workflow automation and integrations'
						})}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

{#snippet IntergrationCardv8({
	logoUrl,
	name,
	description
}: {
	logoUrl: string;
	name: string;
	description: string;
})}
	<div
		class="space-y-4 rounded-lg border p-4 transition-colors hover:bg-muted dark:hover:bg-muted/50"
	>
		<div class="flex size-fit items-center justify-center">
			<img src={logoUrl} alt={name} class="h-6 w-6 object-contain" />
		</div>
		<div class="space-y-1">
			<h3 class="text-sm font-medium">{name}</h3>
			<p class="line-clamp-1 text-sm text-muted-foreground md:line-clamp-2">
				{description}
			</p>
		</div>
	</div>
{/snippet}
