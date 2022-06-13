---
tags:
aliases: [2022-04-18]
date created: April 10th, 2022, Sunday
date modified: April 18th, 2022, Monday
---

# April 18th, 2022, Monday

[[Timely notes/Daily notes/April 17th, 2022, Sunday|<<Yesterday]] | [[Timely notes/Daily notes/April 19th, 2022, Tuesday|Tomorrow>>]]

## [[OTD]]

### Happenings

```query
("April 18" OR "April 18th" OR "4/18") -path:Readwise
```

### Highlights

```query
("April 18" OR "April 18th" OR "4/18") path:Readwise
```

### Timely Notes

- [[Timely notes/Weekly notes/Week of April 18th, 2022 (17)|Weekly Page]]
- [[Timely notes/Monthly notes/April 2022|Monthly Page]]
- [[Timely notes/Quarterly notes/Q2 2021|Quarterly Page]]
- [[Timely notes/Yearly notes/2022|Yearly Page]]

## [[Daily Pages]]

### [[Evening Review]]

#### Prompts

##### [[Where There Any Signs of My Day Going to Crap That I Could recognize?]]

I had a pretty fine day, so no

##### [[What Has Worked Well in My Life and Work today?]]

I think making some margin for myself. Today I felt like ending work a little early to play Elden Ring, so I did and I think that was a good choice

##### [[Did I Treat Myself Well, Respecting My Limits and My margins?]]

Yes, I took the time that I needed to ease back into work

#### [[Journal]]

This morning I went to Caribou and did my weekly review. I did not get through the planning part, because I was quite a bit behind. I will finish that up at the start of my work day tomorrow. Work today was mostly catching up on what happened last week, helping [[Jon Alme]] with a couple of things, and working on the better error message when a file is not present in the env. After work I played some Elden ring, and then made a meal plan and grocery list. I shopped while Taylor was at the gym and then made us dinner. I worked grading assignments for Prime for 3 hours

## Notes

### Summary of Things That Came up During My PTO

Hello Nick and Josie! I just finished catching up on Slack and emails from last week and just wanted to check in with both of you to make sure that I didn’t miss anything important.

Looks like the messages redesign is having issues with pros with no connected families. Iain is working on a fix so we can remove them from targeting. Have we determined for sure if the issue is purely front end or backend? If not I can spend some time digging into it to see if there is something I can do on the frontend
I also saw something about an issue with the delay on the autosave timer. I think Nick and Luke are going to do more discovery with that though. Let me know if you need any input from me on it.
I also saw a new ticket added in the next sprint for displaying the current folder to view message. I think this is a great idea! I went ahead and pointed it.

Looking at my tickets in the current sprint I think my priority is to do JS-842 (unhelpful error message) then move on to JS-1232 (Endpoint error audit).

Please let me know if there is anything I missed, or if my current priorities should look different.

### Prime feedback Week 3 part 1

Great work on this assignment! You accomplished all of the requirements, and the stretch goals. The one thing I'd encourage you to consider is using `.splice` for 4.e. When setting a value of an array by the index, like you did, if you set it to an index that is not yet set then things behave unexpectedly. I'd encourage you to experiment by setting a value that is way higher than the length of the array and see what happens. All of the values between the index that you set, and the previous end of the array will all be `undefined`. Here's a page that talks a little more about this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#relationship_between_length_and_numerical_properties. By using `.splice` you ensure that if you use an index that is higher than the length of the array then the items will just be added to the end of the array. So that would look like this:

```javascript
foods.splice(1, 1, 'Fried Fish');
```

Here's some documentation for the `.splice` method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice




With 4.g you are supposed to create that string using the favoriteFoods array. Imagine if you took in user input and then wanted to make the values a string to display them. Having a static string wouldn't work in that scenario. You can combine all of the values in the array into a string using the `.join` method, which you can pass the string that will be used in between each entry. That would look like this:

  

```javascript

const favoriteFoodsString = favoriteFoods.join('and');

```

  

For more info on the `.join` method check out these docs: https://www.w3schools.com/jsref/jsref_join.asp