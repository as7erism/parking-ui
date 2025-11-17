<script>
	let { onClose, onAgree } = $props();
</script>

<div class="w-2xl space-y-4 rounded-xl bg-white px-6 py-6 shadow-md">
	<h2 class="text-center text-2xl font-bold">Parking Terms of Service</h2>
	<hr class="border-t-2 border-red" />
	<div class="space-y-4">
		<div class="max-h-[60vh] overflow-y-auto">
			<p>
				By proceeding and purchasing a permit, I acknowledge that I am responsible for compliance
				with University of Cincinnati Parking Rules, Policies and Procedures located on the
				<a
					href="https://www.uc.edu/about/parking"
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold text-blue-600 underline hover:text-blue-800"
				>
					Parking and Transportation Services website
				</a>.
			</p>
			<ul class="my-4 list-disc space-y-2 pl-6 text-sm marker:text-red">
				<li>
					I understand I am unable to purchase a permit for the Blue Ash or Clermont campuses unless
					I am an employee or student at that campus.
				</li>
				<li>
					I understand that if I am a payroll deducted employee or if my permit is paid for with
					recurring credit card payments, it is my responsibility to notify Parking and
					Transportation Services in person or in writing when I want to cancel my parking. I will
					be responsible for any fees incurred up to the point of cancellation. I acknowledge no
					retroactive refunds will be given for failure to cancel parking in a timely manner.
				</li>
				<li>
					I acknowledge if I am a student, it is my responsibility to notify Parking and
					Transportation Services in person or in writing when I want to cancel my parking. I will
					be responsible for any fees incurred up to the point of cancellation. I acknowledge no
					retroactive refunds will be given for failure to cancel parking in a timely manner.
				</li>
				<li>
					I acknowledge that my parking permit and associated fees do not automatically stop nor are
					they refunded because I have separated or withdrawn from the University of Cincinnati, or
					have stopped using the permit.
				</li>
				<li>
					I acknowledge that it is my responsibility to keep my vehicle information updated and that
					I am responsible for any fees resulting from failure to do so.
				</li>
				<li>
					I understand that my permit is for my use only and that using it for others can result in
					citation, fees or impoundment.
				</li>
			</ul>
			<p class="mt-4 text-sm font-semibold uppercase">
				I UNDERSTAND AND AGREE I AM RESPONSIBLE FOR ALL CHARGES UP TO THE DATE I CANCEL/RETURN MY
				PERMIT.
			</p>
			<p class="mt-4 text-base font-bold">
				I have reviewed and fully agree to all terms and conditions listed above, and would like to
				purchase a permit.
			</p>
		</div>

		<hr class="border-t-2 border-black/10" />

		<div class="flex justify-between space-x-4">
			<button class="button-ghost-black" onclick={onClose}> Cancel </button>
			<button class="button-red" onclick={onAgree}> I agree with the UC Parking Policies </button>
		</div>
	</div>
</div>
