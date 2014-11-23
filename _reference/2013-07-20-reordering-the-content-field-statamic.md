---
title: "Reordering The Content Field Statamic"
layout: post
meta_desc: >
  Sometimes you may want to change the
  order of the content field where
  Statamic, by default, always displays it
  last. This can be easily changed using
  this quick tip.
author: garethredfern
categories:
  - fields
tags:
  - tips
summary: >
  Sometimes you may want to change the
  order of the content field where
  Statamic, by default, always displays it
  last. This can be easily changed using
  this quick tip.
---

Statamic will set the order that it displays fields in the control panel in the order you place them in your fields.yaml file except for three caveats:

- The title field always displays first.
- The slug second.
- The content field last.

To get round where the content field is displayed you can use the following :

In your fields.yaml file set the content fields to hidden. You must have a content field and if you do not have one then Statamic will add it automatically:

~~~yaml
content:
		type: hidden
~~~

Next create another content field but call it something different like `main_content`, you can set this field to be a [Markitup](http://statamic.com/learn/documentation/fieldtypes/markitup) field or [Redactor](http://statamic.com/learn/documentation/fieldtypes/redactor).

~~~yaml
main_content:
	display: Page Content
	type: redactor
	image_dir: assets/img/page  #make sure the folder exists and is writable
	instructions: "Add the main page content here."
~~~

Place the field in the order that you would like it to display and you should be all set.

#### Please Note
As of version 1.6 you can now reorder the content field type without needing to follow the above. Just place the content field in your yaml where you would like it to appear.
