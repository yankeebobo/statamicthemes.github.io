---
title: "Building Your First Statamic Theme Part Two"
layout: post
meta_desc: >
  The second article in the three part
  series on building your first Statamic
  theme. In this second part I will add
  the remaining files and folders whilst
  discussing the layout template in more
  detail.
author: garethredfern
categories:
  - tutorials
tags:
  - theme building
summary: >
  In part one of Building Your First
  Statamic Theme I discussed how the
  folder structure of your theme works,
  the essential files and folders to get
  started, and how the templates and
  parsing of content make things happen.
  In this second part I will add the
  remaining files and folders whilst
  discussing the layout template in more
  detail.
---

{% raw %}

### A Quick Recap
If you have been following along you should have a folder named [simple_theme](https://github.com/statamicthemes/simple-theme) (or name of your choice). In that folder there should be two other folders: layouts and templates. Inside the layouts folder you should have one file called [default](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/layouts/default.html). Inside the templates folder you should have three templates [404.html](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/404.html), [default.html](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/default.html), and [post.html](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/templates/post.html). The files and folders I have created so far can be found [here](https://github.com/statamicthemes/simple-theme), feel free to download and install them to get you started.

### Additional Folders
#### CSS
While we are setting everything up, create a [css folder](https://github.com/statamicthemes/simple-theme/tree/master/simple_theme/css) with a [css file](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/css/simple_theme.css) in it. Normally I use SASS on a project with a preprocessor but to keep things simple for this example we will just create plain old css. The name of your css file needs to be the same as the name of your theme. **This is very important if you want to make use of the [Statamic helper tag](http://statamic.com/learn/theming/theme-helpers)**. So in my CSS folder I now have a file called [simple_theme.css](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/css/simple_theme.css) which is where all my theme styles will go. How you organise your css is up to you but keep in mind that this file will be the one we reference in the head of our document to render our styles.

#### Javascript
Repeat this for your javascript, create a [js folder](https://github.com/statamicthemes/simple-theme/tree/master/simple_theme/js) with a [simple_theme.js](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/js/simple_theme.js) file. Again this will enable us to use the [Statamic theme helper tag](http://statamic.com/learn/theming/theme-helpers).

#### Theme Images
Create a folder called [img](https://github.com/statamicthemes/simple-theme/tree/master/simple_theme/img) for your theme images, this folder should only be used to store images that are used to create your theme, all content images are stored in the assets/img folder in the root.

#### Partials
There is one last folder which you should set up, this is the [partials folder](https://github.com/statamicthemes/simple-theme/tree/master/simple_theme/partials). Not strictly necessary for a simple theme, but as I will come on to, [partials](http://statamic.com/learn/theming/partials) are snippets of reusable code which can be extremely useful in your theme building. For completeness I will add this folder with an example of what a partial could look like. You may notice I have started the [partial name](https://github.com/statamicthemes/simple-theme/tree/master/simple_theme/partials) with an underscore _footer.html this is not a requirement but I find it is a good convention to show that the file is a partial.

That is now everything you need to build your theme set up and ready to go. While you do not have to stick to the folder and file naming conventions, I would suggest you start using them as this will make it much easier when you come to distribute your theme to other developers. For more information on theme building see the [Theming](http://statamic.com/learn/theming) section of the Statamic documents.

### [The Layout Template](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/layouts/default.html)
First let's add the CSS to your site using the [Statamic theme helper tag](http://statamic.com/learn/theming/theme-helpers) add this in the head of document of your [default layout template](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/layouts/default.html) the tag looks like this:

~~~twig
{{ theme:css }}
~~~

Repeat this for the javascript by adding a script tag next to the closing body tag with the source using the [theme helper tag](http://statamic.com/learn/theming/theme-helpers).

~~~twig
{{ theme:js }}
~~~

#### The Site Name Tag
Next we will use one of Statamic's global variables to render the site name in the `<title>` tag and `h1` tag. The `{{ _site_name }}` tag will render the name that you have saved in your settings.yaml file which is located in your _config folder. To change this open up your settings.yaml file and change the `_site_name` variable to:

~~~yaml
_site_name: Your site name
~~~

The `{{ _site_name }}` tag will now render the name you have saved.

#### The Layout Content Tag
Add the magic `{{ layout_content }}` tag below the `h1` tag as I have done [here](https://github.com/statamicthemes/simple-theme/blob/master/simple_theme/layouts/default.html). Remember what this tag does? Here's a reminder:

>The parsed contents of your content file are inserted into your specified template, rendering any present template tags, after which that rendered output is inserted into your site's layout file, replacing the `{{ layout_content }}` tag.

#### Add Your First Partial
Ok so your layout template is all set up, but for a little example of how partials work include the following code below the `{{ layout_content }}` tag:

~~~twig
{{ theme:partial src="_footer" }}
~~~

This will now include the [_footer partial](https://github.com/statamicthemes/simple-theme/tree/master/simple_theme/partials) that I have created, which will display across the site on every page.

If you are following along from [part one](http://www.statamicthemes.com/articles/building-your-first-statamic-theme-part-one) you should already have the simple_theme installed. I suggest that you load up the home page and you will see the fruits of our work. Not very exciting, granted, but there is the site title being rendered with the default content below that. At the bottom is our footer partial which renders the copyright and site name.

### Next
Next we will move on to the template tags needed to render your entries so that you can see how the content is displayed.

{% endraw %}
