---
title: "Using Environments For Statamic Development"
layout: post
meta_desc: >
  Statamic gives you the ability to set up
  different environments for your site
  e.g. a production environment and a
  development environment. This is super
  useful, in this short post I show you
  one way you can quickly put environments
  to work by disabling the analytics
  tracking on your development site.
author: garethredfern
categories:
  - tutorials
tags:
  - tips
summary: >
  Statamic gives you the ability to set up
  different environments for your site
  e.g. a production environment and a
  development environment. This is super
  useful, in this short post I show you
  one way you can quickly put environments
  to work by disabling the analytics
  tracking on your development site.
---

{% raw %}

### How Environments Work
First open your settings.yaml file and you will see the _environments variable settings (roughly three quarters of the way down the page). This is where you tell Statamic what your environments look like, here we have two set up - dev and live:

~~~.language-markup
_environments:
	dev:
  	- 'http://localhost*'
  	- '*.dev'
  	- '*.localip'
	live:
  	- '*.com'
~~~

You can name your environments whatever you like and there is no limit to the number of environments you can have, for this example I will stick with what is already set up. Underneath each environment name you set the url that will trigger the environment. I use [MAMP Pro](http://www.mamp.info/en/mamp-pro/index.html) for my development work and this enables me to create friendly dev url's such as site.dev, you will notice that one of the url patterns is `*.dev` what this basically means is that any url that ends in .dev will trigger the dev environment.

If you are using the free version of MAMP you will see that one of the url patterns is `http://localhost*`  what this is saying is that any url that begins with http://localhost will trigger the dev environment.

Next you fill in your live environment url, this can either be the full path to your site or again you can use the wild-card symbol to trigger the environment on any domain extension ([TLD](http://en.wikipedia.org/wiki/Top-level_domain)) for example `*.com` will create a live environment for all .com url's.

Statamic now knows what url patterns to look for but it needs a few more settings before it knows what to do in those environments.

### Environment Settings
In the environments folder (located in the _config folder) you will see there are two files dev.yaml and live.yaml these a purposely named the same as the environment variables set in your settings.yaml file because they need to match. Open the two files in your text editor, you will see the `enable_analytics: no` and `enable_analytics: yes` variables commented out. It is in these files that you can set any environment based variables you can think of, for now though, uncomment the analytics variables in both files.

### The Conditional Statement
We can now use a conditional statement to only display the analytics code when our live site is detected. Use the following conditional statement in the head of your document (or wherever you have your analytics code):

~~~.language-php
{{ if enable_analytics == "yes" }}
	ANALYTICS TRACKING CODE
{{ endif }}
~~~

The conditional looks for the `enable_analytics` variable set in the environment settings file, if it matches the environment then our analytics are displayed, if there is no match then the analytics will not display.

### Conclusion
This is only the tip of the iceberg, once you start experimenting with environments you will see their power. You could for example have a completely different site set up on your development server but still sharing the same content as your live server. Your client can view all changes made in the development area and once they are signed off you can easily push them to the live site by removing the conditional tags.

For a more in depth article on how environments work you can read [Using Environments](http://statamicist.com/tips/using-environments) over at the Statamicist and the [Statamic documentation](http://statamic.com/learn/advanced-features/environments) explains how the tags work in full.

{% endraw %}
