import { Meta, Story, Props, Preview } from '@storybook/addon-docs/blocks';
import VIcon from './v-icon.vue';

<Meta title='Icon' component={VIcon} />

# Icon

The icon component allows you to render any [Material Design Icons](https://material.io/icons). It also supports rendering of custom SVG based icons.

## Sizes / Colors

The icon component supports multiple sizes and colors. The color prop accepts any valid CSS color. CSS variable names can be passed as well.

| Prop Name      | Size in PX |
|----------------|------------|
| `sup`          | 8          |
| `x-small`      | 12         |
| `small`        | 18         |
| None (default) | 24         |
| `large`        | 36         |
| `x-large`      | 48         |

The `sup` size is meant to be used as superscript. For example the required state flag.

## Custom Size
If the default sizes don't give you the exact size you require, you can add the `size` prop with any
custom pixel value. Note: we recommend using one of the pre-defined sizes to ensure a consistent look
across the platform.

## Outline
You can render the outline variant of the Material Icon by setting the `outline` property.

## Props
| Name      | Description                                                       | Default        |
|-----------|-------------------------------------------------------------------|----------------|
| `name`*   | Name of the icon                                                  | --             |
| `color`   | CSS color variable name (fe `--blue-grey`) or CSS color value     | `currentColor` |
| `outline` | Use outline Material Icons. Note: only works for non-custom icons | `false`        |
| `size`    | Custom pixel size                                                 | `false`        |
| `x-small` | Render the icon extra small                                       | `false`        |
| `small`   | Render the icon small                                             | `false`        |
| `large`   | Render the icon large                                             | `false`        |
| `x-large` | Render the icon extra large                                       | `false`        |

