# Blog posts

Add a new post by creating a Markdown file in this folder.

## URL rules

- Listing page: `/blog`
- Post page: `/blog/<slug>`
- The markdown **file name** is the slug

Example:

`talking-about-clinical-experience.md`
→ `/blog/talking-about-clinical-experience`

## Front matter

```md
---
title: "Your post title"
date: "2026-07-31"
description: "Short summary shown on the blog listing."
---

Your markdown content goes here.
```

Optional: set `draft: true` to keep a post unpublished.

## Images

Use external image URLs in standard markdown:

```md
![Clinic team reviewing a digital pathway](https://images.example.com/photo.jpg)
```

External `https://` image links are supported.
