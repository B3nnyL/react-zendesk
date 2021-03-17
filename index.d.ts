import { Component } from "react";

export interface IZendeskProps {
  defer?: boolean;
  zendeskKey: string;
  [objKey: string]: any;
}

declare var ZendeskAPI: (...args: any[]) => {}
export default class Zendesk extends Component<IZendeskProps> {}
