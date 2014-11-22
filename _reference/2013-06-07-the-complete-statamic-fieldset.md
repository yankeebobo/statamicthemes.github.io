---
title: "List Of Statamic's Default Fields"
layout: post
meta_desc: >
  All the default field types and their
  minimum required settings useful as a
  quick guide when developing your
  Statamic websites.
author: garethredfern
categories:
  - template tags
tags: ""
summary: >
  All the default field types and their
  minimum required settings courtesy of
  Jack McDade.
---

~~~.language-markup
title: Fieldset Kitchen Sink

fields:

  status:
    type: status

  _template:
    type: templates

  file:
    type: file
    destination: assets/img

  suggest:
    type: suggest
    multiple: true
    options:
      happy: Happy
      sad: Sad
      meh: Meh

  location:
    display: Location
    type: location

  select:
    type: select
    options:
      - one
      - two
      - three

  checkbox:
    type: checkbox

  radio:
    type: radio
    options:
      - this
      - that

  date:
    type: date

  tags:
    type: tags

  time:
    type: time

  users:
    type: users

  redactor:
    type: redactor

  meta_section:
    type: section

  text:
    type: text

  textarea:
    type: textarea

  content:
    type: markitup
~~~
