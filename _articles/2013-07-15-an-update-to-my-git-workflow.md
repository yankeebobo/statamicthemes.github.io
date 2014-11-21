---
main_img: ""
title: An Update To My Git Workflow
meta_title: ""
meta_desc: "This is a quick update to a post I wrote  a couple of days ago on my Git workflow  with Statamic, I received a couple of  comments which I have now added to  improve things."
alt_title: ""
author: garethredfern
featured: not_featured
categories:
  - tutorials
tags:
  - git
  - version control
video: ""
summary: >
  This is a quick update to a post I wrote
  a couple of days ago on my Git workflow
  with Statamic, I received a couple of
  comments from Ant Hubbard which I have
  now added to improve things.
---
Previously in my [Git workflow](http://www.statamicthemes.com/articles/the-perfect-version-control-workflow-for-statamic) I followed these steps:

1. Create an empty Bitbucket or Github private repository.
2. Clone locally and add all your system and theme files.
3. Create any content locally and push back to the Bitbucket or Github repository,
4. SSH into your server and navigate to your site’s root folder using the terminal command cd your/site/root.
5. Once you are in the route of your site you need to initialise Git using the terminal command git init.
6. Finally you can pull your complete repository from Bitbucket or Github using the terminal command git pull git@bitbucket.org:garethredfern/thesitefolder.git don’t forget your git path will be for your own repository (the one you use to clone normally).

From Ant's comments though I realised that 5 and 6 are a bit long winded and actually unnecessary. If you follow the points up to and including point 4, then once in the home directory for your site you just need to run the following command in your terminal:

~~~.language-markup
git clone git@bitbucket.org:garethredfern/thesitefolder.git .
~~~

Notice I am using git clone here instead of git pull and **one really important thing to note is the period at the end of the path** (don't forget your git path will be for your own repository as well). I had tried this method previously and couldn't get it to work but the period is the really important part of the command as this tells Git to clone everything inside your repository not the folder itself. If you forget the period you will end up cloning the site but inside a folder so it will not be in the root of your domains directory.

###The Change Workflow V2
O.K. so this is the bit I love (even more). You can update files locally, change your theme, add content whatever you like. You push that up to your Git hosting account as you normally would but then you login to your server using the terminal and SSH. CD to your site’s home directory then run `git pull` all your files are then pulled up to your main site. Mr or Mrs client then logs into the site’s control panel and adds some new content, no problem you just log in, navigate to your site’s home directory and run git status. This will tell you what files have been changed. You then run git add . (note the period) this adds any new files ready to be committed. Next run git commit -am “your commit message” this will commit the changes on the server. Then finally run `git push`. This will push the changes back to you git hosting account ready to be pulled back down to your development server. With my [old method](http://www.statamicthemes.com/articles/the-perfect-version-control-workflow-for-statamic) you needed the full path each time which I had just stored as a Textexpander snippet but this way you don't need to do that as Git knows the path to your Github or Bitbucket repository.

###Thank You
So a big thank you to [Ant Hubbard](https://twitter.com/anthubbard) for his comments I am now even happier with my Git workflow.