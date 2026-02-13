# Changelog

## 2.2.7

- Bump @types/node to 25.2.3
- Clean up test package dependencies

## 2.2.6

- Remove stale `@ts-expect-error` directives in form/cache hooks so `tsc` runs cleanly with current types
- Keep package type metadata aligned with declaration output (`dist/index.d.ts`) for better TypeScript resolution

## 2.2.4

- Fix peer dependency: use `termcast` instead of `@raycast/api`

## 2.2.3

- Use `npm:termcast@*` alias for `@raycast/api` in devDependencies for proper termcast development

## 2.2.2

- Initial @termcast/utils fork from @raycast/utils
- Remove build step, publish source directly for Bun
