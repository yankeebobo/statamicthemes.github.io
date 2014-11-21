---
main_img: ""
title: Display Related Entries
meta_title: ""
meta_desc: >
  Only display entries which have been
  selected using the related fieldset when
  building a Statamic website.
alt_title: ""
author: garethredfern
featured: not_featured
categories:
  - reference
tags:
  - relationship
  - template tags
video: ""
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