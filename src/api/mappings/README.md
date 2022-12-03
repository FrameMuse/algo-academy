# Mappings

Mappings are nothing but helpers, just plain transfomers. Note that they **have to** be pure functions. There is always a place for mapping on a spot.

## Features

- Change key or fix its casing (i.e. transform to `camelCase`).
- Transform value (i.e. `string` to `Date`).
- Mock lacking data (i.e. make from `undefined` a `"unknown"` value).

## Problems

- Difficult to maintain as project grows since mapping files look messy.
- Mapping needs to be done in two directions to map incoming data and outcoming. (This problem partialy cured by `BiMap`).

## BiMap

### Guidelines

- When using BiDirectional (two ways) mapping, there is rule that forward direction is always from **outside** to **inside**, that is to say from data which comes from **API** to what **App** consumes.
- Mappings **should not** filter, split, remove or add any data from array, objects (but can skip **fields**).

### Live example

Data that App receives from API is `"admin" | "user"` (plain string).

Data that App consumes is `UserType` (enum).

In this case, forward direction will be from `"admin" | "user"` to `UserType`.

### When to use it

When mapped data is plain `string | number` (for both directions).
