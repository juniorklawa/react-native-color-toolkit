<p align="center">
    <img alt="react-native-elements" src="https://images.emojiterra.com/google/android-11/512px/1f3a8.png" width="256">
</p>

<h1 align="center"> React Native Color Toolkit</h1>
<p align="center">
A well-tested library written in typescript to help mobile developers who care about color.
</p>

	

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-color-toolkit"><img src="https://img.shields.io/npm/v/react-native-color-toolkit.svg"></a>
  <a href="https://github.com/juniorklawa/react-native-auto-size-text"><img src="https://img.shields.io/github/stars/juniorklawa/react-native-color-toolkit"></a>
  <a href="https://www.npmjs.com/package/react-native-color-toolkit"><img src="https://img.shields.io/npm/dm/react-native-color-toolkit.svg"></a>
   <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>
<br />

<!-- TABLE OF CONTENTS -->
# Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Example](#example-with-all-modes)
* [Props](#props)
* [Contributing](#contributing)



# Installation
#### yarn
```sh
yarn react-native-color-toolkit
```
#### npm
```sh
npm i react-native-color-toolkit
```

# Modification Functions

## brighten(color: string,  amount: number)
A function that returns  a brighter color given a color and a percentage (from 0 to 1).

### Example
```javascript
import { brighten } from  'react-native-color-toolkit';

...

<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: '#2196F3'}]} />
	<Text  style={styles.subtitle}>Modified color</Text>
</View>
<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: brighten('#2196F3', 0.5)}]} />
	<Text  style={styles.subtitle}>Original color</Text>
</View>

...
```
### Result
![enter image description here](https://i.imgur.com/iO4iNbO.png)

## darken(color: string,  amount: number)
A function that returns  a darker color given a color and a percentage (from 0 to 1).

### Example
```javascript
import { darken } from  'react-native-color-toolkit';

...

<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: '#2196F3'}]} />
	<Text  style={styles.subtitle}>Original color</Text>
</View>
<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: darken('#2196F3', 0.5)}]} />
	<Text  style={styles.subtitle}>Modified color</Text>
</View>

...
```
### Result
![enter image description here](https://i.imgur.com/mw6kr5A.png)

## desaturate(color: string,  amount: number)
A function that returns a desaturated color given a color and a percentage (from 0 to 1).

### Example
```javascript
import { desaturate } from  'react-native-color-toolkit';

...

<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: '#2196F3'}]} />
	<Text  style={styles.subtitle}>Original color</Text>
</View>
<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: desaturate('#2196F3', 0.5)}]} />
	<Text  style={styles.subtitle}>Modified color</Text>
</View>

...
```
### Result
![enter image description here](https://i.imgur.com/kymGh6b.png)

## greyscale(color: string)
A function that returns a greyscaled color given a color.

### Example
```javascript
import { greyscale } from  'react-native-color-toolkit';

...

<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: '#2196F3'}]} />
	<Text  style={styles.subtitle}>Original color</Text>
</View>
<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: greyscale('#2196F3')}]} />
	<Text  style={styles.subtitle}>Modified color</Text>
</View>

...
```
### Result
![enter image description here](https://i.imgur.com/4izxvDg.png)

## lighten(color: string,  amount: number)
A function that returns a lightened color given a color and a percentage (from 0 to 1).

### Example
```javascript
import { lighten } from  'react-native-color-toolkit';

...

<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: '#2196F3'}]} />
	<Text  style={styles.subtitle}>Original color</Text>
</View>
<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: lighten('#2196F3', 0.3)}]} />
	<Text  style={styles.subtitle}>Modified color</Text>
</View>

...
```
### Result
![enter image description here](https://i.imgur.com/MgvSPUL.png)

## saturate(color: string,  amount: number)
A function that returns a saturated color given a color and a percentage (from 0 to 1).

### Example
```javascript
import { lighten } from  'react-native-color-toolkit';

...

<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: '#2196F3'}]} />
	<Text  style={styles.subtitle}>Original color</Text>
</View>
<View  style={{justifyContent:  'center', alignItems:  'center'}}>
	<View  style={[styles.box, {backgroundColor: lighten('#2196F3', 0.3)}]} />
	<Text  style={styles.subtitle}>Modified color</Text>
</View>

...
```
### Result
![enter image description here](https://i.imgur.com/hUy6M9Q.png)


<br />


# Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
