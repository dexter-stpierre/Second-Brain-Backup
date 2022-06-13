function createEndTrackingButton() {
  const blah =
`\`\`\`button
name End Time tracking
type text
action <%* tR = \`<% tp.user.displayElapsedTime(moment('${moment()}'), moment()) %>\` %>
\`\`\`
^button-endTimeTracking
`
  return blah
}

module.exports = createEndTrackingButton;