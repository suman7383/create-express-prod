#!/usr/bin/env node

const { program } = require("commander");
const fs =  require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const validatePackageName = require('validate-npm-package-name');

function validateProjectName(name) {
  const validationResult = validatePackageName(name);
  if (!validationResult.validForNewPackages) {
    console.error('Invalid project name:');
    [...(validationResult.errors || []), ...(validationResult.warnings || [])].forEach((error) => {
      console.error(`  - ${error}`);
    });
    process.exit(1);
  }
}

program
  .version("0.0.1")
  .description("create an express project with typescript")
  .argument('<project-directory>', 'Project name')
  .action(async (projectDirectory) =>{
    
    // Validate project name
    validateProjectName(path.basename(projectDirectory));
    
    const templateDir = path.join(__dirname, "..", "templates", 'typescript');
    const projectDir = path.resolve(projectDirectory);

    console.log(`Creating a new Express(typescript) project at ./${path.basename(projectDir)}`);

    //copy the template files
    await fs.copy(templateDir, projectDir);

    //Read the package.json file
    const packageJsonPath = path.join(projectDir, 'package.json');
    const packageJson = require(packageJsonPath);

    //Modify package.json witht he project name
    packageJson.name = path.basename(projectDir);

    //write the package.json file back to the project directory
    await fs.writeJson(packageJsonPath, packageJson, {spaces: 2});

    //install dependencies
    console.log(`Files Copied\nInstalling dependencies...`);

    execSync('npm install', { cwd: projectDir, stdio: 'inherit' });

    console.log("Project created successfully!");
    console.log(`To get started, run the following commands:
      
      cd ${path.basename(projectDir)}
      npm start
      `);
  })

  program.parse(process.argv);
