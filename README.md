# create-express-prod

A CLI tool to quickly set up a production-ready Express.js project with TypeScript, ESLint support and Husky.

## Installation

You can use `npx` to run this package without installing it globally:

```bash
npx create-express-prod@latest my-new-project
```

Or, if you prefer, you can install it globally:

```bash
npm install -g create-express-prod
create-express-prod my-new-project
```

## Features

- Quick setup of an Express.js project with TypeScript
- ESLint configuration included
- Organized project structure for scalability

## Usage

Run the following command and follow the prompts:

```bash
npx create-express-prod@latest my-new-project
```

## Project Structure

The generated project will have the following structure:

```
my-new-project/
├── src/
│   ├── config/
│   ├── connections/
│   ├── constant/
│   ├── controller/
│   ├── interface/
│   ├── middleware/
│   ├── model/
│   ├── router/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── app.ts
│   └── index.ts
├── .env.example
├── .gitignore
├── .prettierrc
├── commitlint.config.js
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Scripts

The generated `package.json` includes the following scripts:

- `npm start`: Starts the server
- `npm run dev`: Starts the server with nodemon for development (watches for file changes)
- `npm run build`: Transpiles TypeScript to JavaScript

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## GitHub Repository

[https://github.com/suman7383/create-express-prod](https://github.com/suman7383/create-express-prod)

## Issues

If you encounter any problems or have feature requests, please file an issue on the [GitHub issues page](https://github.com/suman7383/create-express-prod/issues).
