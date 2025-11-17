<script>
	import PermitModal from '$lib/components/PermitModal.svelte';
	let showPermitModal = $state(false);
</script>

<div class="content flex items-end justify-between">
	<img
		class="m-[7px] h-[62px]"
		src="https://uc.aimsparking.com/resources/index.php?cmd=get_site_logo"
		alt=""
	/>
	<p class="logout">Logout</p>
</div>
<div class="h-[23px] bg-red shadow-lg">
	<div class="content flex justify-end">
		<p class="font-[Jost] text-white">Logged in as Kaleb Wells</p>
	</div>
</div>
<div class="content m-7">
	<div class="flex flex-row justify-between">
		<div class="h-100 w-90 rounded-2xl bg-red shadow-2xl">
			<h1 class="p-5 text-center font-[Jost] text-7xl font-bold text-white text-shadow-lg">
				10 Days
			</h1>
			<p class="p-3 text-center font-[Jost] text-xl text-white">
				Till parking passes are available for <b>next semester</b> on <b>December 1st</b>
			</p>
		</div>
		<div class="">
			<h1 class="font-[Jost] text-5xl font-bold text-black">Your Passes</h1>
			<div class="m-7 grid grid-cols-2 space-y-5">
				<div class="relative w-fit">
					<img class="h-50 drop-shadow-lg" src="/no_parking_pass.png" />
					<div class="absolute top-1/2 right-0 left-0 flex flex-col items-center justify-center">
						<p class="weight-200 font-[Jost] text-black">No Passes</p>
						<p class="weight-200 font-[Jost] text-black">Order Below</p>
					</div>
				</div>
			</div>
			<div class="flex">
				<a class="button-red" onclick={() => (showPermitModal = true)}>ORDER PASS</a>
				<a class="button-ghost-red">PREVIOUS PASSES</a>
			</div>
		</div>
		<div class="">
			<h1 class="font-[Jost] text-5xl font-bold text-black">Tickets/Tows</h1>
			<div class="m-7 grid grid-cols-2 space-y-5">
				<div class="relative">
					<img class="h-50 drop-shadow-lg" src="/no_tickets.png" />
					<div class="absolute top-1/4 right-0 left-0 flex flex-col items-center justify-center">
						<p class="weight-200 font-[Jost] text-black">No Tickets</p>
						<p class="weight-200 font-[Jost] text-black">or Tows</p>
					</div>
				</div>
			</div>
			<div class="flex">
				<a class="button-ghost-red">PREVIOUS VIOLATIONS</a>
			</div>
		</div>
	</div>
</div>

{#if showPermitModal}
	<PermitModal onClose={() => (showPermitModal = false)} />
{/if}

<style>
	.logout {
		background: var(--color-red);
		font-family: Jost;
		color: white;
		font-size: 22px;
		font-weight: 400;
		padding-block: 7px;
		padding-inline: 15px;
		border-top-left-radius: 7px;
		border-top-right-radius: 7px;
		box-shadow: 4px 0px 10px rgb(0 0 0 / 25%);
	}

	.logout:hover {
		background: var(--color-dark-red);
	}
</style>
