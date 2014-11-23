---
title: "Output First & Last Name Of Author"
layout: post
date: 2013-07-10
author: garethredfern
categories:
  - members
tags:
  - tips
summary: >
  Sometimes you need to have the first and
  last name of a post author display.
  Using this simple snippet this can be
  easily done.
---

{% raw %}

If you are using the [Users Fieldtype](http://statamic.com/learn/documentation/fieldtypes/users) as a standard field in blogs you can output the author of the post by calling its yaml field e.g. `{{ author }}` (or whatever you called your field). However, this extracts the username - which is fine for some cases but what if you would like to display the first name or last name or both. Simply use the following snippet.

~~~twig
{{ member:profile member="{author}" }}
  {{ first_name }} {{ last_name }}
{{ /member:profile }}
~~~

{% endraw %}
