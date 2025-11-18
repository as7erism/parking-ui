<script>
	import StepTerms from '$lib/components/steps/StepTerms.svelte';
	import StepOptions from '$lib/components/steps/StepOptions.svelte';
	import StepGarages from '$lib/components/steps/StepGarages.svelte';
	import StepVehicle from '$lib/components/steps/StepVehicle.svelte';
	import StepPayment from '$lib/components/steps/StepPayment.svelte';

	let { onClose } = $props();

	let step = $state(1);
	const totalSteps = 5;
</script>

<div class="fixed inset-0 flex items-center justify-center bg-black/35">
	{#if step === 1}
		<StepTerms {onClose} onAgree={() => (step += 1)} />
	{:else if step === 2}
		<StepOptions {onClose} onNext={() => (step += 1)} onBack={() => (step -= 1)} />
	{:else if step === 3}
		<StepGarages {onClose} onNext={() => (step += 1)} onBack={() => (step -= 1)} />
	{:else if step === 4}
		<StepVehicle {onClose} onNext={() => (step += 1)} onBack={() => (step -= 1)} />
	{:else if step === 5}
		<StepPayment {onClose} onNext={() => (step += 1)} onBack={() => (step -= 1)} />
	{/if}
</div>
