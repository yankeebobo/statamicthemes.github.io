---
title: "Building Multiple Image Galleries In Statamic"
layout: post
meta_desc: >
  This is a follow up post to Build A
  Simple Image Gallery. Where I will look
  at how to create multiple galleries on a
  Statamic website using entries rather
  than a single page.
author: garethredfern
categories:
  - tutorials
tags:
  - image gallery
summary: >
  This is a follow up post to
  [Build A Simple Image Gallery](http://www.statamicthemes.com/articles/building-a-simple-image-gallery-statamic).
  Where I will look at how to create multiple
  galleries on a Statamic website using entries
  rather than a single page.
---

### Create The Gallery Content Folder
When working with entries rather than a single page you need to create a content folder to hold all your entries, in your _content folder create a folder called [gallery](https://github.com/statamicthemes/image-gallery/tree/master/_content/gallery). In this gallery folder you will also need to create a [page.md](https://github.com/statamicthemes/image-gallery/blob/master/_content/gallery/page.md) file and a [fields.yaml](https://github.com/statamicthemes/image-gallery/blob/master/_content/gallery/fields.yaml) file, these are required to tell Statamic what fields to use for the listing and to set the template which will render the gallery listings.

### Creating The Fields
The next thing to do is set up all the fields that you will require in your gallery. We will use the [Grid Fieldset](http://statamic.com/learn/documentation/fieldtypes/grid) fieldtype as we did for the [single page gallery](http://www.statamicthemes.com/articles/building-a-simple-image-gallery-statamic), make sure to use 2 spaces for indentation in your [fields.yaml](https://github.com/statamicthemes/image-gallery/blob/master/_content/gallery/fields.yaml) file, here is my code:

~~~yaml
type: number

fields:
  _template: # note the prefixed _underscore
    display: Template
    type: templates

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

The first thing to notice is that there is a `type: number` field, what this does is tell Statamic that you want to use listings which are ordered by number. The other option is to use `type: date` which would tell Statamic you want to order the entries by date. Whichever way you would like to go it is important that you must choose one or the other for the listing to work.

After setting the type of listing you want to use you can then set up your fields as we did for the simple gallery. If you need a refresher on what all the fields do have a look back at the [Simple Gallery](http://www.statamicthemes.com/articles/building-a-simple-image-gallery-statamic) article. One more field, in addition to the simple gallery, is the template selection field. I will come on to why I have chosen to add this later on in the post.

### Create The Image Upload Directory
If you have followed my example above you will notice that I gave the destination: a path of assets/img/gallery you will need to create this folder and make it writeable (777). Navigate to your assets folder and in the img folder create a gallery folder. Again you can choose any name but just make sure the destination file path matches in your [fields.yaml](https://github.com/statamicthemes/image-gallery/blob/master/_content/gallery/fields.yaml) file.

### Create The Listing Page
Within the _content folder we also need to create a [page.md](https://github.com/statamicthemes/image-gallery/blob/master/_content/gallery/page.md) file which will tell Statamic which template to use for the gallery listings, here we can add any additional content which describes the gallery listings to. My YAML Front Matter for this file looks like this:

~~~yaml
title: Image Gallery Listing
_template: gallery_listing
_fieldset: no_content
~~~

I have chosen to give the gallery listing page a title of "Image Gallery Listing", told Statamic to use the gallery_listing template and use a fieldset called [no_content](https://github.com/statamicthemes/image-gallery/blob/master/fieldsets/no_content.yaml). I will come on to  what goes into the gallery_listing template next, the fieldset called [no_content](https://github.com/statamicthemes/image-gallery/blob/master/fieldsets/no_content.yaml) is created in your [fieldsets](https://github.com/statamicthemes/image-gallery/tree/master/fieldsets) folder. The fields in here are really simple:

~~~yaml
fields:
	content:
  	type: hidden
~~~

Why have I set this template up with no fields and a content field of type hidden? The answer is that I want this to be a top level listing page with just a title and no content. By default Statamic will always display a title text field and a content field. You can hide the content field using `type: hidden`. What this does is allow you to list all the galleries on a Image Gallery Listing page with no other content displaying.

### The Gallery Entries
We will need to have some test content to display so either login to the Statamic control panel or create the first gallery entry in your _content gallery folder (remember to make the _content folder writeable 777). I have called mine [1.gallery-listing-one.md](https://github.com/statamicthemes/image-gallery/blob/master/_content/gallery/1.gallery-listing-one.md) but you can be much more exciting with your name choice. Notice the number and period before the gallery name, if you remember back to the start of this post a Statamic entry must be  a numerically prefixed content file either by date or number. If you created the entries in the Statamic control panel then the number will be automatically prepended for you. Go ahead and add some images with titles to the grid field (remember the image directory must be writeable 777). Save the first gallery then repeat this to create a second gallery listing ([2.gallery-listing-two.md](https://github.com/statamicthemes/image-gallery/blob/master/_content/gallery/2.gallery-listing-two.md)). We now have two gallery entries listed.

I have saved the complete set of files for reference on [github](https://github.com/statamicthemes/image-gallery) please feel free to download them for your own use.

### The Templates
For my gallery I am going to create two separate templates; one for the listing and one for the single gallery pages. At the start of the article I mentioned that I created a template selection field. It is this field which lets you select which template to use to render the individual galleries from the control panel. By default Statamic will use the post.yaml file to render a single entry listing. This maybe fine to use for your gallery page but if your site has a blog, then chances are it will make more sense to save this template for your blog articles. I decided to create a specific gallery template but this is completely up to you and how you want to set your site up. You could conditionally load either gallery entries or blog entries within the same post template but I'll save that for another post.

I have kept the [gallery_listing](https://github.com/statamicthemes/image-gallery/blob/master/templates/gallery_listing.html) template and the [single_gallery](https://github.com/statamicthemes/image-gallery/blob/master/templates/single_gallery.html) template really simple. The listing template looks at the gallery folder and lists all the titles as links through to the single gallery template. In the single gallery template we use the grid tag pair which we named `gallery` in our [fields.yaml](https://github.com/statamicthemes/image-gallery/blob/master/_content/gallery/fields.yaml) file to render the grid fields which are a title and image for each entry.

### Conclusion
This technique will be really useful on image heavy sites where you might need to display multiple galleries. You can easily add taxonomies to the entries which would enable you to tag and categorise images, offering even more flexibility. Work through this example and experiment with your own ideas, if you have any questions feel free to drop them in the comments below.
