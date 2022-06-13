---
tags:
aliases: [2022-01-19]
date created:
date modified: January 19th, 2022, Wednesday
---

# January 19th, 2022, Wednesday

[[Timely notes/Daily notes/January 18th, 2022, Tuesday|<<Yesterday]] | [[Timely notes/Daily notes/January 20th, 2022, Thursday|Tomorrow>>]]

## [[OTD]]

```query
"January 19th"
```
- [[Timely notes/Weekly notes/Week of January 17th, 2022 (04)|Weekly Page]]
- [[Timely notes/Monthly notes/January 2022|Monthly Page]]
- [[Timely notes/Quarterly notes/Q1 2021|Quarterly Page]]
- [[Timely notes/Yearly notes/2022|Yearly Page]]

## [[Daily Pages]]

### [[Morning Routine]]

### [[Daily Log]]

```button
name Start Time Tracking
type append template
action End Time Tracking Button
templater true
```
^button-startTimeTracking

- 10:44-12:10 (1 hour and 25 minutes)(85) [[10:00]] [[11:00]] [[12:00]]
	- Reviewing Erin's PR
	- Release timeline meeting
	- Digging into Erin's build issue

### [[Evening Review]]

#### [[Journal]]

Today was my moms birthday! I called to wish her a happy birthday tonight and we talked for about an hour. She said that she will be going to Disney World in February, which will be pretty cool

At work today I wasn't super motivated. I reviewed a large PR from Erin and spent some time helping to debug an issue with our build process. The issue ended up being that we were importing code from a package that was a dependency of one of our dependencies and it wasn't listed in out package.json. Since our program didn't state which version should be used it just went with the latest that was in our dependency tree. Well one of our dependencies updated to rely on a newer version of that package and then the version that our code was pulling in was different and no longer compatible. All we had to do was add the package to our package.json and it fixed the issue.

Luke created a design for the multi message select that allowed the user to continually select the next page of messages, until they have selected all the messages. My concern with doing that is that I don't want to send a bunch of requests for the action because it becomes complicated if there is an error and I am concerned about the time the requests will take. We have a meeting tomorrow to discuss it more.

 I finally brought my journal entries into Obsidian and was able to close out my Migrate PKM project in [[Todoist]]. That felt good to do. Now most of my important stuff should be out of Roam

## Notes
