# Bordex

A Javascript library for adding pre-styled borders for HTML elements.

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

Alternatively, you can include it directly in your HTML via CDN

```html
<!-- Example 1 -->
<script src="./https://cdn.jsdelivr.net/npm/dist/index.js"></script>

<!-- Example 2 -->
<script type="module">
  import { addGradientBorder } from './https://cdn.jsdelivr.net/npm/dist/index.js';
</script>
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
Check out the [API documentation](#) for a detailed list of available functions and options.

## Examples

Check out the [Example Borders](#) for more detailed usage and demos.

## Contributing

Contributions are welcome! Please read the [CONTRIBUING.md]() for guidelines on how to conribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.