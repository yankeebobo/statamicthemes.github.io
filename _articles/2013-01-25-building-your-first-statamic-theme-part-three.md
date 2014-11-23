---
title: "Building Your First Statamic Theme Part Three"
layout: post
date: 2013-01-25
author: garethredfern
categories:
  - tutorials
tags:
  - theme building
summary: >
  You have all your files and folders
  set up and I have taken you through how the
  layout template works; using Statamic's tags
  to render the CSS, JS and template content.
  In this final part we look at how to render
  the content in your templates using the super
  cool entries tag pair.
---

{% raw %}

### The Default Template
Open up the [simple_theme](https://github.com/statamicthemes/simple-theme) folder in your code editor and navigate to the [default.html](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/default.html) template which is in the templates folder. If you remember back to [part one](http://www.statamicthemes.com/articles/building-your-first-statamic-theme-part-one) the default template will be used to render your content if there is no template set in your YAML Front Matter. For this simple theme we will keep to that format and the default template will be used to render all pages except the single article page and 404 page, we will come on to those in a bit.

#### The Entries Tag
This tag will probably be the most used in your theme building so it is worth taking the time to get to know how it works by reading the [Statamic documents](http://statamic.com/learn/documentation/tags/entries). We will use it here to render all the entries which have been created in the blog folder which comes pre-installed with Statamic and can be found in the _content folder. Open up your Statamic site folder and navigate to the blog folder. You should see the following structure:

![Statamic Folder Structure](/assets/img/articles/statamic_folder_structure.png)

The articles which all start with the date 2012-02-21 etc. will be what we are going to list using the entries tag. Go back to the [default.html](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/default.html) template which we opened previously and have a look at the `{{ entries:listing }}` tag pair which is wrapping the `article` html tags. Here we have told the entries tag to fetch the listings from the blog folder by using the `folder="blog"` parameter, we have also set a limit of 2 articles to be listed by using the `limit="2"` parameter. The entries tag is a tag pair so you will see that there has to be a closing tag `{{ /entries:listing }}` which closes the loop.

Inside our entries tag there are two variables used:

~~~twig
{{ url }}
{{ title }}
~~~

The first tag will render the url to the single article and the second tag will render the title of the article. This is the simple listings page all set up, we have two articles listed which link through to their main article page. Next we will move on to pagination.

#### Pagination
The [pagination tag](http://statamic.com/learn/documentation/tags/entries) is used in conjunction with the `entries:listing` tag to render pagination when there are more articles than you have set with the limit tag. There are two important points when using the pagination tag and they are:

**The folder and limit parameters must match what you have set on the `entries:listing` tag.** So for example the folder is set to blog on both tags and the limit is set to 2 on both tags.

There are other and parameters that you can experiment with but for now this will give us what we need. Next we need to set the variables inside the pagination tag pair which will render the required links depending on what page we are on. You will see in the [default.html](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/default.html) template there are a couple of conditional statements used to set the page links. If you are unfamiliar with conditional statements do not worry too much what this code is doing, just know that it will render the correct links for your pagination to work. I will cover conditional statements in a future post.

### The Post Template
We now have our main listing page rendering all our blog articles which have a status of "live". When you click on a article listing link you are taken through to a single article page and by default this will use the [post.html](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/post.html) template to render the content. Open up the  [post.html](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/post.html) template in your text editor and you will see that this page only has two template tags `title` and `content`, by now you should know what these both do, but how does Statamic know what content to render and which template to use? The secret is in the the `entries:listing` tag with the `url` variable you set on the link in the [default.html](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/default.html) template. This tells Statamic to link through to the single view for that article and if you remember the template order is set to always use:

* If present: post.html
* Otherwise, if present: default.html
* Otherwise: 404.html

As we haven't specified another template in the YAML Front Matter the [post.html](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/post.html) template is chosen to render the content. Hopefully that all makes sense, but if you are still not sure, try opening the site in your browser with the templates open next to it. Each page has been given a heading which tells you which template is being used so you should be able to navigate through the site and work your way through the code without too much trouble.

### The 404 Template
To complete our templates there should be a [404.html](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/404.html) template file. This again is fairly self explanatory; it uses the the `content` tag to render any content below the YAML Front Matter in the 404.md page that is included in your _content folder.

If you visit yoursiteurl.com/404 you will see the 404 page content rendered.

### Navigation
I haven't included any navigation in the simple_theme templates provided, only to keep things simple to start with, but but you can easily set this up by adding the [Statamic nav tag](http://statamic.com/learn/documentation/tags/nav) to top of your layout [default file](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/layouts/default.html). Once you have grasped the basics you should be able to start adding things like navigation to build your theme out.

### Conclusion
This has been a very basic overview of how a Statamic theme works in its most simple format. Whilst it doesn't have all the whistles and bells that a Statamic theme can use, I hope this three part article will help you to get going with the basics. Once you have the basics down you will be able to start experiment and adding more of the rich features that Statamic has to offer. Happy themeing and if you have any questions fire them in the comments below.

{% endraw %}
