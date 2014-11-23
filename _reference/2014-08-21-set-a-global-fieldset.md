---
title: "Set A Global Fieldset"
layout: post
date: 2013-08-21
meta_desc: >
  In Statamic If you want to set a global
  fieldset that gets used if no fieldset
  is assigned in your page.md file you can
  add the following in your settings.yaml file.
author: garethredfern
categories:
  - fields
tags:
  - tips
summary: >
  If you want to set a global fieldset that gets
  used if no fieldset is assigned in your page.md
  file you can add the following in your settings.yaml
  file.
---

{% raw %}
~~~yaml
default_fieldset: myfieldset
~~~
{% endraw %}
