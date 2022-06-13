---
tags:
aliases: [2022-01-25]
date created:
date modified: January 25th, 2022, Tuesday
---

# January 25th, 2022, Tuesday

[[Timely notes/Daily notes/January 24th, 2022, Monday|<<Yesterday]] | [[Timely notes/Daily notes/January 26th, 2022, Wednesday|Tomorrow>>]]

## [[OTD]]

```query
"January 25th"
```
- [[Timely notes/Weekly notes/Week of January 24th, 2022 (05)|Weekly Page]]
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

- 13:05-16:12 (3 hours and 6 minutes)(186) [[13:00]] [[14:00]] [[15:00]] [[16:00]]
	- merge `release/messages-rewrite` into `JS-929`
	- Add multiple messages selected screen
	- Fixed some styles to match design better
	- Installed [perfectpixel](https://www.welldonecode.com/perfectpixel/), a Chrome extension that allows me to overlay a design on my browser to find styling inconsistencies
	- Submitted PR for JS-929
	- Moved around some tasks in Jira

- 10:37-13:05 (2 hours and 27 minutes)(147) [[10:00]] [[11:00]] [[12:00]] [[13:00]]
	- Determined how to evaluate which folders are valid move targets
		- Pass both into the same hook, if there are selected messages use those, otherwise use the message being viewed
		- This works if there are selected messages, if there is no messages selected or being viewed, and if there is a message being viewed
		- Use a .every to ensure that all messages are allowed to move to the selected folder
		- Move fetching folders to its own useEffect hook so it fetches less times
	- Brought Taylor's stuff out to her
	- Ate lunch
	- Met with Erin about icon issue
		- She said she was looking for something like my sizing solution for about a year

- 09:43-10:37 (0 hours and 54 minutes)(54) [[9:00]] [[10:00]]
	- Fix comment in PR & merge
	- Status update
		- Yesterday: worked through a bunch of UI changes for the new messages UI.  Today: Hoping to finish up the last of those. No blockers
	- Read some of the yearly review doc from Todoist
	- Shared the LD MAU resource with Josie

### [[Evening Review]]

#### [[Journal]]

Today I didn't go to the gym because I was exhausted after the day yesterday. I still woke up around 6:45 and just chilled around the house in the morning. I was very productive at work today. I finished up the rest of the selecting multiple messages feature, which was a pretty large lift. I met with Erin and shared some of the stuff that I adjusted with the icons, and she really liked the solution that I came to. So that was nice. And I found a good resource to ensure better that I am implementing the designs well. I am particularly excited for that. I think that will make me a much better developer and will ensure that there is less for QA to bring up when they look at things. I wonder if Sizzy has a feature for that handles that. I did a quick look, but I should check more, and tweet at the dev if I can't find an answer.

Tonight Taylor was had dinner with Meranda Blumburg, and I just chilled at the house. Then when she got home we worked on cleaning the baby room for a little bit

## Notes
