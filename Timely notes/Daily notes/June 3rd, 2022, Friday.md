---
tags:
aliases: [2022-06-03]
---

# June 3rd, 2022, Friday

[[Timely notes/Daily notes/June 2nd, 2022, Thursday|<<Yesterday]] | [[Timely notes/Daily notes/June 4th, 2022, Saturday|Tomorrow>>]]

## [[OTD]]

### Happenings

```query
("June 3" OR "June 3rd" OR "6/3") -path:Readwise
```

### Highlights

```query
("June 3" OR "June 3rd" OR "6/3") path:Readwise
```

### Timely notes
- [[Timely notes/Weekly notes/Week of May 30th, 2022 (23)|Weekly Page]]
- [[Timely notes/Monthly notes/June 2022|Monthly Page]]
- [[Timely notes/Quarterly notes/Q2 2021|Quarterly Page]]
- [[Timely notes/Yearly notes/2022|Yearly Page]]

## [[Daily Pages]]

### [[Evening Review]]

#### [[Journal]]

This morning Taylor felt the baby move again, so that's good! When Taylor went to work this morning I laid on the couch and slept for a couple of hours. Today was mostly solving merge conflicts, and build issues at work. I discovered that we didn't have any kind of code splitting happening, which was causing us to include the entirety of material ui icons in our bundles, which was inflating them. I decided that the easiest solution for now was to update the imports so that they went directly to the icon, instead of importing the barrel file. I have a future task to work on the build process, and try to make the bundles smaller. I think I'll address tree shaking then. Taylor for to meet Sophia and Haris/ baby today, which is pretty exciting! 

## Notes

```javascript
await fetch("https://join.ourfamilywizard.com/ofw/signup/pro/part1.form", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
        "Sec-GPC": "1",
        "If-Modified-Since": "Wed, 01 Jun 2022 19:13:18 GMT",
        "If-None-Match": "W/\"9d7-18120afc0b0\""
    },
    "referrer": "https://join.ourfamilywizard.com/app/join/signup",
    "method": "GET",
    "mode": "cors"
});
```

```javascript
await fetch("https://join.ourfamilywizard.com/ofw/signup/pro/part1.form", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-GPC": "1",
        "If-Modified-Since": "Wed, 01 Jun 2022 19:13:18 GMT",
        "If-None-Match": "W/\"9d7-18120afc0b0\""
    },
    "referrer": "https://join.ourfamilywizard.com/app/join/signup",
    "method": "GET",
    "mode": "cors"
});
```