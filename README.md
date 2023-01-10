# algo-academy_client

## Run server locally

1. `npm i`
2. `npm start`

## Structure

...

## Themes

Some UI elements have theme implementation, some not. Ones that have can be wrapped with `Theme` component to change theme.

Themes are curretly used only in `workspace`.

## Utils

### Transform

#### Price

Transformes prices by the ISO standard ([Inlt.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)) and parses

#### Phone number

Transformes phone number by `+1 (234) 567 89-00` standard (or with your custom template) and parses.

#### Date

Humanizes date as by [the design](design/).

#### File

Converts `File` to URLData and fetches.
