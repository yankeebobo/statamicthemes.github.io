# Adding a Resource

To add a resource:

1. [create a new file within the _resources folder](https://github.com/statamicthemes/statamicthemes.github.io/tree/master/_resources) (the same one as this README).
2. Add the date to the front of the file name then give it a name that's the same as the title of the resource, with words separated by hyphens, with .md at the end.
3. Paste the following YAML code into the head of it (as you would with Statamic content).

```
---
title: Title of Resource
layout: post
date: 2013-01-01
author: githubusername
category: mycategory (choose a single category)
tags:
  - tags(if required)
summary: >
  A short summary for the resource.
preview_link: http://example.com
---
{% raw %}

The main resource content goes here, if you are wanting to display Statamic tags wrap the content in `{% raw %} {% endraw %} tags.

{% endraw %}
```

## Example

Here's an example of a resource I've added to the _resources folder:

```
---
title: Built With Statamic Site
layout: post
date: 2014-11-29
author: garethredfern
category: community site
tags:
- portfolio
summary: >
This is a fantastic community resource of sites built using Statamic.
preview_link: http://builtwithstatamic.com/
---

{% raw %}

Main resource content goes in here, use markdown tags as you normally would.

{% endraw %}

```
