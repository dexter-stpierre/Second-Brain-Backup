---
aliases: [So You Think You Know Everything About React Refs, So You Think You Know Everything About React Refs]
author: Vladimir Klepov as a Coder
---
# So You Think You Know Everything About React Refs by Vladimir Klepov as a Coder

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)

## Metadata
- Author: [[Vladimir Klepov as a Coder]]
- Full Title: So You Think You Know Everything About React Refs
- Category: #articles
- Source: [[{source}]]
- URL: https://thoughtspile.github.io/2021/05/17/everything-about-react-refs/index.html

## Highlights
### New highlights synced
- A cool and useful implication of this is that you can safely put expensive side effects in a callback ref (or a `set current()` of a ref object) as long as ref identity does not change. ([View Highlight](https://read.readwise.io/read/01fmg02g54377jxsj158szpxhd)) [Open in Readwise](https://readwise.io/open/249235194) ^rw249235194
    - Note: I tend to think of the ref property as just a way to set the element to a ref object. But useRef simply returns a setter function and the ref prop simply takes a function that receives the DOM node as an argument ^rw249235194-note
    - Date:: [[November 14th, 2021, Sunday]]
- If you want setting ref to trigger a rerender, you can just pass `setState` updater as a ref prop. This code will give `children` access to root DOM node, and will not fall into infinite re-rendering or anything ([View Highlight](https://read.readwise.io/read/01fmg02159q5m14ypqk7q6qe6m)) [Open in Readwise](https://readwise.io/open/249235089) ^rw249235089
    - Date:: [[November 14th, 2021, Sunday]]
- Refs are set when the DOM is mounted or a `ref` prop is added. ([View Highlight](https://read.readwise.io/read/01fmg0adrhk54z8mhjkehbyx9h)) [Open in Readwise](https://readwise.io/open/249237267) ^rw249237267
    - Note: I’d like to play with this idea here to understand the practicals of how it works better ^rw249237267-note
    - Date:: [[November 14th, 2021, Sunday]]
