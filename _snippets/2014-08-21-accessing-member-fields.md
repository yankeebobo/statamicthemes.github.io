---
title: "Accessing Member Fields"
layout: post
date: 2013-08-21
author: garethredfern
categories:
  - template tags
tags:
  - reference
summary: >
  If you need to output a member field and don't
  want to wrap your content in a `{{ member:profile }}`
  tag pair then you can just use a single tag.
---

{% raw %}
~~~twig
{{ current_member:field_name }}
~~~
{% endraw %}
