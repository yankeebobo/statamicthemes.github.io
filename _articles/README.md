# Adding an Article

To add an article:

1. [create a new file within the _articles folder](https://github.com/statamicthemes/statamicthemes.github.io/tree/master/_articles) (the same one as this README).
2. Add the date to the front of the file name then give it a name that's the same as the title of the article, with words separated by hyphens, with .md at the end.
3. Paste the following YAML code into the head of it (as you would with Statamic content).

```
---
title: Title of Article
layout: post
date: 2013-01-01
author: githubusername
category: single category
tags:
  - tags(if required)
summary: >
  A short summary for the article.
---
{% raw %}

The main article content goes here, if you are wanting to display Statamic tags wrap the content in `{% raw %} {% endraw %} tags.

{% endraw %}
```

## Example

Here's an example of an article I've added to the _articles folder:

```
---
title: "Building Your First Statamic Theme Part One"
layout: post
date: 2013-01-19
author: garethredfern
category: tutorials
tags:
  - theme building
summary: >
  Statamic makes it really easy to start
  building websites, and once you get an
  understanding of how the separation of
  content and layout works you will be
  able to start creating your first theme.
  In this first part I will take you
  through the key elements with plenty of
  helper links through to the main
  Statamic documentation.
---
{% raw %}

Main snippet content goes in here, use markdown tags as you normally would.

{% endraw %}

```
