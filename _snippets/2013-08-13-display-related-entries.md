---
title: "Display Related Entries"
layout: post
date: 2013-08-13
author: garethredfern
category: reference
tags:
  - relationship
  - template tags
summary: >
  Only display entries which have been
  selected using the related fieldset.
---

{% raw %}

~~~twig
{{ entries:listing folder="blog" conditions="url:{ suggest_option_list }" }}
  <p><a href="{{ url }}">{{ title }}</a></p>
{{ /entries:listing }}
~~~

{% endraw %}
