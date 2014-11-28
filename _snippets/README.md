# Adding a Snippet

To add a snippet:

1. [create a new file within the _snippets folder](https://github.com/statamicthemes/statamicthemes.github.io/tree/master/_snippets) (the same one as this README).
2. Add the date to the front of the file name then give it a name that's the same as the title of the snippet, with words separated by hyphens, with .md at the end.
3. Paste the following YAML code into the head of it (as you would with Statamic content)

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
  A short summary for the snippet.
---
{% raw %}

The main snippet content goes here, if you are wanting to display Statamic tags wrap the content in `{% raw %} {% endraw %} tags.

{% endraw %}
```

## Example

Here's an example of a snippet I've added to the _snippets folder:

```
---
title: "Set A Global Fieldset"
layout: post
date: 2013-08-21
author: garethredfern
category: fields
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

```
