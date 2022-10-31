import { Node } from 'react-flow-renderer';

export enum IPipelineProcessNodeStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  SUCCESS = 'success',
  FAILURE = 'failure',
  WARN = 'warn',
}

export enum IPipelineProcessNodeStatusColor {
  pending = '#999',
  running = '#479DFF',
  success = '#52C41A',
  failure = '#F5222D',
  warn = 'rgb(255, 164, 61)',
}

export interface IPipelineProcessNode extends Node {
  label?: string;
  status?: `${IPipelineProcessNodeStatus}`;
  [key: string]: any;
}
export interface IPipelineProcessNodeProps {
  nodes: IPipelineProcessNode[];
  onClick?: (node: IPipelineProcessNode) => void;
}
