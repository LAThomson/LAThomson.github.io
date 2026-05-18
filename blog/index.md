---
layout: default
title: Blog
permalink: /blog/
---

## Blog

{% for post in site.posts %}
- **[{{ post.title }}]({{ post.url | relative_url }})** *({{ post.date | date: "%-d %B %Y" }})*
  - {{ post.excerpt | strip_html | strip_newlines | truncatewords: 30 }}
{% else %}
*No posts yet — check back soon.*
{% endfor %}
