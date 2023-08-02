![Cover (2)](https://github.com/hceresetti/dio-spiderverse-angular/src/assets/home-background.png)

# 🕷️ Spiderverse Angular Project

This is a personal fork of a transpilation of the Spiderverse project repository by [Henry Ceresetti](https://github.com/hceresetti), originally developed during a YouTube [livestream](https://youtu.be/FRdES4ZmxXI) in partnership with [DIO](https://dio.me), from the development stacks of front-end React, Next.js and Framer Motion in Angular.

The original project consists of an interactive application inspired by the Spider-Man universe, and this fork seeks to behave in the same way as the original project, the only effective difference being the so-called transpilation of the [React](https://react.dev/) 18 Web framework, from the framework to React [Next.js](https://nextjs.org/) 13 and the library for React [Framer Motion](https://www.framer.com/motion/) in [Angular](https://angular.io/) 16.1 – evidently preserving the use of the [TypeScript](https://www.typescriptlang.org/) 5.1 web programming language, the tool for identifying and reporting patterns found in codes written in JavaScript [ESLint](https://eslint.org/) 8.46, and the [Sass](https://sass-lang.com/) 1.64 CSS preprocessor to create a visually amazing and high performance project.

[Project demo (WEBM)](https://github.com/micheleambrosio/dio-spiderverse/assets/55519539/6ea3a467-ca98-4b3d-aa16-855db8a5fdb0)

## 📚 Materials

-   [YouTube live stream link](https://www.youtube.com/watch?v=d5HVw12uOpk)
-   [Complete step-by-step support material](https://micheleambrosio.notion.site/Live-Criando-um-carrossel-parallax-do-Aranhaverso-com-React-Next-js-13-e- Framer-Motion-67a818e32c2049d39d28ce4a185555c4?pvs=4)
-   [Assets](https://drive.google.com/drive/folders/150O6eEhs8oGaHMMss7_CYG2jnI7yMugO?usp=sharing) (image files and sound effects)
-   [Design prototype in Figma](https://www.figma.com/file/rgHS7o5MyTAxk9vCRH5YhL/Landpage-%2B-Mobile---SpiderVerse?type=design&node-id=0%3A1&mode=design&t=5SFRyEJyIbhD90Sl-1)

## 🌿 Branches

-   `main` has the finished project with all the functionalities implemented during the live transmission;
-   `template` has the initial structure to start the project, containing all assets, libraries, folder structure and settings applicable to ESLint;
-   `live` has the part of the project already started for code review in live transmission, ready for the implementation of user interactions and animations with the project.

## 🎨 Protótipo do projeto

[Design prototype in Figma of Spiderverse project](https://www.figma.com/file/rgHS7o5MyTAxk9vCRH5YhL/Landpage-%2B-Mobile---SpiderVerse?type=design&node-id=0%3A1&mode=design&t=5SFRyEJyIbhD90Sl-1)

## 🗄️ Estrutura de pastas

O projeto está estruturado da seguinte forma:

-   📁 `src`
		-   📁 `app`
				-   📁 `caroussel`
				-   📁 `hero`
						-   📁 `[id]`
				-   📁 `hero-details`
				-   📁 `hero-picture`
				-   📁 `heroes-list`
		-   📁 `assets`
				-   📁 `fonts`
				-   📁 `icons`
				-   📁 `songs`
				-   📁 `spiders`
		-   📁 `interfaces`
		-   📁 `providers` - 📁 `heroes`

## 📄 Starting point: template to start from scratch

-   In the project's GitHub repository, a branch called `template` will be available, which contains the initial structure to start the project, containing all the assets, libraries, folder structure and settings applicable to ESLint;
-   Just fork the project repository to your account and start development from there. If you prefer, you can also start the project from scratch, installing the dependencies described in the “Technologies used in the project” section.

## 🛠️ Execution instructions

Follow the instructions below to run the project in your local environment:

1. Make sure you have [Node.js](https://nodejs.org/) installed on your computer's storage drive;

2. Clone this repository on your computer's storage unit or download the source code;

3. Start a terminal session and navigate to the project's root directory;

4. Install the project's dependencies by running the following command:

```bash
yarn install
```

5. After the installation of dependencies is complete, start the local development server with the command:

```bash
yarn dev
```

6. The local server will start and you will be able to access the project in your browser through the following address:

```bash
http://localhost:3000
```

If port 3000 is in use, Next.js will automatically go up on the next free port of the operating system installed on your computer.

If you want to change the default port on which the application will try to load, you can modify the port in the `karma.conf.js` file.

You are now ready to explore the project in your local environment!

## 📚 Project step-by-step

[Live: Creating a Parallax Spiderverse Carousel (PDF)](https://github.com/digitalinnovationone/spiderverse/files/12098974/Live.Criando.um.carrossel.parallax.do.Aranhaverso.67a818e32c2049d39d28ce4a185555c4.pdf)

## 👨‍💻 Author

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Author Description</title>
	</head>
	<style>
		img {
			text-align: left;
			margin: 10px;
			width: 80px;
		}
	</style>
	<body>
		<p>
			<img src="https://avatars.githubusercontent.com/u/103071259?v=4">
			<p>
				&nbsp;&nbsp;&nbsp;
				Henry Melo Ceresetti
				<br>
				&nbsp;&nbsp;&nbsp;
				<a href="https://github.com/hceresetti">GitHub</a>&nbsp;|&nbsp;
				<a href="https://www.linkedin.com/in/hceresetti/">LinkedIn</a>&nbsp;
		</p>
	</p>
	<br><br>
	<p>
		---
		⌨️ com 💪 por [Henry Ceresetti](https://github.com/hceresetti) 😎
	</p>
</body>
</html>
