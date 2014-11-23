---
title: "Accessing Single Grid Rows"
layout: post
date: 2013-08-17
author: garethredfern
categories:
  - reference
tags:
  - grid
summary: >
  Want to access a single grid row and conditionally
  find out if it's empty? Using the grid index you can
  do this easily, this code snippet provides you with
  a way to micro manage grid content.
---

{% raw %}

~~~twig
{{ if project_images:0|not_empty }}
<img src="{{ project_images:0:img }}" alt="{{ project_images:0:img_title }}">
{{ endif }}
~~~

The above code is checking to see if a grid field called `project_images` has something in the first row using `{{ if project_images:0|not_empty }}` (the index is zero based so row one is index 0). It then accesses the grid field called `img` using `{{ project_images:0:img }}` and the grid field called `img_title` using `{{ project_images:0:img_title }}`.

{% endraw %}
