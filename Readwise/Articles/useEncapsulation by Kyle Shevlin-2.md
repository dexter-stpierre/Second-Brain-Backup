---
aliases: [useEncapsulation, useEncapsulation]
author: Kyle Shevlin
---
# useEncapsulation by Kyle Shevlin

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Kyle Shevlin]]
- Full Title: useEncapsulation
- Category: #articles
- [[Tags]]: [[favorite]] 
- Source: [[{source}]]
- URL: https://kyleshevlin.com/use-encapsulation/

## Highlights
### New highlights synced
- A custom hook is *just a function* and functions are structures we can use to encapsulate the related elements of a concern and expose an API to our function's consumer. ([View Highlight](https://read.readwise.io/read/01fmg2a9zz8vk044m2xddgnmaa)) [Open in Readwise](https://readwise.io/open/249260058) ^rw249260058
    - Note: I wonder how Kyle would feel about a component that needs to handle multiple different kinds of data from multiple types of hooks. For example I list component that needs to consume data from a usePagination hook and a useFilters hook, and have a useEffect hook that would fetch when either changes. Is it okay to consume these directly in the component or do they need to be in a separate hook too? What if there is another useSearchQuery hook, and you needed to display all of these in the component. Would be recommend creating a monster hook that calls them all and returns all the relevant data? Or would he recommend the component calling all the hooks and then passing the data to another custom hook. I think if I was hard core on using only custom hooks in components I would probably call all the custom hooks in the component and pass the required data into a usePerformQuery hook ^rw249260058-note
    - Date:: [[November 14th, 2021, Sunday]]
- By opting to write all the hooks consumed by your components as custom ones, you will be providing future devs (including yourself) useful context by encapsulating all the pieces of a concern into a single function. By doing this, you gain all the benefits of proper encapsulation and make your components more declarative. ([View Highlight](https://read.readwise.io/read/01fmgfe9mhrqhpkn9ge1y8bhps)) [Open in Readwise](https://readwise.io/open/249343294) ^rw249343294
    - Date:: [[November 15th, 2021, Monday]]
