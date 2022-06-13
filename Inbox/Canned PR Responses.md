---
aliases: 
tags: 
date created: June 2nd, 2022, Thursday
date modified: June 2nd, 2022, Thursday
---

# Canned PR Responses

- Calling the `makeStyles` hook inside of a component
	- I know that you can pass that as props to the useStyles hook, as seen in the examples under that link. From my understanding (from briefly looking at the source code) this might cause the component to create a new style element each time that this component re-renders, since the useStyles hook is new hook on each render.
	- I ended up creating a reproduction on codesandbox, and this for sure leaves a bunch of extra style tags when the component rerenders. I don't see this component rerendering often, and I am unsure of any issues that those extra style tags would actually cause. I guess there is always overhead in creating them, even if they don't cause issues by sticking around. I mostly looked into it out of my own curiosity. Here is the reproduction if you are interested: [https://codesandbox.io/s/nostalgic-matsumoto-pml8j?file=/src/App.js](https://codesandbox.io/s/nostalgic-matsumoto-pml8j?file=/src/App.js)
	- That being said I think we should stick to passing props to the useStyles hook, as that is the pattern shown in the docs
	- https://bitbucket.avirat.net/projects/OFW/repos/ofw-web-appv2/pull-requests/521/overview?commentId=15339
