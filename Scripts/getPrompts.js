async function getPrompts(promptsFilePath, numberOfPrompts, headding = '#####') {
  const selectedPrompts = [];
  const promptsFile = app.metadataCache.getFirstLinkpathDest(promptsFilePath,"");
  const prompts = (await app.vault.read(promptsFile)).split("\n");

  for(let i=0;i<numberOfPrompts;i++) {
    const n = Math.floor(Math.random()*prompts.length);
    const [prompt] = prompts.splice(n, 1);
    selectedPrompts.push(`${headding}${headding ? ' ' : ''}${prompt}`);
  }
  return selectedPrompts.join('\n\n');
}

module.exports = getPrompts;