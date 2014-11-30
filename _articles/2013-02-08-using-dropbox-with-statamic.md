---
title: "Using Dropbox With Statamic"
layout: post
date: 2013-02-08
author: garethredfern
category: workflow
tags:
  - tips
  - plugins
summary: >
  Using Dropbox with Statamic seems to be a
  popular conversation on Twitter, it's
  something which quite a few people would
  like to be able to do. Here are some ideas
  on how you can work with Dropbox today,
  and what is on the horizon for the future.
---
### What I Found
I recently put a post together on [how to integrate Dropbox into your workflow when creating content for Statamic](http://garethredfern.com/article/supercharge-your-writing-work-flow-in-statamic). Whilst this post is a nice round up of what I had found at the time it doesn't offer any plugin solutions, as to the best of my knowledge, there aren't any yet. With the advent of v1.5 and after seeing a post on the [kirby blog](http://getkirby.com/blog/kirby-meets-dropbox) (thanks to [Jon Schuster](https://twitter.com/GoodAtSmudgin)) I feel this topic deserves some more experimenting with.

The Kirby blog post definitely offers a clever approach but whilst setting up Dropbox on your server maybe an option for some people it definitely won't be for everyone. For starters you have to be able to install apps on your server so that rules out anyone who uses shared hosting, and it feels a bit like "using a sledge hammer to crack a nut".

### v1.5 Tasks & The Dropbox API
On the Statamicist Fred Leblanc wrote about the upcoming release of Statamic and the huge amount of work which has gone into creating the add-on architecture. The post (blog now retired unfortunately) was a great read and goes into how you will be able to use tasks to enable Statamic to run code behind the scenes, similar to how a [cron job works](http://kb.mediatemple.net/questions/82/Using+Cron#dv_35). This would still require you to add a line of code to your `crontab` but that will be fairly straight forward to set up and should be possible through Plesk if you use that to manage your server.

Whilst there isn't a plugin available yet I wouldn't mind guessing that it will be one of the first things to arrive in the [Trading Post](http://trading-post.statamic.com) when they open for business later this year. This is definitely an interesting side to Statamic as you can see the potential in setting a client up with a Dropbox folder where they can simply add all their images and content and it syncs straight up to their site. Keeping content and structure well and truly separate just feels so nice.

I am looking forward to seeing what the community comes up with over the next couple of months and will update this post with my findings.
