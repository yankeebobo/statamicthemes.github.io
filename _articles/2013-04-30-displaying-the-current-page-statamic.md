---
title: "Displaying The Current Page In Statamic"
layout: post
date: 2013-04-30
author: garethredfern
category: tutorials
tags:
  - tips
  - seo
summary: >
  This is a really simple way to display
  the current page you are on when using
  pagination.
---

{% raw %}

Statamic has a really useful [Get/Post helper](http://statamic.com/learn/documentation/tags/get-post) tag which enables you to retrieve query strings and other data. Where I have found it particularly helpful is using it with the page variable to render the current page you are viewing on a paginated page.

To output the page number you would use the following tag `{{ get:page }}` and this will now display the current page number when the user clicks on a [pagination](http://statamic.com/learn/documentation/tags/entries) link.

### Use Cases
There is the obvious use case which is to display the page number at the bottom of your page near your pagination links but using the tag to render the page number in your meta title tag could also have some benefits. The thinking behind this is to stop duplicate titles; which is good from both a user perceptive and from an [SEO perspective](http://www.seomoz.org/blog/pagination-best-practices-for-seo-user-experience). The code below can be used in your document head to render the title you have given to the page and conditionally add the page number when you are on a paginated page.

~~~twig
<title>{{ title }} {{ if get:page > 0 }} Page {{ get:page }}{{ endif }}</title>
~~~

While this is a really simple example it demonstrates how you can quickly and easily add additional functionality to your Statamic sites. A point to note is that this only works with Statamic 1.5 build 9 upwards, if you are reading this after the stable release of 1.5 then your good to go. I have now added this functionality into the [Statarkers bootstrap theme](http://www.statamicthemes.com/themes/statarkers-theme) check out the [meta partial](https://github.com/statamicthemes/statarkers-theme/blob/master/_themes/statarkers/partials/_meta.html) for the complete example.

{% endraw %}
