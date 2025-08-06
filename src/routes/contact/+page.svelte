<script lang="ts">
	import Input from '$lib/components/input/input.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Button from '$lib/components/button/button.svelte';
	import Label from '$lib/components/label/label.svelte';
	import Mail from '@lucide/svelte/icons/mail';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Clock from '@lucide/svelte/icons/clock';
	import Phone from '@lucide/svelte/icons/phone';

	let name = '';
	let email = '';
	let company = '';
	let message = '';
	let isSubmitting = false;
	let submitMessage = '';

	async function handleSubmit() {
		isSubmitting = true;
		submitMessage = '';
		
		try {
			// Simulate form submission
			await new Promise(resolve => setTimeout(resolve, 1000));
			
			// Here you would typically send the data to your backend
			console.log({ name, email, company, message });
			
			submitMessage = 'Thank you! We\'ll get back to you within 24 hours.';
			
			// Reset form
			name = '';
			email = '';
			company = '';
			message = '';
		} catch (error) {
			submitMessage = 'Sorry, there was an error sending your message. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>Contact Squint - Get a Demo of Visual Documentation for Manufacturing</title>
	<meta name="description" content="Ready to see how Squint can transform your manufacturing documentation? Contact our team for a personalized demo and learn how to capture tribal knowledge automatically." />
</svelte:head>

<!-- Hero Section -->
<section class="py-16 md:py-24 lg:py-32">
	<div class="mx-auto max-w-4xl px-6">
		<div class="text-center space-y-6">
			<h1 class="text-4xl font-medium lg:text-6xl xl:text-7xl text-balance">
				Talk to the team behind the tech
			</h1>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
				See how Squint can work for your floor
			</p>
		</div>
	</div>
</section>

<!-- Main Content -->
<section class="py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
			
			<!-- Contact Information -->
			<div class="space-y-8">
				<div>
					<h2 class="text-2xl font-medium mb-6">Get in touch</h2>
					<p class="text-muted-foreground mb-8">
						Whether you're looking to reduce errors across sites or just get SOPs that actually get used, we'd love to chat.
					</p>
				</div>

				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
							<Mail class="size-5 text-primary" />
						</div>
						<div>
							<h3 class="font-medium mb-1">Email us</h3>
							<a href="mailto:hello@squint.com" class="text-muted-foreground hover:text-primary transition-colors">
								hello@squint.com
							</a>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
							<MapPin class="size-5 text-primary" />
						</div>
						<div>
							<h3 class="font-medium mb-1">Based in</h3>
							<p class="text-muted-foreground">San Jose, California</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
							<Clock class="size-5 text-primary" />
						</div>
						<div>
							<h3 class="font-medium mb-1">Demo availability</h3>
							<p class="text-muted-foreground">Monday–Friday, 9am–5pm Pacific Time</p>
						</div>
					</div>
				</div>

				<div class="pt-8 border-t">
					<h3 class="font-medium mb-4">Need support?</h3>
					<p class="text-muted-foreground mb-2">
						Looking for support? 
						<a href="mailto:support@squint.com" class="text-primary hover:underline">
							support@squint.com
						</a>
					</p>
					<p class="text-muted-foreground">
						Have feedback? We'd love to hear it.
					</p>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="bg-muted/30 rounded-2xl p-8">
				<h2 class="text-2xl font-medium mb-6">Request a demo</h2>
				
				{#if submitMessage}
					<div class="mb-6 p-4 rounded-lg {submitMessage.includes('Thank you') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}">
						{submitMessage}
					</div>
				{/if}

				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div class="space-y-2">
							<Label for="name">Name *</Label>
							<Input 
								type="text" 
								id="name" 
								bind:value={name} 
								placeholder="Your name" 
								required 
								disabled={isSubmitting}
							/>
						</div>
						<div class="space-y-2">
							<Label for="email">Email *</Label>
							<Input 
								type="email" 
								id="email" 
								bind:value={email} 
								placeholder="your.email@company.com" 
								required 
								disabled={isSubmitting}
							/>
						</div>
					</div>

					<div class="space-y-2">
						<Label for="company">Company *</Label>
						<Input 
							type="text" 
							id="company" 
							bind:value={company} 
							placeholder="Your company name" 
							required 
							disabled={isSubmitting}
						/>
					</div>

					<div class="space-y-2">
						<Label for="message">Tell us about your challenges</Label>
						<Textarea 
							id="message" 
							bind:value={message} 
							placeholder="What documentation challenges are you facing? How many locations do you have? What processes would you like to standardize first?"
							rows={4}
							disabled={isSubmitting}
						/>
					</div>

					<Button 
						type="submit" 
						class="w-full" 
						disabled={isSubmitting || !name || !email || !company}
					>
						{isSubmitting ? 'Sending...' : 'Get Demo'}
					</Button>
				</form>

				<p class="text-xs text-muted-foreground mt-4">
					* Required fields. We'll get back to you within 24 hours.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Additional CTA Section -->
<section class="py-16 md:py-24 bg-muted/30">
	<div class="mx-auto max-w-4xl px-6 text-center space-y-8">
		<h2 class="text-3xl font-medium lg:text-4xl">
			Ready to capture tribal knowledge?
		</h2>
		<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
			Join manufacturing teams who've already started documenting their processes automatically with Squint.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button href="mailto:hello@squint.com" size="lg">
				Schedule a Call
			</Button>
			<Button variant="outline" href="/features" size="lg">
				See How It Works
			</Button>
		</div>
	</div>
</section>