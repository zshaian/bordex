<div align="center">
  <img src="https://i.imgur.com/BP3gURu.png" alt="bordex icon">

  <h1>Bordex</h1>

  A Javascript library for adding pre-styled borders for HTML elements.
</div>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install Bordex via npm:

```bash
npm install bordex
```

Alternatively, you can include it directly via CDN

```js
  import { addGradientBorder } from 'https://unpkg.com/bordex@latest/dist/index.js';
```

## Usage

Here's a quick example of how to use Bordex in your project:

```js
import { addGradientBorder } from 'bordex';

// Assuming you have an HTML element to apply the border to
const element = document.getElementById('element');
const anotherElement = document.getElementById('anotherElement');

// Add a gradient bordre to an elment with a default opions.
addGradientBorder(element);

// Add a gradient border to an element with a specific set of options.
addGradientBorder(anotherElement, { angle: '90deg', colors: ['red', 'orange'] });
```
## API
Check out the [API documentation](https://bordex.netlify.app/docs/api/) for a detailed list of available functions and options.

## Examples
Let's see an example on how to add a **stripe border** to an element
```js
import { addGradientBorder } from 'bordex';

// Assuming you have an HTML element to apply the border to
const element = document.getElementById('element');

// Add a stripe border to an elemen with a default options.
// The third argument is a class name for the created border element.
addGradientBorder(element, {}, 'gradient-border-element');
```
![an element with a gradient border to it](https://i.imgur.com/dyD2sZp.jpeg)

Check out the [Example Borders](https://bordex.netlify.app/docs/category/border---styles), [Codpen Demo](https://codepen.io/zhaian/pen/XWvBGMb) for more detailed usage and demos.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](./CONTRIBUTING.md ) for guidelines on how to conribute to this project.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
