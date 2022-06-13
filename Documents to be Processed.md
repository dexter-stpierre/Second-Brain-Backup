---
aliases: 
tags: 
date created: November 17th, 2021, Wednesday
date modified: December 14th, 2021, Tuesday
---

# Test Dataview 2

```dataviewjs
const dateFormat = 'MMMM Do, YYYY, dddd';
const readwiseFolder = 'Readwise';
const processedLog = 'Processed Document Log'

const groupDocuments = (documents, processedDocumentsLinks) => {
  const sortedDocuments = documents.reduce((sortedDocuments, document) => {
    const processedLink = processedDocumentsLinks.find((processedDocument) => processedDocument.link.equals(document.file.link));

    const highlightedAtArray = document.date;

    if (!processedLink) sortedDocuments.unprocessedDocuments.push(document);
    else if (processedLink.processedDate.isBefore(moment(highlightedAtArray[highlightedAtArray.length - 1], dateFormat))) sortedDocuments.needsAdditionalProcessing.push(document);
    else sortedDocuments.processedDocuments.push(document);
    return sortedDocuments;
  }, {processedDocuments: [], needsAdditionalProcessing: [], unprocessedDocuments: []});

  return {
    processedDocuments: dv.array(sortedDocuments.processedDocuments),
    needsAdditionalProcessing: dv.array(sortedDocuments.needsAdditionalProcessing),
    unprocessedDocuments: dv.array(sortedDocuments.unprocessedDocuments),
  };
};

const processedDocumentsPage = dv.page(processedLog);

processedDocumentsPage.file.tasks.map((task) => console.log(dv.page(task.Document.path)))

const links = processedDocumentsPage.file.tasks.map((task) => ({link: dv.page(task.Document.path).file.link, processedDate: moment(task.processedAt, dateFormat)}));

const documents = dv.pages(`"${readwiseFolder}"`);

const {
  processedDocuments,
  needsAdditionalProcessing,
  unprocessedDocuments,
} = groupDocuments(documents.array(), links);

dv.header(1, `Processed Documents (${processedDocuments.length})`);
dv.list(dv.array(processedDocuments).file.link);

dv.header(1, `Needs additional Processing (${needsAdditionalProcessing.length})`);
dv.list(dv.array(needsAdditionalProcessing).file.link);

dv.header(1, `Unprocessed Documents (${unprocessedDocuments.length})`);
dv.list(dv.array(unprocessedDocuments).file.link);
```
