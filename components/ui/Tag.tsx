import type { ReactNode } from 'react';

import Badge, { type BadgeElement, type BadgeProps, type BadgeSize, type BadgeVariant } from './Badge';

export type TagVariant = BadgeVariant;
export type TagSize = BadgeSize;
export type TagElement = BadgeElement;

export interface TagProps extends Omit<BadgeProps, 'children'> {
  children: ReactNode;
}

export default function Tag({ children, ...props }: TagProps) {
  return <Badge {...props}>{children}</Badge>;
}

