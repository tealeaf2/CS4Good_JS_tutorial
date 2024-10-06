# CS4Good_JS_Tutorial

## Introduction

This is a tutorial for the South Bend Community Math Project that is meant to help you to learn Javascript, HTML and Github source control. 

## Task

Your job is to clone this Github repository and create a button that changes a color bar with each click. Using the provided code in the tutorial, you can use that code as a template for the color bar. Make sure to put your code in a `folder that is the name of your ND_ID`. As a reminder for Github source control, you can do the things below:

1. Clone the Github repository and update your repo from `main`

```
git clone https://github.com/tealeaf2/CS4Good_JS_tutorial.git
git pull
```

2. Checkout a new branch from `main` and make your folder

```
git checkout -b feature-[ND_ID]-[implementation]
mkdir [ND_ID]
cd [ND_ID]
```

3. When you are done working on your color bar, you can stage your changes and commit them. 
- You can commit all at once

```
git add --all
git commit -m "Tutorial Color Bar: Done"
git push -u origin feature-[ND_ID]-[implementation]
```

- Or you can commit seperately

```
git add *.html
git add *.js
git add *.css
git commit -m "Tutorial Color Bar: Done"
git push -u origin feature-[ND_ID]-[implementation]
```

4. Go to your Github repository online and create a pull request, assigning `tealeaf2` or `sadesco` as the instructors.

5. Congrats, you can pat yourself on the back!