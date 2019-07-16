# react-zendesk

> A component enable Zendesk in your React application

## Installation

```sh
npm i react-zendesk --save
```

## Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import Zendesk from "react-zendesk";
const ZENDESK_KEY = "your zendesk embed key";

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
  return <Zendesk zendeskKey={ZENDESK_KEY} {...setting} />;
};

ReactDOM.render(<App />, document.getElementById("#app"));
```

## License

MIT
