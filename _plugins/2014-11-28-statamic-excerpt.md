---
title: "Statamic String Replace"
layout: post
date: 2014-11-28
author: clayh53
category: "modifier"
tags: ""
commercial: "no"
summary: >
  This is a pair of super-simple statamic modifiers (filters) that allow the creation of excerpts from the content of a page or post, without having to define a content variable that contains redundant information.
download_link: https://github.com/clayh53/statamic-excerpt
---
These two modifiers work by using a defined 'excerpt-termination' character string.

The first modifier is excerpt. This modifier allows the user to insert the pre-defined character string in any content area (the stuff below the YAML front matter) that will mark the end of the content to be displayed in excerpts. This is more flexible than the truncate modifier since its position can vary depending on the content and is not fixed to a specific number of characters. The excerpt can therefore end at a sensible position in the content.

The second modifier is all. This modifier is used in conjunction with the excerpt modifier to strip out the predefined character string from the content area and return it sans string. If the character string is not present, it does nothing.
