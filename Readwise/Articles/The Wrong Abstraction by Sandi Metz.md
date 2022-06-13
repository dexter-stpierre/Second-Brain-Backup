---
aliases: [The Wrong Abstraction, The Wrong Abstraction]
author: Sandi Metz
---
# The Wrong Abstraction by Sandi Metz

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Sandi Metz]]
- Full Title: The Wrong Abstraction
- Category: #articles
- [[Tags]]: [[Formative Writings]] 
- Source: [[{source}]]
- URL: https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction

## Highlights
### New highlights synced
- Existing code exerts a powerful influence. Its very presence argues that it is both correct and necessary. ([View Highlight](https://read.readwise.io/read/01fnc5aewrw0mj6wk4bj6gjcxa)) [Open in Readwise](https://readwise.io/open/252885646) ^rw252885646
    - Note: Remember that code was written by programmers that are just as likely to be wrong as you are. Existing code is not authoritative ^rw252885646-note
    - Date:: [[November 25th, 2021, Thursday]]
- When dealing with the wrong abstraction, *the fastest way forward is back*. Do the following:
  1. Re-introduce duplication by inlining the abstracted code back into every caller.
  2. Within each caller, use the parameters being passed to determine the subset of the inlined code that this specific caller executes.
  3. Delete the bits that aren't needed for this particular caller.
  This removes both the abstraction *and* the conditionals, and reduces each caller to only the code it needs. When you rewind decisions in this way, it's common to find that although each caller ostensibly invoked a shared abstraction, the code they were running was fairly unique. Once you completely remove the old abstraction you can start anew, re-isolating duplication and re-extracting abstractions. ([View Highlight](https://read.readwise.io/read/01fnc7v9yb2namqnsjw09d0r9n)) [Open in Readwise](https://readwise.io/open/252903100) ^rw252903100
    - Note: If your abstractions have gotten messy and you have too many branching paths in them, remove the abstraction with the code implemented directly in the place where they were being used, including only the code needed to implement that use case. Once you have done that look for similarities and differences to determine how to make your abstractions. Often if an abstraction has multiple branch paths the correct abstractions will be multiple top level abstractions that implement the same abstraction inside of them ^rw252903100-note
    - Date:: [[November 25th, 2021, Thursday]]
- Don't get trapped by the sunk cost fallacy. If you find yourself passing parameters and adding conditional paths through shared code, the abstraction is incorrect. It may have been right to begin with, but that day has passed. ([View Highlight](https://read.readwise.io/read/01fnc7x7de9fgap41mhdy4ft4d)) [Open in Readwise](https://readwise.io/open/252903530) ^rw252903530
    - Date:: [[November 25th, 2021, Thursday]]
- Once an abstraction is proved wrong the best strategy is to re-introduce duplication and let it show you what's right. ([View Highlight](https://read.readwise.io/read/01fnc7xm02xnf6sdz5ydjrm4r3)) [Open in Readwise](https://readwise.io/open/252903532) ^rw252903532
    - Date:: [[November 25th, 2021, Thursday]]
