---
title: "Building Your First Statamic Theme Part One"
layout: post
date: 2013-01-19
meta_desc: >
  The first article in the three part
  series on building your first Statamic
  theme. In this first part I will take
  you through the key elements with plenty
  of helper links through to the main
  Statamic documentation.
author: garethredfern
categories:
  - tutorials
tags:
  - theme building
summary: >
  Statamic makes it really easy to start
  building websites, and once you get an
  understanding of how the separation of
  content and layout works you will be
  able to start creating your first theme.
  In this first part I will take you
  through the key elements with plenty of
  helper links through to the main
  Statamic documentation.
---

### Understanding How Statamic Works
Statamic has some [good documentation](http://statamic.com/learn) which, as new releases come out, only gets better. You should use these documents as your main reference and for times when you may want to dig deeper or ask a question there is always the [support](http://support.statamic.com) area where the Statamic guys are super helpful. Without wanting to duplicate too much of what is already in the [Statamic documents](http://statamic.com/learn/core-concepts/how-pages-are-built) here is a brief overview of how a Statamic site works, each link will take you through to the relevant part of the documents that you should read to help you with your understanding.

### Your Content Structure
All your site's content is stored in the `_content` directory and how you name your content determines your sites url structure. It really is worth familiarising yourself with this part of [the documents](http://statamic.com/learn/core-concepts/content-files) as structuring your content will form the cornerstone of how your site will work once you start building your theme.

### Marking Up Your Content
The next part of the jigsaw to understand is how you should markup your content files. There are two parts to this; YAML Front Matter and the Content Markup. To summarise - you will write your YAML Front Matter first in the file and this will be written between three dashes its' purpose being the information for how and where the content will display. Everything below the dashes is your content which will display on your site. An important note to remember is that you can set which template the the page will use to render the content by setting the `_template` variable in the YAML Front Matter. If there is no template set then Statamic will look for the following templates  in the this order:

#### Templates Used In Order Of Priority

1. post.html
2. default.html
3. 404.html

**It is therefore extremely important that your theme contains at least theses three templates as a baseline.**

You can also set the the default template for a section of your website by setting the `_default_template_template` variable in the folder's page.md file.

### Starting Your Theme
To create a theme you will first need to add a folder in your `_themes` folder with a name you wish to call the theme I will call it `simple_theme` for now. Inside your `simple_theme` folder you will need to create two more folders; one called layouts and   one called templates, these folders are required to make your theme work.

Inside your templates folder create the three files mentioned above: post.html, default.html, and 404.html. Inside your layouts folder create a default.html file, again this file will be used if no other layouts are specified in your content's YAML Front Matter. There are some additional files and folders you will need to add (we will cover these in [part two](http://www.statamicthemes.com/articles/building-your-first-statamic-theme-part-two)) but for now your simple theme should look like [this](https://github.com/statamicthemes/simple-theme). It is probably a good idea to install the theme so that you can see how it works. Install your Statamic site as shown [here](http://statamic.com/learn/digging-in/installing) and make sure to set your .htaccess file. Next follow the instructions on how to install the theme by reading the [README.md](https://github.com/statamicthemes/simple-theme/blob/master/README.md) file.

**Remember that the naming convention of these files and folders is very important.**

### What Goes In These Files & How Everything Hangs Together
O.K. so you have the start of your theme's file and folder structure set up but what do you need in each file and how is everything rendered?

#### The Templates & Parse Order
1. The content file is read first and the YAML Front Matter will tell Statamic which template to use to render the content (if no template is set the templates listed previously will be used) ([see example](https://github.com/statamicthemes/simple-theme/blob/master/_content/1.example.md)).
2. The parsed contents of your content file is inserted into the template using template tags ([see example](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/default.html)).
3. Finally this is rendered in the layout template you either defined in you content's YAML Front Matter or the default template is used. The secret to how your content is being rendered is the `{{ layout_content }}` tag ([see example](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/layouts/default.html)).

#### [The Layout File](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/layouts/default.html)
A layout file contains the main global markup for your site e.g. the document head, body and any javascript calls. Of course Statamic doesn't hold you to this and you can just have a `{{ layout_content }}` tag in this file, putting all your markup in the template files instead. That's the flexibility offered, but I would recommend putting as much of your global markup in this file as this helps to keep your templates DRY (Don't Repeat Yourself).

#### [The Templates](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates)
Each template uses Statamic template tags which use in between html markup to pull the content into your site. The Statamic site has a great [reference](http://statamic.com/learn/templating/core-template-tags) of these tags. The important tag to look at first is the `{{ content }}` tag, this is used to display the entry's content (everything below the YAML Front Matter). We will cover this more in [part two](http://www.statamicthemes.com/articles/building-your-first-statamic-theme-part-two) but you will notice in [the example](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/default.html) that the `{{ content }}` is wrapped in a [entries listing tag](http://statamic.com/learn/documentation/tags/entries), this is another important tag pair and you will notice that the `folder` parameter tells Statamic where to look for your content.

#### Partials
Statamic also provides a super easy way to share reusable code throughout your templates. Partials can be things like headers, footers and navigation blocks that you want to re-use in your site, again keeping your code DRY. The really nice bit of Partials is that you can pass variables into them which can make their use super flexible. This deserves a full write up of its own but for now you can read more about [Partials on the Statamic website](http://statamic.com/learn/theming/partials).

### Next
This has been a brief overview of the core concepts of building a Statamic Theme, some of this has been duplicate content that you can read in the Statamic Documentation but I felt it was important that you first have a solid understanding of how the theme needs to be structured before we dive into [Part 2](http://www.statamicthemes.com/articles/building-your-first-statamic-theme-part-two) where we build our first theme.
