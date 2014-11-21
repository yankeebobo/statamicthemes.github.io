---
main_img: ""
title: Output Total Number Of Entries
meta_title: Output The Total Number of Entries
meta_desc: >
  Ever need to output the total number of
  entries in a folder, maybe when you are
  creating some kind of pagination with
  Statamic?
alt_title: ""
author: garethredfern
featured: not_featured
categories:
  - reference
tags:
  - template tags
video: ""
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