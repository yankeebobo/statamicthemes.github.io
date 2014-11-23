---
title: "The Perfect Version Control Workflow For Statamic?"
layout: post
date: 2013-07-14
author: garethredfern
categories:
  - tutorials
tags:
  - git
  - version control
summary: >
  The more you use Statamic the more you love it, everything
  can be stored in one place and as long as you use a private
  repo you can store everything in your version control hosting
  tool of choice. In this post I will run through my workflow
  of moving site content and files seamlessly between Bitbucket,
  my local machine, development and production servers.
---
With Statamic your content is stored as flat markdown files, and for me this was one of the massive draws to use it on as many projects as possible. Finally you could develop using real content locally and keep that content version controlled, making moving between development and production a dream to do. Yes I had been version controlling my theme and app files prior to using Statamic, but you always had the issue of trying to keep a database in sync with new content and custom fields, as many of you reading this will know, databases are a pain to keep in sync.

### Enter Statamic & No More Databases
When I first started using Statamic I did what probably most people do; created a local site in MAMP, installed the system files, created/imported some content, then built my first theme. Everything I did was kept in a private repo in Bitbucket where I could push and pull files safe in the knowledge that it was backed up and version controlled. Once the site was ready to go live I would open up my FTP client, upload the files and happy days everything would be kept in version control but could be pushed to my server once I was happy. This worked o.k. and I even started using the deploy functionality of Beanstalk so that I could push new content from my local machine straight through to the server without the need to FTP in and upload. This process is sort of floored once you start either:

- using the control panel to add content on the server.
- handing a site over to the client that then uses the control panel to add content.

Initially I would just FTP into the server and pull down any content and images that had been added through the control panel into my local site. Once these were downloaded I would then commit the changes to my repo and everything would be up to date. Whilst this works fine, the process just seemed clunky and I knew it could be improved, so I went on the hunt for a solution.

