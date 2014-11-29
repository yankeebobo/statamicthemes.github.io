---
title: "Statamic Table of Contents"
layout: post
date: 2014-11-28
author: clayh53
category: "modifier"
tags: ""
commercial: "no"
summary: >
  Creates a clickable table of contents at the beginning of the content area inside a Statamic template using headings tags.
download_link: https://github.com/clayh53/statamic-toc
---
This modifier takes the content piped to it, scans the content for headings and creates an ordered hierarchical list of links to the content areas for each heading level in the document.

This modifier then creates a clickable table of contents using this list whose anchor tags link to the specific positions in the content referenced in the table of contents. This table of contents is returned at the top of the original content in a div with a class name of toc-block, and the original content is returned below the table of contents with its heading tags modified with ids so the user can click and immediately move the cursor to that position in the document.
