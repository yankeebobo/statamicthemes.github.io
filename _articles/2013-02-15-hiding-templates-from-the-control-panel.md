---
title: "Hiding Templates From The Control Panel"
layout: post
meta_desc: >
  This is a quick look at how you can hide
  templates from the template select field
  in the control panel, simplifying what
  your client sees in the admin area for
  Statamic.
author: garethredfern
categories:
  - control panel
tags:
  - tips
summary: >
  This is a quick look at how you can hide
  templates from the template select field
  in the control panel, simplifying what
  your client sees in the admin area.
---
Creating a simple to use system for adding content in any CMS is really important. The easier it is to add content the less support questions you will have to answer from confused clients.  The control panel for Statamic has been built with all this in mind, it has a simple to use system which displays a visual hierarchy of all the sites content.

When you are setting up your site you will undoubtedly have several different templates for displaying the content and it will be necessary to use the [template field type](http://statamic.com/learn/documentation/fieldtypes/templates) to enable your client to choose which template you would like them to use for rendering the content. To do this you need to set up a template fieldtype in your fields.yaml file using the following YAML:

~~~yaml
_template:            # note the prefixed _underscore
    display: Template
	  type: templates
~~~

This will now output all your templates as a dropdown in the control panel.

### Limiting The Number Of Templates To Choose From
What if you only want to display a couple of templates for the client to choose from? The answer is simple you set the type to `select` rather than `templates` and set which templates you would like to display as the options:

~~~yaml
_template:
    display: Template
	  type: select
		options:
	    -template_one
	    -template_two
~~~

Or if you would like different names to the ones you have used to name the templates you could use:

~~~yaml
_template:
    display: Template
	  type: select
		options:
	    template_one : Some Better Looking Name
	    template_two : Another Name
~~~

Thank you to Wolfram Gehring [@marflow](https://twitter.com/marflow) on Twitter for this quick tip.

### Hiding Templates Completely But Selecting The Correct One
You may want to hide the option of selecting a template completely but still have the requirement to set which template to use. This again is really simple using the [hidden fieldtype](http://statamic.com/learn/documentation/fieldtypes/hidden). Here is what you would put in your fields file:

~~~yaml
_template:
		type: hidden
		default: template_name
~~~

Remember that spacing in your YAML files is really important so make sure that you always indent using two spaces. So there you have it, two super quick and easy ways to work with your templates in Statamic.
