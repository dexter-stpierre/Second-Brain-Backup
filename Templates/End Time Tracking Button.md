```button
name End Time Tracking
type append text
action <%* tR += `<% tp.user.displayElapsedTime(moment('${moment()}'), moment()) %>` %>
templater true
remove true
```
^button-endTimeTracking
    - 