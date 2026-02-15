import type { DateISO } from '@/types/types.ts'

export type CHUserKey = string & { readonly __brand: unique symbol }
export type CHRoomKey = string & { readonly __brand: unique symbol }
export type CHRoomId = number & { readonly __brand: unique symbol }
export type CHMessageId = number & { readonly __brand: unique symbol }

export interface CHMessage {
  id: string;
}

export interface CHUser {
  id: string;
}

export interface CHRoomGroupRaw {
  id: CHRoomId;
  key: CHRoomKey;
  created_at: DateISO;
  unread_count: number;
  last_message: CHMessage;
  last_read_message_id: CHMessageId;
  type: 'group';
  avatar_url: string | null;
  title: string;
  users: Array<CHUserKey>;
  admins_ids: Array<CHUserKey>;
}

export interface CHRoomDirectRaw {
  id: CHRoomId;
  key: CHRoomKey;
  created_at: DateISO;
  unread_count: number;
  last_message: CHMessage;
  last_read_message_id: CHMessageId;
  type: 'direct';
  direct_user_id: CHUserKey;
  direct_user: CHUser | null;
}
