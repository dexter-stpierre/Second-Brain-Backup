---
tags:
aliases: [<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>]
---

# <% tp.date.now("MMMM Do, YYYY, dddd", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>

[[Timely notes/Daily notes/<% tp.date.now("MMMM Do, YYYY, dddd", -1, tp.file.title, "MMMM Do, YYYY, dddd") %>|<<Yesterday]] | [[Timely notes/Daily notes/<% tp.date.now("MMMM Do, YYYY, dddd", 1, tp.file.title, "MMMM Do, YYYY, dddd") %>|Tomorrow>>]]

## [[OTD]]

### Happenings

```query
("<% tp.date.now("MMMM D", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>" OR "<% tp.date.now("MMMM Do", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>" OR "<% tp.date.now("M/D", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>") -path:Readwise
```

### Highlights

```query
("<% tp.date.now("MMMM D", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>" OR "<% tp.date.now("MMMM Do", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>" OR "<% tp.date.now("M/D", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>") path:Readwise
```

### Timely notes
- [[Timely notes/Weekly notes/<% tp.date.weekday("[Week of] MMMM Do, YYYY (ww)", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>|Weekly Page]]
- [[Timely notes/Monthly notes/<% tp.date.now("MMMM YYYY", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>|Monthly Page]]
- [[Timely notes/Quarterly notes/<% tp.date.now("[Q]Q 2021", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>|Quarterly Page]]
- [[Timely notes/Yearly notes/<% tp.date.now("YYYY", 0, tp.file.title, "MMMM Do, YYYY, dddd") %>|Yearly Page]]

## [[Daily Pages]]

### [[Morning Routine]]

#### Checklist

- [ ] Review YNAB
- [ ] Stretch
- [ ] Process Inbox
- [ ] Readwise daily review
- [ ] Open Obsidian on iPhone and iPad

#### Prompts

<% tp.user.getPrompts('Morning Questions', 1) %>

### [[Daily Log]]

```button
name Start Time Tracking
type append template
action End Time Tracking Button
templater true
```
^button-startTimeTracking

### [[Evening Review]]

#### Checklist

- [ ] Journal
- [ ] Process Inbox
- [ ] Schedule additional tasks for tomorrow
- [ ] Open Obsidian on iPhone and iPad
- [ ] Reschedule any incomplete tasks
- [ ] Review YNAB


#### Prompts

<% tp.user.getPrompts('Evening Questions', 1) %>

#### [[Journal]]

## Notes
