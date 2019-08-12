import { Component } from "react";

export interface IZendeskProps {
  zendeskKey: string;
  [objKey: string]: any;
}

declare var ZendeskAPI: (...args: string[]) => {}
export default class Zendesk extends Component<IZendeskProps> {}
