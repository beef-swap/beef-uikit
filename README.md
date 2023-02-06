# Beef UIkit

[![Version](https://img.shields.io/npm/v/@beefswap-libs/uikit)](https://www.npmjs.com/package/@beefswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@beefswap-libs/uikit)](https://www.npmjs.com/package/@beefswap-libs/uikit)

Beef UIkit is a set of React components and hooks used to build pages on Beef's apps. It also contains a theme file for dark mode.

## Install

`yarn add @beefswap-libs/uikit`

## Setup

### Theme

Before using Beef UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { dark } from '@beefswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@beefswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://beefswap.github.io/beef-uikit/)
