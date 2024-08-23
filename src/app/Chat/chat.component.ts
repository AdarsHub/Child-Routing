import { OnInit, Component } from "@angular/core";
import { ChatService } from "./chatService/chat.service";
import { UserService } from "./userService/user.service";
import { of } from 'rxjs'
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {

  receiverId: string = '';
  users: { userId: string, username: string }[] = [];
  selectedReceiverId: string = '';
  loadUsers(): void {
    this.users = this.userService.getUsers();
  }

  onReceiverSelected(receiverId: string) {
    this.receiverId = receiverId;
  }
  switchUser(userId: string) {
    // Logic to switch the current user in your application
    localStorage.setItem('currentUser', userId);
    // window.location.reload();
    this.reloadPage();
  }
  reloadPage() {
    window.location.reload();
  }
  
  messages: string[] = [];
  currentUser: string | null = null;

  constructor(private chatService: ChatService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser$.subscribe(userId => {
      this.currentUser = userId;
      if (this.currentUser && this.receiverId) {
        this.loadMessages();
        this.loadUsers();
      }
    });
  }

  ngOnChanges() {
    if (this.currentUser && this.receiverId) {
      this.loadMessages();
    }
  }

  loadMessages() {
    if (this.currentUser && this.receiverId) {
      this.messages = this.chatService.getMessages(this.currentUser, this.receiverId);
      console.log(this.messages,"1111")
    }
  }

  sendMessage(message: string) {
    if (this.currentUser && this.receiverId && message.trim()) {
      this.chatService.addMessage(this.currentUser, this.receiverId, message);
      this.loadMessages();
    }
  }

  clearChat() {
    if (this.currentUser && this.receiverId) {
      this.chatService.clearMessages(this.currentUser, this.receiverId);
      this.messages = [];
    }
  }
  ngrx() {
 of(10,20,30).pipe(map((v)=>v+v)).subscribe((val)=>console.log(`updated value is ${val}`))
  }
  
}
