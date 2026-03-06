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

Made with plain HTML/CSS/JS · No build step required
