const assert = require('assert');

describe('Google Search Function', () => {
  it('can find search results', async () => {
    await browser
      .url('https://www.google.com/ncr')
      const prompt = await $('[id="L2AGLb"]'); // consent popup is coming for other location which needs to be accepted to proceed
      console.log("hellllo",prompt)
      if(prompt.elementId)
        await prompt.click();
      const input = await $('[name="q"]');
      await input.setValue('test123');

      const title = await browser.getTitle();
        assert.equal(title, 'Google');
  });
});
