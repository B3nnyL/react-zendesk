# react-zendesk

> A component simplifies Zendesk widget usage in your React application

## Introduction

This component applies to Zendesk Web Widget including contact form, live chat, talk, answer bot and help center. For more information on widget and API, please check [Zendesk official documentation](https://developer.zendesk.com/embeddables/docs/widget/introduction)

## Installation

```sh
npm i react-zendesk --save
```

## Component Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import Zendesk from "react-zendesk";
const ZENDESK_KEY = "your zendesk embed key";

// Take contact form as an example
// Let's customise our contact form appearance, launcher and add prefill content
const setting = {
  color: {
    theme: "#000"
  },
  launcher: {
    chatLabel: {
      "en-US": "Need Help"
    }
  },
  contactForm: {
    fields: [
      { id: "description", prefill: { "*": "My pre-filled description" } }
    ]
  }
};

const App = () => {
  return <Zendesk zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')} />;
};

ReactDOM.render(<App />, document.getElementById("#app"));
```

## Zendesk API usage

```js
import { ZendeskAPI } from "react-zendesk";
...
// Set Zendesk widgets in German
ZendeskAPI("webWidget", "setLocale", "de");
...

```

## Resources

[Zendesk Widget Documentation](https://developer.zendesk.com/embeddables/docs/widget)

## License

MIT
