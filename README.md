# CI GitHub Actions Demo

Proyecto mínimo Node.js + TypeScript para demostrar una CI simple con GitHub Actions.

La demo ejecuta:

```bash
npm ci
npm run format:check
npm run lint
npm test
npm run build
npm run start
```

También incluye un paso simple de seguridad:

```bash
npm audit --audit-level=high
```

## Estructura importante

```text
.github/workflows/ci.yml  # Workflow de GitHub Actions
src/                       # Código TypeScript
test/                      # Tests con Vitest
package.json               # Scripts de calidad, test y build
```

## Uso local

```bash
npm install
npm run format:check
npm run lint
npm test
npm run build
npm run start
```

`npm run build` compila el proyecto en `dist/` y `npm run start` ejecuta
`dist/src/index.js`.

## Ejercicio sugerido

1. Crear una rama `feature/ci-github`.
2. Subir este proyecto a GitHub.
3. Abrir un Pull Request contra `main`.
4. Revisar la pestaña **Actions**.
5. Romper un test a propósito, por ejemplo cambiando `toBe(5)` por `toBe(6)`.
6. Ver el fallo en el step **Test**.
7. Corregirlo y confirmar que la CI queda verde.

## Quality gate conceptual

En esta demo, el quality gate está representado por los pasos que pueden fallar:

- `format:check`
- `lint`
- `test`
- `build`
- `npm audit --audit-level=high`

La idea para clase: el quality gate no es la herramienta; es la decisión de bloquear o no bloquear según una señal de calidad o seguridad.
