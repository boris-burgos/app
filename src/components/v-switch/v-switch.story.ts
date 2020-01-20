import { withKnobs, text, boolean, number, optionsKnob as options } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Vue from 'vue';
import VSwitch from '../v-switch/';
import markdown from './v-switch.readme.md';

Vue.component('v-switch', VSwitch);

export default {
	title: 'Switch',
	component: VSwitch,
	decorators: [withKnobs],
	parameters: {
		notes: markdown
	}
};

export const withBoolean = () => ({
	methods: {
		onChange: action('change')
	},
	data() {
		return {
			checked: false
		};
	},
	template: `
	<div>
		<v-switch v-model="checked" @change="onChange" />
		<pre>{{checked}}</pre>
	</div>
	`
});

export const withArray = () => ({
	methods: {
		onChange: action('change')
	},
	data() {
		return {
			options: ['html', 'css']
		};
	},
	template: `
	<div>
		<v-switch v-model="options" value="html" @change="onChange" />
		<v-switch v-model="options" value="css" @change="onChange" />
		<v-switch v-model="options" value="js" @change="onChange" />
		<pre>{{options}}</pre>
	</div>
	`
});
