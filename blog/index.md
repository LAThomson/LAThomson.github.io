---
layout: default
title: Blog
permalink: /blog/
---

## Blog

{% for post in site.posts %}
<div class="post-entry" markdown="1">
### [{{ post.title }}]({{ post.url | relative_url }})

*{{ post.date | date: "%-d %B %Y" }}*
{:.post-entry-meta}

{{ post.excerpt | strip_html | strip_newlines | truncatewords: 30 }}
{:.detail}

</div>
{% else %}
*No posts yet — check back soon.*
{% endfor %}
