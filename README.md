# Gatsby CSS Examples

There are three branches in this project:

- `css-modules-with-scss` contains an example of using [CSS Modules](https://github.com/css-modules/css-modules) preprocessed with [Sass](http://sass-lang.com/). Sass is loaded in as a [Gatsby plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/). Styles are defined in separate files then imported into our js files, much like regular ol’ CSS.

- `glamor` contains an example of using [Galmor](https://github.com/threepointone/glamor). Glamor is loaded in as a [Gatsby plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-glamor/). Styles are defined inline, just like in React Native, except that you have access to extra CSS properties in Glamor, such as `@media` queries and pseudo-selectors.

- `styled-components` contains an example of using [styled-components](https://github.com/css-modules/css-modules). styled-components is loaded in as a [Gatsby plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/). Styles are defined in the same file as our React component, and they “create” named components wrapped with styles we desire, all written in regular ol’ CSS syntax. This allows us to write style definitions separately and in regular ol’ CSS syntax, all while removing the binding between `className` and CSS `class` names.
