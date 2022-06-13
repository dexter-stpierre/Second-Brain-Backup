---
aliases: 
tags: 
date created: April 20th, 2022, Wednesday
date modified: April 20th, 2022, Wednesday
---

# Messages Endpoint Audit

## Endpoints

For every response from and endpoint we use a function that will pull the error text out of the body. It will display any errors in `apiError.validationErrors` if they exist. If they do not exist then it will display `apiError.userMessage`

- GET /v1/autoreply
- POST /v1/autoreply
- DELETE /v1/autoreply
- GET /v1/messageFolders?includeFolderCounts=true
- GET /v1/messages/{id}
- GET /v2/messages/{id}/replies
- GET /v1/search/messages?max={pageSize}&start={page}&folderId={folderId}
- GET /v1/messages?max={pageSize}&start={page}&id={folderId}
- PATCH /v1/messages?id={folder.id}&messageIds={messageIds.join('&messageIds=')}
- DELETE /v1/messages?messageIds={ids.join('&messageIds=')}
- DELTE /v1/messageFolders/{id}
- GET /v1/messageFolders/{id}/count
- POST /v1/messageFolders
- GET /v1/messageRecipientsPVM
- GET /v1/messageRecipients
- POST /v2/messagesPVM
- POST /v2/messages
- GET /v1/messageFolders
- POST /v1/sectionViews/MESSAGES
- DELETE /v1/messageFolders/{folder.id}
- POST /v1/report/message
- POST /v1/report/messagesync
- GET /v1/myfiles/{fileId}/data

## Client

These are errors that appear either in response to specific error codes from the API, or as a result of client side validation. If error isn't self explanatory I will add an explanation of when the error appears underneath it

- Message send validation:
    - subject
        - "Subject can be no longer than 200 characters"
        - "Subject is required"
    - body
        - "Message can be no longer than 10,000 characters"
        - "Message is required"
    - to
        - "At least 1 recipient is required"
- Naming a folder:
    - name
        - "This field is required."
        - "Must be less than 25 characters"
        - "Special character "{{specialCharacter}}" is not allowed"
- Download My File:
    - Reponse error code:
        - 403
            - "You do not have access to {fileName}. Please contact the file owner to provide access."
        - 404
            - "Unable to retrieve this file. Please try again later and contact customer support if the issue persists."