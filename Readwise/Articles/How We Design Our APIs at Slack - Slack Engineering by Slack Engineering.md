---
aliases: [How We Design Our APIs at Slack - Slack Engineering, How We Design Our APIs at Slack - Slack Engineering]
author: Slack Engineering
---
# How We Design Our APIs at Slack - Slack Engineering by Slack Engineering

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[Slack Engineering]]
- Full Title: How We Design Our APIs at Slack - Slack Engineering
- Category: #articles
- Source: [[{source}]]
- URL: https://slack.engineering/how-we-design-our-apis-at-slack/

## Highlights
### New highlights synced
- If APIs are designed well, developers will love them, and can become the most creative innovators using your APIs. ([View Highlight](https://read.readwise.io/read/01fr6mmrfp5vemtgxthn1vrb55)) [Open in Readwise](https://readwise.io/open/264329715) ^rw264329715
    - Date:: [[December 30th, 2021, Thursday]]
- Do one thing and do it well ([View Highlight](https://read.readwise.io/read/01fr84zrayhetzk7tk5hfe0m0d)) [Open in Readwise](https://readwise.io/open/264539249) ^rw264539249
    - Note: Keeping your API small and doing only one thing whenever possible ensures that your API will remain fast, scalable, and easy to understand ^rw264539249-note
    - Date:: [[December 31st, 2021, Friday]]
- when in doubt, **enforce a finite number of objects in any collection or paginate them**. It’s not a premature optimization to define sane, rational upper bounds. ([View Highlight](https://read.readwise.io/read/01fr84y9ag7ydet74fkmg5ayz1)) [Open in Readwise](https://readwise.io/open/264539181) ^rw264539181
    - Date:: [[December 31st, 2021, Friday]]
- Another principle for designing APIs is to return meaningful errors, making troubleshooting easier for developers. ([View Highlight](https://read.readwise.io/read/01fr85m4yt4jpkxmcf7h2mc3kj)) [Open in Readwise](https://readwise.io/open/264541069) ^rw264541069
    - Note: Error messages are a critical piece in API design. A good error message tells the user exactly what went wrong, how they can fix it, and where they can find more information. They should be clearly actionable ^rw264541069-note
    - Date:: [[December 31st, 2021, Friday]]
- Implementation details should not leak in your API, particularly errors. ([View Highlight](https://read.readwise.io/read/01fr85qew393g1p6srgvcy8bcd)) [Open in Readwise](https://readwise.io/open/264541505) ^rw264541505
    - Date:: [[December 31st, 2021, Friday]]
- If you’re also building SDKs and libraries for developers, it’s important not to “swallow” error messages and warnings. Ensure the developer has access to anything that could be useful in a harrowing debugging session, like HTTP headers and raw request bodies. ([View Highlight](https://read.readwise.io/read/01fr85rhhnq54bqgcfqh5js5x5)) [Open in Readwise](https://readwise.io/open/264541544) ^rw264541544
    - Date:: [[December 31st, 2021, Friday]]
- It’s great if an SDK can interpret errors and make them even more useful, but a developer should also be able to read raw API documentation about an error and still pinpoint it at the SDK level. ([View Highlight](https://read.readwise.io/read/01fr85tqw1byzna50qecw2a6vc)) [Open in Readwise](https://readwise.io/open/264541885) ^rw264541885
    - Note: If you believe that you can help the user narrow in on the issue, great. Do that. But don’t stop them from debugging further as the issue may not always be what you think it is ^rw264541885-note
    - Date:: [[December 31st, 2021, Friday]]
- Do not nest big collections inside other big collections: Pagination, in that case, is too complicated. ([View Highlight](https://read.readwise.io/read/01fr85y2vbrhfcrgyhyvpexz2g)) [Open in Readwise](https://readwise.io/open/264543616) ^rw264543616
    - Note: Curious what their solution is in this case. Do they return a url to get the first page of results, or do they expect the developer to just go off and find the right url ^rw264543616-note
    - Date:: [[December 31st, 2021, Friday]]
- Some key takeaways are when you’re building an API: spend time thinking about your API design up front, be intentional with your design choices, and collect feedback from multiple stakeholders. ([View Highlight](https://read.readwise.io/read/01fr86kjqeq8b34bt729fb5a7a)) [Open in Readwise](https://readwise.io/open/264544255) ^rw264544255
    - Date:: [[December 31st, 2021, Friday]]
