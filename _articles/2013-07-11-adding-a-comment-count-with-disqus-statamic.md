---
title: "Adding A Comment Count With Disqus & Statamic"
layout: post
date: 2013-07-11
author: garethredfern
categories:
  - tutorials
tags: ""
summary: >
  Sometimes you may want to have the comment count
  displayed in the header or footer of your post.
  This can be added in quite easily using Disqus'
  comment count script.
---

{% raw %}

The set up is really quite straightforward and the [Disqus help page](http://help.disqus.com/customer/portal/articles/565624) provides the script example required. I used the following script which I added to a disqus.js file in my theme's js directory.

~~~javascript
<script type="text/javascript">
/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'example'; // required: replace example with your forum shortname

/* * * DON'T EDIT BELOW THIS LINE * * */
(function () {
var s = document.createElement('script'); s.async = true;
s.type = 'text/javascript';
s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
(document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());
</script>
~~~

You will need to change the username to your own but other than that the script is ready to go. The final part is just appending `#disqus_thread` to your post link where you would like the comments to display.

~~~twig
<a href="{{ url }}#disqus_thread">Read More</a>
~~~

I created a read more link in the footer of the article listing so that if JavaScript was disabled for any reason then the script will fail gracefully and the link will still be useful. When JavaScript is enabled the read more text will be replaced with the comment and reaction count.

{% endraw %}
