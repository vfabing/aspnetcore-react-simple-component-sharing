# Initialize projects
```cmd
CD Front
dotnet new react
CD ..
CD Back
dotnet new react
```

# Add shared components library
```cmd
CD shared
npm init
npm i --save-dev typescript
npm i --save-dev @types/node
npm i --save-dev @types/react
npm i --save react
npm i --save react-dom
```
- Modify manually `package.json` file and make `react` and `react-dom` as peerDependencies  
- Add a `tsconfig.json` file such as
```json
{
    "compilerOptions": {
        "jsx": "react",
        "declaration": true,
        "outDir": "./dist/",
        "esModuleInterop": true,
        "moduleResolution": "node",
        "rootDir": "./src"
    },
    "include": [
        "src/**/*"
    ]
}
```
- Modify the `package.json` file to add `copy-sass`, `build-ts` and `build` scripts
```json
"scripts": {
  "copy-sass": "(robocopy src dist *.scss /E) ^& IF %ERROR_LEVEL% LEQ 1 exit 0",
  "build-ts": "tsc",
  "build": "npm run copy-sass && npm run build-ts",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```
- Add a component and a sass file, and generate your package by running `npm run build`.

# Add Typescript and SASS
```cmd
CD Back
npm i --save-dev @types/react
npm i --save-dev @types/react-router
npm i --save-dev node-sass
```

```cmd
CD Front
npm i --save-dev @types/react
npm i --save-dev @types/react-router
npm i --save-dev node-sass
```

# Reference shared components
```cmd
CD Front\ClientApp
npm i ../../shared
```

## Typescript
```typescript
import BlueButton from "shared/dist/components/BlueButton";
```

## SASS
```scss
@import "shared/dist/sass/BlueButton";
```

# Dev workflow
- Modify your components or sass files and run `npm run build` command to update the package.