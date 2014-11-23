---
title: "Creating A Secure Area Statamic"
layout: post
date: 2013-08-12
meta_desc: >
  This article shows you how to set up a
  simple, secure, area where users are
  required to login to view content. Using
  the member tag in Statamic and some
  conditionals this is easy to do.
author: garethredfern
categories:
  - tutorials
tags:
  - members
summary: >
  I recently got asked a
  [question on twitter](https://twitter.com/mcshefferty/status/366547890258182144)
  on how you could have content on your site
  which is protected behind a login area.
  Having never tried this sort of thing with Statamic,
  I thought it would be fun to have a go at creating a
  simple example. This article shows you how to set up
  a simple, secure, area where users are required to
  login to view content. Using the [member tag](http://statamic.com/learn/documentation/tags/member)
  in Statamic and some conditionals this is easy to do.
---

{% raw %}

Statamic offers you very simple member handling out of the box. At the moment you can create two types of member:

- Members that can login to the control panel (admin).
- Members that can login but can't see the control panel.

At first glance the second option may not seem that useful but where it does become really handy is if you have an area on your site that you would like to limit who can see that content.

### Creating A Login Link
To get started you will need to create an area for members to login, you could just direct them to the admin login area, but when they put their details in they will receive a message saying "access denied" if you haven't given them admin access. To provide a nice user experience Statamic provides you with the  `{{ member:login }}` tag pair, this creates a form tag and you can provide it a redirect page once the user logs in.

~~~twig
{{ member:login return="top-secret" }}
  <input type="text" name="username" id="username" placeholder="Username" >
  <input type="password" name="password" id="password" placeholder="Password" >
  <input type="submit" value="Log in">
{{ /member:login }}
~~~

### Creating A Logout Link
Of course once users are logged in to your site you are going to want to provide an option to logout, again Statamic provides us with a tag to do this and the option to redirect to a new page once logged out.

~~~twig
<a href="{{ member:logout return="logout-page" }}">Logout</a>
~~~

### Creating Your Secure Content
So you have created your login and logout areas on the front end of the site, now all that you need to do is ensure that the content you want to keep hidden from visitors who are not logged in is output using a conditional in your page template, without this everyone will still be able to see your content. Using a simple `{{ if logged_in }}` conditional is all that is required and you could provide a link to the login form if not.

~~~twig
{{ if logged_in }}
<section role="main">
  <h2>{{ title }}</h2>
  {{ content }}
</section><!-- END role="main" -->
{{ else }}
<p>You need to be logged in to see this. Please <a href="/login">login</a>.</p>
{{ endif }}
~~~

That is all there is to it, if you would like to see the Gist I created have a look on my [Github](https://gist.github.com/garethredfern/6205325) page. I am sure as Statamic evolves the member's functionality will evolve and using plugins like [Raven](http://statamic.com/add-ons/raven) you will be able to allow users to sign up through the front end of your site and add their own content.

{% endraw %}
