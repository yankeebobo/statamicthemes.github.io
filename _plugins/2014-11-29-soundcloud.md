---
title: "Soundcloud"
layout: post
author: jeremysexton
category: "social"
tags: "soundcloud"
commercial: "no"
summary: >
  A simple Statamic plugin for Soundcloud embeds.
download_link: https://github.com/jeremysexton/Soundcloud-Statamic
---

{% raw %}

Feed it the url of a Soundcloud Sound and it will return an embed.

### Installing

1. Create a folder in "_add-ons" called "soundcloud".
2. Copy "pi.soundcloud.php" into that folder.
3. Dance.

### Usage

The plugin is called with `{{ soundcloud }}`.

The following parameters exist:

- url (required)
- width (default: 100%)
- height (default: 166px)
- autoplay (default: false)

### Example

```
{{ soundcloud url="https://soundcloud.com/twistedpanda/do-that-trouble-i-do" width="100%" height="166px" autoplay="true" }}cloud url="http://www.mixcloud.com/TwistedPanda/summer-cruisin-mix/" width="100%" height="400" }}
```

{% endraw %}
