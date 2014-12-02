---
title: "If Only One Grid Row"
layout: post
date: 2014-12-02
author: garethredfern
category: grid
tags:
- tips
summary: >
 Set a conditional which displays a class id there is only one grid row.
---

{% raw %}
Use `{{ if ! grid:1 }}`. What this is saying is, "if row 2 is null". Tag loops (grids) can have their rows accessed directory by their zero-indexed key (so, starting at 0): grid:0, grid:1, grid:2, and so on.
{% endraw %}
