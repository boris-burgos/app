<template>
	<v-switch :inputValue="value" @change="emitValue" :label="label" :disabled="readonly" />
</template>

<script lang="ts">
import { PropType } from 'vue';
import { createComponent, computed } from '@vue/composition-api';

type Options = {
	labelOn: string;
	labelOff: string;
	checkbox: boolean;
};

export default createComponent({
	props: {
		value: {
			type: Boolean,
			default: null
		},
		readonly: {
			type: Boolean,
			default: false
		},
		options: {
			type: Object as () => Options,
			required: true
		}
	},
	setup(props, { emit }) {
		const emitValue = (value: boolean) => emit('input', value);
		const label = computed<string>(() =>
			props.value ? props.options.labelOn : props.options.labelOff
		);

		return { emitValue, label };
	}
});
</script>
