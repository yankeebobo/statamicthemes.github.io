# Adding a Theme

To add a theme:

1. [create a new file within the _themes folder](https://github.com/statamicthemes/statamicthemes.github.io/tree/master/_themes) (the same one as this README).
2. Add the date to the front of the file name then give it a name that's the same as the title of the theme, with words separated by hyphens, with .md at the end. **Please do do not include the name "Statamic" in the title or file name.**
3. Paste the following YAML code into the head of it (as you would with Statamic content).

```
---
title: Title of Theme
layout: post
author: githubusername
category: mycategory (choose a single category)
tags:
  - tags(if required)
commercial: "no" (set to "yes" or "no" if its a paid theme)
summary: >
  A short summary for the theme.
---
{% raw %}

The main theme description goes here, if you are wanting to display Statamic tags wrap the content in `{% raw %} {% endraw %} tags.

{% endraw %}
```

## Example

Here's an example of a theme I've added to the _themes folder:

```
---
title: "Statarkers"
layout: post
author: garethredfern
categories:
- starter themes
tags:
- blank
- minimal
commercial: "no"
summary: >
  A minimal Statamic theme created to act as a
  starting point. This theme is a minimal canvas and
  will enable you to get up and running with a site
  build in a matter of minutes.
download_link: https://github.com/statamicthemes/statarkers-theme
---

{% raw %}

Main theme description goes in here, use markdown tags as you normally would.

{% endraw %}

```
