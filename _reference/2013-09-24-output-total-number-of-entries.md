---
title: "Output Total Number Of Entries"
layout: post
meta_desc: >
  Ever need to output the total number of
  entries in a folder, maybe when you are
  creating some kind of pagination with
  Statamic?
author: garethredfern
categories:
  - reference
tags:
  - template tags
summary: >
  Ever need to output the total number of
  entries in a folder, maybe when you are
  creating some kind of pagination?
---

{% raw %}

This variable gives you the total number of entries in a folder. You can use it within `{{ pages:listing }}` and `{{ entries:listing }}` tags.

~~~.language-markup
{{ total_found }}
~~~

{% endraw %}
