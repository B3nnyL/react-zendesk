import { Component } from "react";

export interface IZendeskProps {
  zendeskKey: string;
  [objKey: string]: any;
}

export default class Zendesk extends Component<IZendeskProps> {}
