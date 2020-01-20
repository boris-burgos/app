<template><div>interface</div></template>

<script lang="ts">
import { PropType } from 'vue';
import { createComponent } from '@vue/composition-api';

type Options = {
	labelOff: string;
	labelOn: string;
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
	setup(props) {
		props.options;
	}
});
</script>
