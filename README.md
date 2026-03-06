# ✦ Your Blog

A clean, minimal blog built for GitHub Pages.  
Feed inspired by Threads · Reading experience inspired by Medium · LaTeX via KaTeX · BBCode formatting.

---

## 🚀 Setup on GitHub Pages

1. Create a new GitHub repository (e.g. `yourusername.github.io` or `blog`)
2. Drop all files from this folder into the repo root
3. Go to **Settings → Pages → Branch: main → / (root)** → Save
4. Your blog is live at `https://yourusername.github.io`

---

## ✍️ Writing posts

### 1. Add to the feed (`index.html`)

Find the `posts` array in `index.html` and add an entry:

```js
{
  id: "my-post-slug",       // used in URL: post.html?id=my-post-slug
  title: "My Post Title",
  excerpt: "A short preview shown on the feed...",
  date: "July 1, 2025",
  tags: ["essay", "math"],
  emoji: "∑",               // thumbnail emoji
  readTime: "4 min"
}
```

### 2. Add the full post (`post.html`)

Find the `POSTS` object in `post.html` and add:

```js
"my-post-slug": {
  title: "My Post Title",
  subtitle: "Optional subtitle shown under the title",
  date: "July 1, 2025",
  readTime: "4 min",
  tags: ["essay", "math"],
  author: "Your Name",
  authorInitial: "Y",
  content: `
    <p>Your content here, with BBCode and LaTeX!</p>
    ...
  `
}
```

---

## 📐 LaTeX

Use standard KaTeX delimiters:

| Syntax | Result |
|---|---|
| `$x^2$` | Inline math |
| `$$\sum_{n=1}^{\infty} \frac{1}{n^2}$$` | Display (centered) math |
| `\( x \)` | Inline alternative |
| `\[ x \]` | Display alternative |

---

## 🎨 BBCode Reference

| Tag | Effect |
|---|---|
| `[b]bold[/b]` | **bold** |
| `[i]italic[/i]` | *italic* |
| `[u]underline[/u]` | underline |
| `[s]strikethrough[/s]` | ~~strikethrough~~ |
| `[highlight]text[/highlight]` | yellow highlight |
| `[spoiler]hidden[/spoiler]` | click to reveal |
| `[color=red]text[/color]` | colored text |
| `[size=1.5]text[/size]` | sized text (em units) |
| `[quote]text[/quote]` | blockquote |
| `[quote=Author]text[/quote]` | attributed blockquote |
| `[code]...code...[/code]` | code block |
| `[inline]code[/inline]` | inline code |
| `[url=https://...]label[/url]` | hyperlink |
| `[center]text[/center]` | centered text |
| `[right]text[/right]` | right-aligned text |
| `[list][*]item[*]item[/list]` | bullet list |
| `[list=1][*]item[/list]` | numbered list |

---

## 🗂 File structure

```
/
├── index.html     ← Feed (Threads-style)
├── post.html      ← Reader (Medium-style)
└── README.md
```

---


## Theme Changes 

This tempalte made with plain HTML/CSS/JS · No build step required

### Links, header, footer
Only one file: **`layout.js`**

Everything shared across all pages lives there. Here's the map:

---

**Site identity**
```js
const SITE = {
  name:    'Not a Note',      // ← site title in nav
  author:  'Rudi Prihandoko', // ← footer copyright name
  year:    2025,              // ← footer year
  baseUrl: 'https://rud72k.github.io', // ← used in RSS
}
```

**Nav links** — add, remove, or reorder pages
```js
nav: [
  { href: 'writing.html', label: 'Writing' },
  { href: 'about.html',   label: 'About'   },
  { href: 'feed.xml',     label: '', icon: 'fa-solid fa-rss', title: 'RSS' },
]
```

**Footer social links**
```js
social: [
  { href: 'https://instagram.com/...', icon: 'fa-brands fa-instagram', title: 'Instagram' },
  ...
]
```

**Shared CSS** — colors, fonts, nav style, footer style, FAB button
```js
const SHARED_CSS = `
  :root, [data-theme="light"] { --bg: #ffffff; ... }
  [data-theme="dark"]         { --bg: #101010; ... }
  .nan-header { ... }
  .nan-footer { ... }
  .nan-fab    { ... }
`
```

---
### The template structure 

You may want to change the templates, you don't need to touch the file `layout.js`. Here is the files that need to be change. 

| Change | File to edit instead |
|---|---|
| Post reading layout, typography | `post.html` |
| Feed card design | `index.html` |
| Writing list design | `writing.html` |
| About page content | `about.html` |
| Adding a new page | `page-template.html` → new file, then add to `nav` in `layout.js` |
