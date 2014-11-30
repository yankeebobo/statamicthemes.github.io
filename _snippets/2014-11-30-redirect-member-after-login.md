---
title: "Redirect a Member After Login"
layout: post
date: 2014-11-30
author: garethredfern
category: member
tags:
- tips
summary: >
  If you have a page that is protected and you want to redirect
  back to that page after login you can use the following code.
---

{% raw %}
### Protected Page
~~~twig
{{ redirect url="/login?return={current_url}" }}
~~~

### Login Template
~~~twig
{{ member:login_form return="{get_post:return}" }}
...
{{ /member:login_form }}
~~~
{% endraw %}
