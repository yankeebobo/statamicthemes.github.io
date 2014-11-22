---
title: "Check For An Empty Grid Field"
layout: post
meta_desc: >
  Sometimes you might want to check if a
  grid field is empty and if it is do not
  display that grid row. Use this Statamic
  snippet to do just that.
author: garethredfern
categories:
  - template tags
tags:
  - grid
  - conditionals
summary: >
  Sometimes you might want to check if a
  grid field is empty and if it is do not
  display that grid row.
---

{% raw %}

Sometimes you might want to check if a grid field is empty and if it is do not display that grid row. To do this you can use the following:

~~~.language-php
{{ if gridfield|empty }}
~~~

The opposite to this is of course:

~~~.language-php
{{ if gridfield|not_empty }}
~~~

{% endraw %}
