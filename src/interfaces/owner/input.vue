<template>
	<div v-if="userInfo" class="owner">
		<v-avatar
			v-if="options.display !== 'name'"
			v-tooltip="options.display === 'avatar' ? displayValue : null"
			class="avatar"
			:size="32"
			:src="src"
			:alt="displayValue"
		></v-avatar>
		<span v-if="options.display !== 'avatar'" class="name">{{ displayValue }}</span>
		<v-icon name="account_box" />
	</div>
	<v-input
		v-else-if="newItem"
		:readonly="true"
		:placeholder="$t('interfaces.user.created-you')"
		icon-right="account_box"
	/>
	<v-input
		v-else
		:readonly="true"
		:placeholder="$t('interfaces.user.created-unknown')"
		icon-right="account_box"
	/>
</template>

<script>
import mixin from "@directus/extension-toolkit/mixins/interface";

export default {
	mixins: [mixin],
	computed: {
		userInfo() {
			if (!this.value) return null;
			if (typeof this.value === "object") {
				if (this.value.first_name) {
					return this.value;
				} else {
					return this.$store.state.users[this.value.id];
				}
			}
			return this.$store.state.users[this.value];
		},
		displayValue() {
			return this.$helpers.micromustache.render(this.options.template, this.userInfo);
		},
		src() {
			if (!this.userInfo.avatar) return null;
			return this.userInfo.avatar.data.thumbnails[0].url;
		}
	}
};
</script>

<style lang="scss" scoped>
.owner {
	position: relative;
	border: var(--input-border-width) solid var(--input-border-color);
	border-radius: var(--border-radius);
	height: var(--input-height);
	font-size: var(--input-font-size);
	padding: 4px 10px;
	display: flex;
	align-items: center;
	background-color: var(--input-background-color-disabled);
	i {
		position: absolute;
		top: 50%;
		color: var(--input-icon-color);
		transform: translateY(-50%);
		font-size: 24px;
		right: 10px;
	}
}
.avatar {
	width: max-content;
	display: inline-block;
	margin-right: 12px;
}
.name {
	display: inline-block;
}
</style>
