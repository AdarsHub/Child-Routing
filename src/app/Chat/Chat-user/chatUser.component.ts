import { OnInit ,Component, EventEmitter, Output} from "@angular/core";
import { UserService } from "../userService/user.service";
@Component({
    selector:'app-chat-User',
    templateUrl:'./chatUser.component.html',
    styleUrls:['./chatUser.component.scss']
})

export class ChatUserComponent implements OnInit{
  username: string = '';
  users: { userId: string, username: string }[] = [];
  @Output() selectReceiver = new EventEmitter<string>(); // Emit selected receiver ID

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  addUser() {
    if (this.username.trim()) {
      this.userService.addUser(this.username);
      this.users = this.userService.getUsers();
      this.username = '';
    }
  }

  selectUser(userId: string) {
    this.userService.setCurrentUser(userId);
  }

  selectChatPartner(receiverId: string) {
    this.selectReceiver.emit(receiverId); // Emit receiver ID to parent component
  }
}