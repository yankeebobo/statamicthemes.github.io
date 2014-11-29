# Adding a Plugin

To add a plugin:

1. [create a new file within the _plugins folder](https://github.com/statamicthemes/statamicthemes.github.io/tree/master/_plugins) (the same one as this README).
2. Add the date to the front of the file name then give it a name that's the same as the title of the plugin, with words separated by hyphens, with .md at the end.
3. Paste the following YAML code into the head of it (as you would with Statamic content).

```
---
title: Title of Plugin
layout: post
author: githubusername
category: mycategory (choose a single category)
tags:
  - tags(if required)
commercial: "no" (set to "yes" or "no" if its a paid plugin)
summary: >
  A short summary for the plugin.
---
{% raw %}

The main plugin description goes here, if you are wanting to display Statamic tags wrap the content in `{% raw %} {% endraw %} tags.

{% endraw %}
```

## Example

Here's an example of a plugin I've added to the _plugins folder:

```
---
title: "Get File Info"
layout: post
author: garethredfern
category: ""
tags: ""
commercial: "no"
summary: >
  A simple Statamic plugin to output file information.
download_link: https://github.com/statamicthemes/fileinfo
---

{% raw %}

Main plugin description goes in here, use markdown tags as you normally would.

{% endraw %}

```
