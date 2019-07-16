import { Component } from "react";

export interface IZendeskProps {
	key: string;
	[objKey: string]: any;
}

export default class Zendesk extends Component<IZendeskProps> {}
