import { OnInit ,Component} from "@angular/core";
import { UserService } from "../userService/user.service";
@Component({
    selector:'app-chat-User',
    templateUrl:'./chatUser.component.html',
    styleUrls:['./chatUser.component.scss']
})

export class ChatUserComponent implements OnInit{
    username: string = '';
  users: { userId: string, username: string }[] = [];

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
}