---
main_img: ""
title: Pagination With Page Count
meta_title: ""
meta_desc: >
  This Statamic code snippet will give you
  pagination links with a page count of
  total pages, a common requirement on
  blogs and listings pages.
alt_title: ""
author: garethredfern
featured: not_featured
categories:
  - theme building
tags:
  - reference
video: ""
summary: >
  This Statamic code snippet will give you
  pagination links with a page count of
  total pages, a common requirement on
  blogs and listings pages.
---

{% raw %}

~~~.language-php
{{# Add simple pagination: limit must equal entries limit #}}

{{ entries:pagination
  folder="blog"
  limit="5"
  taxonomy="no"
}}
  {{ if total_pages > 1 }}
  <div class="pagination">
    {{ if previous_page }}
      <a href="{{ previous_page }}" class="prev">&larr; Previous Page</a>
    {{ endif }}
    {{ if next_page }}
      <a href="{{ next_page }}" class="next">Next Page &rarr;</a>
    {{ endif }}
  </div><!-- END .pagination -->
  <div class="pageNumber">Page {{ current_page }} of {{ total_pages }}</div>
  {{ endif }}
{{ /entries:pagination }}
~~~

{% endraw %}