import { OnInit ,Component} from "@angular/core";
import { ChatService } from "./chatService/chat.service";
import { UserService } from "./userService/user.service";
@Component({
    selector:'app-chat',
    templateUrl:'./chat.component.html',
    styleUrls:['./chat.component.scss']
})

export class ChatComponent implements OnInit{

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
    window.location.reload(); // Refresh to simulate switching users
  }

  messages: string[] = [];
  currentUser: string | null = null;

  constructor(private chatService: ChatService, private userService: UserService) {}

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
}
