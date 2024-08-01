import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() {}

  getMessages(senderId: string, receiverId: string): string[] {
    const messages = localStorage.getItem(this.getStorageKey(senderId, receiverId));
    return messages ? JSON.parse(messages) : [];
  }

  addMessage(senderId: string, receiverId: string, message: string) {
    const messages = this.getMessages(senderId, receiverId);
    messages.push(`${senderId}: ${message}`);
    localStorage.setItem(this.getStorageKey(senderId, receiverId), JSON.stringify(messages));
  }

  clearMessages(senderId: string, receiverId: string) {
    localStorage.removeItem(this.getStorageKey(senderId, receiverId));
  }

  private getStorageKey(senderId: string, receiverId: string): string {
    const ids = [senderId, receiverId].sort();
    return `chatMessages_${ids[0]}_${ids[1]}`;
  }
}