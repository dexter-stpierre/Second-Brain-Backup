---
tags:
aliases: [2022-03-16]
date created: March 14th, 2022, Monday
date modified: March 15th, 2022, Tuesday
---

# March 16th, 2022, Wednesday

[[Timely notes/Daily notes/March 15th, 2022, Tuesday|<<Yesterday]] | [[Timely notes/Daily notes/March 17th, 2022, Thursday|Tomorrow>>]]

## [[OTD]]

### Happenings

```query
("March 16" OR "March 16th" OR "3/16") -path:Readwise
```

### Highlights

```query
("March 16" OR "March 16th" OR "3/16") path:Readwise
```

### Timely Notes

- [[Timely notes/Weekly notes/Week of March 14th, 2022 (12)|Weekly Page]]
- [[Timely notes/Monthly notes/March 2022|Monthly Page]]
- [[Timely notes/Quarterly notes/Q1 2021|Quarterly Page]]
- [[Timely notes/Yearly notes/2022|Yearly Page]]

## [[Daily Pages]]

### [[Evening Review]]

### Prompts

### [[What Was the Most Important Thing I Did today?]]

I think the most important thing I did today was being a little bit more intentional with my time with Taylor. I think I was a lot more present, and I think that made a real difference

### [[What Did I Discover New About myself?]]

In the kitchen I like to have a plan, and know how I am going to approach something. Today I made a steak sandwich from TikTok and because I didn't have a recipe I felt very stressed and flustered. If I am going to do that again I think I need to write out a plan and determine when certain steps need to be taken

### [[What Did I Learn today?]]

Today I learned that rendering a large amount of MaterialUI components at the same time is VERY expensive. Each one renders a style element in the head and when you have 250 of those with like 10 components each it becomes VERY expensive. Not sure why though, since rendering plain divs is not as expensive. It might be because the write for all of the divs is done at once while the style tags are done individually

#### [[Journal]]

This morning I went to the gym and ran for a mile. I felt really good doing it. At work I dug into a performance issue in messages. When the page was set to a very large size it took a long time to render all of the components. I talked through it with [[Matt Stanton]] and we decided that the best solution for now is to have a smaller max page size. Guillaume reached out with an issue with the layouts the other day and tonight I had the aha moment on it. He needed to modify the layout so that the mobile format hit at a higher pixel than the normal mobile breakpoint. The answer is to allow people to pass an object that lays out when the Layout should change to the different formats (full, md, and mobile). This will allow the consumer of the component to adjust that to whatever need they have, without making the component overly complex or duplicating any code. The current size will be the defaults and then I just have to test that everything works out. We went on a walk to Ginko and got a caramel frap. It was pretty good. I made a steak sandwich from TikTok and it was actually really good!

## Notes
