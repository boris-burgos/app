import { mount, createLocalVue } from '@vue/test-utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

import VCheckbox from './v-checkbox.vue';

describe('Checkbox', () => {
	it('Renders passed label', () => {
		const component = mount(VCheckbox, {
			localVue,
			propsData: {
				label: 'Turn me on'
			}
		});

		expect(component.find('span[class="label"]').text()).toContain('Turn me on');
	});

	it('Uses the correct inline styles for custom colors', () => {
		const component = mount(VCheckbox, {
			localVue,
			propsData: {
				color: '#123123'
			}
		});

		expect((component.vm as any).colorStyle['--_v-Checkbox-color']).toBe('#123123');
	});

	it('Renders as checked when inputValue `true` is given', () => {
		const component = mount(VCheckbox, {
			localVue,
			propsData: {
				inputValue: true
			}
		});

		expect((component.vm as any).isChecked).toBe(true);
	});

	it('Calculates check for array inputValue', () => {
		const component = mount(VCheckbox, {
			localVue,
			propsData: {
				value: 'red',
				inputValue: ['red']
			}
		});

		expect((component.vm as any).isChecked).toBe(true);
	});

	it('Emits true when state is false', () => {
		const component = mount(VCheckbox, {
			localVue,
			propsData: {
				inputValue: false
			}
		});

		const button = component.find('button');
		button.trigger('click');

		expect(component.emitted().change[0][0]).toBe(true);
	});

	it('Disables the button when disabled prop is set', () => {
		const component = mount(VCheckbox, {
			localVue,
			propsData: {
				disabled: true
			}
		});

		const button = component.find('button');
		expect(button.attributes()).toContain('disabled');
	});

	it('Appends value to array', () => {
		const component = mount(VCheckbox, {
			localVue,
			propsData: {
				value: 'red',
				inputValue: ['blue', 'green']
			}
		});

		const button = component.find('button');
		button.trigger('click');

		expect(component.emitted().change[0][0]).toEqual(['blue', 'green', 'red']);
	});

	it('Removes value from array', () => {
		const component = mount(VCheckbox, {
			localVue,
			propsData: {
				value: 'red',
				inputValue: ['blue', 'green', 'red']
			}
		});

		const button = component.find('button');
		button.trigger('click');

		expect(component.emitted().change[0][0]).toEqual(['blue', 'green']);
	});
});