First let me say, I am not a terminal or a git master I used to shy away from both, turning to [Git Tower](http://www.git-tower.com) to do all my git stuff and [Transmit](http://panic.com/transmit) for uploading my files to the server, therefore avoiding the terminal wherever possible. I warn you now that my new process does require a bit of terminal work, but trust me I now find the little bit I do, as enjoyable as using Statamic, and it really isn't that scary, trust me.

### Git On The Server
Anyone who uses git (and you all should be) will have git installed locally, whether that be through downloading from the [Git install page](http://git-scm.com/downloads) or as part of your GUI install (Git Tower etc.). This works great for your day to day work and is all most people will need normally, but you can also install git on any server (I say any, you would need to check with your hosting provider, as SSH access is required). I googled and asked around and it turns out that installing git on the server just requires a simple command through SSH. Log in to your server as root and then type.

~~~bash
yum install git
~~~

That's all there is to it, you should get a message telling you that git is now installed (don't forget you must be logged in as root, this is important).

Whilst on my search for how to install Git I found one host (WebFaction) that already had git installed and worked out of the box. I had also heard that [WebFaction](https://www.webfaction.com/?affiliate=redfern) (affiliate link) had been really fast and popular with some Kirby sites, so I signed up to give them a try. I have to say the whole WebFaction experience has been brilliant and the interface for creating sites is simple and really nice to use. They also provide some really helpful documentation on using git on their servers that you can view once you have an account with them. I liked them so much that I have now switched all my Statamic sites over to run with them.

O.k. So you have git installed on your server, next you will need to install an SSH key so that your Bitbucket or Github account will recognise your server and allow it to push and pull from your Statamic site repository. Github provides a helpful set of [instructions](https://help.github.com/articles/generating-ssh-keys) which you can follow, its almost an identical process to when you created an SSH key on your mac or pc. Log in to the home directory of your server, this is where the .ssh directory is located. To get to the home directory just type:

~~~bash
cd ~
~~~

once there follow the [Github instructions](https://help.github.com/articles/generating-ssh-keys) up to the point where it tells you to copy and paste the key using

~~~bash
pbcopy < ~/.ssh/id_rsa.pub
~~~

this command doesn't work on most servers (I'm no expert so don't quote me on that, but it didn't on mine). There are a number of work rounds you can [google around](https://www.google.co.uk/search?q=pbcopy+linux&oq=pbcopy+linuk&aqs=chrome.1.69i57j0l3.7365j0&sourceid=chrome&ie=UTF-8#sclient=psy-ab&q=pbcopy+apache&oq=pbcopy+apache&gs_l=serp.3...26128.31657.0.32075.8.7.1.0.0.0.93.576.7.7.0....0.0..1c.1.20.psy-ab.Kt9jCDgLlt8&pbx=1&bav=on.2,or.r_cp.r_qf.&bvm=bv.49641647%2Cd.d2k%2Cpv.xjs.s.en_US.NyLNrjc7wJY.O&fp=92ae9abfb618f6a9&biw=1146&bih=802) to see, but I just logged in using Transmit with SFTP, switched show hidden files on and navigated to /.ssh/id_rsa.pub, opened it up in Sublime Text and copied it that way. Once you have copied your key, paste it into your Bitbucket or Github account SSH key area as the Github instructions show you.

#### Notes
On the linux server running Plesk I needed to be logged in as root to access the httpdocs folder of the site, so l needed to create the SSH key when logged in as root using sudo su. This will save the SSH key in /root/.ssh/id_rsa. To be quite honest though if you are unfamiliar with this type of setup I would go with Webfaction as it was super simple to set up.

### The Workflow
Once you are finally set up and your Git host and server can speak to each other you are ready to create your first site and start with the new worklow.

**Please see my [improved process](http://www.statamicthemes.com/articles/an-update-to-my-git-workflow) from here on in.**

#### Adding Your Initial Site
1. Create an empty Bitbucket or Github private repository.
2. Clone locally and add all your system and theme files.
3. Create any content locally and push back to the Bitbucket or Github repository,
4. SSH into your server and navigate to your site's root folder using the terminal command `cd your/site/root`.
5. Once you are in the route of your site you need to initialise Git using the terminal command `git init`.
6. Finally you can pull your complete repository from Bitbucket or Github using the terminal command `git pull  git@bitbucket.org:garethredfern/thesitefolder.git` don't forget your git path will be for your own repository (the one you use to clone normally).

That's all there is to it really. You will be asked to enter your password, this was the one you set up when creating your SSH key but then git pulls all the files up to your server.

#### The Change Workflow
O.K. so this is the bit I love. You can update files locally, change your theme, add content whatever you like. You push that up to your Git hosting account as you normally would but then you login to your server using the terminal and SSH. CD to your site's home directory then run `git pull git@bitbucket.org:garethredfern/thesitefolder.git` all your files are then pulled up to your main site. Mr or Mrs client then logs into the site's control panel and adds some new content, no problem you just log in, navigate to your site's home directory and run `git status`. This will tell you what files have been changed. You then run `git add .` (note the period) this adds any new files ready to be committed. Next run git commit -am "your commit message" this will commit the changes on the server. Then finally run `git push git@bitbucket.org:garethredfern/thesitefolder.git`. This will push the changes back to you git hosting account ready to be pulled back down to your development server. This might seem quite a lot when it's written down but trust me you soon get into a good flow and now everything is kept synced and version controlled.

### Summary
Like I said at the start I am not an expert when it comes to servers and the terminal so if anybody with more experience reads this and can offer suggestions to improve the workflow then please feel free to add your comments. I may well create a quick screencast to run through what I do as sometimes a picture tells a 1000 words. If you have any questions then please feel free to get in touch and I'll do my best to help.

#### Useful Resources
- Git [cheat sheet](http://www.git-tower.com/files/cheatsheet/Git_Cheat_Sheet_grey.pdf) invaluable for those terminal commands.
- [Github SSH instructions](https://help.github.com/articles/generating-ssh-keys).
- [WebFaction](https://www.webfaction.com/?affiliate=redfern) (affiliate link) webhosting.
- [CSS Tricks - Deployment](http://css-tricks.com/deployment)
- My [improved Git workflow](http://www.statamicthemes.com/articles/an-update-to-my-git-workflow).
