<template>
	<button
		@click="toggleInput"
		class="v-switch"
		type="button"
		role="switch"
		:aria-pressed="isChecked ? 'true' : 'false'"
	>
		<slot name="label">{{ label }}</slot>
	</button>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api';

export default createComponent({
	model: {
		prop: 'inputValue',
		event: 'change'
	},
	props: {
		value: {
			type: String,
			default: null
		},
		inputValue: {
			type: [Boolean, Array],
			default: false
		},
		label: {
			type: String,
			default: null
		}
	},
	setup(props, { emit }) {
		const isChecked = computed<boolean>(() => {
			if (props.inputValue instanceof Array) {
				return props.inputValue.includes(props.value);
			}

			return props.inputValue === true;
		});

		return { isChecked, toggleInput };

		function toggleInput(): void {
			if (props.inputValue instanceof Array) {
				let newValue = [...props.inputValue];

				if (isChecked.value === false) {
					newValue.push(props.value);
				} else {
					newValue.splice(newValue.indexOf(props.value), 1);
				}

				emit('change', newValue);
			} else {
				emit('change', !isChecked.value);
			}
		}
	}
});
</script>

<style lang="scss">
.v-switch {
}
</style>
