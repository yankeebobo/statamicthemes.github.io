---
title: "Using The Location Field With Statamic"
layout: post
date: 2013-06-12
author: garethredfern
category: tutorials
tags:
  - location
summary: >
  Working with the the location field type in
  Statamic you can easily create a dynamic
  location map displaying points of interest.
  This is an overview of how to get started.
---

{% raw %}

Recently I have built a couple of sites where I have had the opportunity to use the new [location field type](http://statamic.com/learn/documentation/tags/location) in Statamic. This can be really useful if you need to display places on a map with a marker. The typical use case would be displaying business locations on an about us or contact us page. Whilst Statamic v1.5 is still at release candidate there isn't too much in the way of documentation for helping to set things up, so I thought it would be useful to document how I got it working. The [example files](https://github.com/statamicthemes/locations) are on Github so feel free to use them as you see fit.

### Getting Started
I have set the example up to display ordered entries from within the [locations folder](https://github.com/statamicthemes/locations/tree/master/_content/locations) but these could just as easily be date entries if you choose to go that route. Other than that there are only three elements required to get the locations set up and displaying:

1. A [fieldset](https://github.com/statamicthemes/locations/blob/master/_config/fieldsets/locations.yaml) that uses the `location` field.
2. A variable in your template that triggers the map Javascript and CSS. See [example](https://github.com/statamicthemes/locations/blob/master/_themes/location_example/layouts/default.html) line 13.
3. The [template code](https://github.com/statamicthemes/locations/blob/master/_themes/location_example/templates/default.html) to render the map.

#### The Location Field
This is used to set the location information e.g. latitude and longitude, and is required to place the marker on the map. The field syntax is as simple as adding:

~~~yaml
where:
  display: Place
  type: location
~~~

If you add the location field into the [fields.yaml](https://github.com/statamicthemes/locations/blob/master/_content/locations/fields.yaml) file or just include the locations fieldset as I have done in the example then within the control panel you will now see the map interface where you can plot your marker. There are a couple of really useful features to help you add the latitude and longitude coordinates easily:

- Locate an Address
- Use My Location

![Control Panel With Location Field](/assets/img/articles/location-field.jpg)

Go ahead and create a few entries so that you can display them on the map. A point to note is that as of version 1.5 RC1 you have to have the latitude and longitude fields populated otherwise when you go to view the map on the front end you will see a Slim Application error. This should be [fixed for 1.5RC2](http://support.statamic.com/discussions/refinery-15/329-location-error).

#### Loading The Map Javascript & CSS
There is a Statamic tag to use which will load all the Javascript and CSS required for the map:

~~~twig
{{ location:start_maps }}
~~~

In the example files I have wrapped the location tag in a conditional which looks to see if you have the `include_maps` variable set in your content. While this is not critical for the map to work it is good practice to only load the CSS and JS on pages that actually need it. The `include_maps` variable is added in the YAML Front Matter on [the page](https://github.com/statamicthemes/locations/blob/master/_content/locations/page.md) which will render the map.

#### The Template Code
The template code to render the map with locations is fairly straight forward. You use the `{{ entries:map }}` tag with the folder and locate parameters. You can also choose where you would like to centre the map:

~~~twig
{{ entries:map
  folder="locations"
  locate_with="where"
  center_point="54.272442,-4.641724" zoom="6"
}}
~~~

Finally you may wish to display some additional information in a pop up when the user clicks on the marker. To do this you just use the `{{ pop_up }}` tag pair in between the entries tag to wrap any of the entry data you want to display. For example the title and postal address for the entry, again have a look at [my location fields](https://github.com/statamicthemes/locations/blob/master/_config/fieldsets/locations.yaml) as an example and see how they are rendered in the [template](https://github.com/statamicthemes/locations/blob/master/_themes/location_example/templates/default.html).

**A point to note**: to actually get the map to display you will need to set a width on the `.map` class using CSS.

That is all there is to getting a simple map example up and running, it will be nice to see what people start doing with this feature and I am sure that with some imagination there could be lots of different applications where it could be used. A simple idea would  be to customise the markers which could be done fairly easily with a small plugin.

{% endraw %}
