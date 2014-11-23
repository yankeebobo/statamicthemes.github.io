---
title: "Creating A Simple Contact Form With Raven"
layout: post
date: 2014-07-11
author: garethredfern
categories:
  - raven
tags:
  - contact
summary: >
  This is a simple example to show you how easy it
  is to add a contact form in Statamic with Raven.
---
I have been using [Raven forms](http://statamic.com/add-ons/raven) in some interesting ways recently; currently I am working on a site which allows users to submit entries for a competition and these form submissions can then be scored by judges who need to login. That's going to be a write up for the future, but I also use Raven for all my contact forms. In the support forums we seem to get quite a lot of questions regarding setting up a Raven form with error handling etc.

First up I would say there is some excellent [documentation](http://statamic.com/add-ons/raven/overview) on using Raven on the Statamic site and Jack has put together a [brilliant video](http://statamic.com/add-ons/raven#raven-video) which explains a lot of the basics, its worth the time reading and watching those first.

To get you up and running quickly I have now added everything that you need to the [Statarkers theme](http://www.statamicthemes.com/themes/statarkers-theme), you will of course have to buy and install Raven first, but once it's installed just install the Statarkers theme, set your email address in the [contact.yaml](https://github.com/statamicthemes/statarkers-theme/blob/master/_config/formsets/contact.yaml) formset and your good to go. For those of you who are not wanting to use Statarkers I have created just the [files you need](https://github.com/statamicthemes/contact-form) (with instructions) to create a simple contact form with validation and error handling.

If you have any questions then please let me know.
