---
title: "Display Related Entries"
layout: post
meta_desc: >
  Only display entries which have been
  selected using the related fieldset when
  building a Statamic website.
author: garethredfern
categories:
  - reference
tags:
  - relationship
  - template tags
summary: >
  Only display entries which have been
  selected using the related fieldset.
---

{% raw %}

~~~.language-markup
{{ entries:listing folder="blog" conditions="url:{ suggest_option_list }" }}
  <p><a href="{{ url }}">{{ title }}</a></p>
{{ /entries:listing }}
~~~

{% endraw %}
