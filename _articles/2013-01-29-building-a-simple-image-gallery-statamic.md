---
title: "Building A Simple Image Gallery In Statamic"
layout: post
date: 2013-01-29
author: garethredfern
categories:
  - tutorials
tags:
  - image gallery
summary: >
  In this short post I will show you how
  to build a simple image gallery using
  the grid fieldset and Statamic Image
  Plugin.
---

{% raw %}

### Creating The Fieldset
Depending on how you are going to set your gallery up will depend on the best way to set your fieldset up. This post will take you through setting up a one page gallery. In a follow up post I'll cover how to create a gallery listing where you could have multiple galleries set up.

#### One Page Gallery Fieldset
In your fieldsets folder which is located in the _config folder create a gallery.yaml file, you can call the fieldset file whatever you like but I would always try to have the name describe what the fields do. In this file you will create the gallery fields which will display in your control panel using the [Grid Fieldtype](http://statamic.com/learn/documentation/fieldtypes/grid). One thing to note when creating your fields in the Yaml file is that **spacing is very important** you will notice that the fields are indented using 2 spaces and this is what you should stick to. So here is my gallery.yaml file:

~~~yaml
fields:
  gallery:
    display: Image Gallery
    type: grid
    starting_rows: 1
    min_rows: 1
    fields:
      title:
        display: Image Title
        type: text
        width: 50%
      img:
        display: Image
        type: file
        allowed: [png, gif, jpg, jpeg]
        destination: assets/img/gallery # make sure your folder is writeable
~~~

First you create the top level key `fields:` under this you then create the fields you require with their settings. I have created a `gallery:` field which you will note is indented using 2 spaces below `fields:`, again you can use whatever name you wish, the field name will be used later to render the gallery in your template. Next you will see the settings for the gallery field again indented by 2 spaces:

* display: Image Gallery (this is the title text to display above the field in the control panel).
* type : grid (this tells Statamic to use the [grid feildtype](http://statamic.com/learn/documentation/fieldtypes/grid)).
* starting_rows: 1 (the row which the grid starts at usually 1).
* min_rows: 1 (you could force the user to enter a minimum number of rows).

You now have the first part of the grid set up but before you can enter any entries you need to give the grid some fields. To do this you nest a `fields:` key under the grid and again using the 2 space indentation you add your field options under it:

* title: (the name of the field, used as a variable in your template).
* display: Image Title (the name which will display in the grid field in your control panel).
* type: text (the filedtype, you can choose from any of [these](http://statamic.com/learn/documentation/fieldtypes)).
* width: 50% (this sets the width of the grid cell that will display in the control panel, it is optional).

You will need to repeat this set up (using the example above to help) for the img field, again taking care to use 2 space indentation. You will notice I have called this field `img:` not `image:`, I found that if you name the image field `image:` then later on when you use the image plugin the variable name clashes. **If you choose to name the field something different to me I would avoid using image.**

#### Create The Image Upload Directory
If you have followed my example above you will notice that I gave the `destination:` a path of `assets/img/gallery` you will need to create this folder and make it writeable (777). Navigate to your assets folder and in the img folder create a gallery folder. Again you can choose any name but just make sure the destination file path matches in your gallery.yaml file. So that we don't forget we should also make the _cache directory writeable (777) as this is where the Statamic Image Plugin will save a cached version of our image.

### Create The Content Page
In your _content folder create a folder called gallery and in there create a page.md file. What you name this folder is again up to you. Inside your page.md file, between the [YAML Front Matter](http://statamic.com/learn/core-concepts/content-files) (a set of three dashes in the head of your document), add the following:

~~~yaml
title: Image Gallery Basic
_template: gallery
_fieldset: gallery
~~~

This gives the page a title, tells the page to use the gallery template to render the content, and assigns the gallery fieldset that we just created.

### Th Gallery Template
In your templates folder located in your _themes folder create a gallery.html file. In here is where you will create the html markup for the gallery and add the Statamic tags which will render your images. I have kept this super simple for the purposes of this example but you could create any kind of gallery you wish. My code looks like this:

~~~html
<h2>Gallery Using Image Plugin</h2>
<div>
  <ul class="gallery">
    {{ gallery }}
    <li>
      <a href="{{ img }}">
        <img src="{{ transform src="{{ image_url }}" width="600" height="300" }}">
        <div>{{ title }}</div>
      </a>
    </li>
    {{ /gallery }}
  </ul>
</div>
~~~

First I have created an unordered list to mark the content up, I then wrap the `li` tags in a Statamic tag pair `{{ gallery }}{{ /gallery }}`. If you remember back to when we created the fields this is the name that we gave to the fields in the gallery.yaml fieldset file. The anchor tag uses the `{{ img }}` variable to output the file path to the image (again the same name we gave to the field in the gallery.yaml file). Finally we use the [transform tag](http://statamic.com/learn/documentation/tags/transform) to render our images at a size of our choosing. There are a few different parameters that you can set for the transform tag, you can read about them in the [docs](http://statamic.com/learn/documentation/tags/transform). For now here's what I have used:

* `{{ img }}` tag is what we set in the gallery.yaml fieldset file and renders the image file path.
* `width="600"` and `height="300"` are parameters which set what size you would like the image to render. By default the image will constrain to the largest dimension. For more parameters review the [docs](http://statamic.com/learn/documentation/tags/transform).
* `{{ title }}` renders the tile that we gave the image using the `title:` field set in the gallery.yaml fieldset file.

You should now have everything set up and ready to go. If you login to your control panel and navigate to the gallery page you will see a title, slug field, with the gallery grid below that ready for adding your images. One point to note is that there is still a content field below this. If you do not want to have this content field display you can add the following code to your gallery.yaml fieldset file:

~~~yaml
content:
	type: hidden
~~~

Again spacing is very important, the complete file should look like this:

~~~yaml
fields:
  gallery:
    display: Image Gallery
    type: grid
    starting_rows: 1
    min_rows: 1
    fields:
      title:
        display: Image Title
        type: text
        width: 50%
      img:
        display: Image
        type: file
        allowed: [png, gif, jpg, jpeg]
        destination: assets/img/gallery # make sure your folder is writeable

  content:
    type: hidden
~~~

### Conclusion
Upload some images, give them a title and save your gallery page. Navigate to you gallery on the front end of the site and you should see your images with titles rendered to the page. Setting up an image gallery in Statamic is really that simple.

Once you have this one page gallery set up you can then take what you have learnt and create an entries listing which would hold multiple galleries, I will show you how to do that in [my next post](http://www.statamicthemes.com/articles/building-multiple-image-galleries-statamic). If you have any questions don't hesitate to ask in the comments below and I will do my best to help.

{% endraw %}
