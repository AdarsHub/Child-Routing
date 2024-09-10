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
    const tableData = [{ id: 1, name: "adarsh", age: 22, gender: "male" }, { id: 1, name: "adarsh", age: 22, gender: "male" }, { id: 1, name: "adarsh", age: 22, gender: "male" }]
    const customerList: Array<any> = [
      { "id": 100, "name": "Hamish Irwin", "city": "Aylesbury", "country": "Greece", "zipcode": 22101 },
      { "id": 101, "name": "Travis Vincent", "city": "Nässjö", "country": "Mali", "zipcode": 14782 },
      { "id": 102, "name": "Drew Gay", "city": "Bonnyville", "country": "Virgin Islands, United States", "zipcode": 338208 },
      { "id": 103, "name": "Kennedy Hunt", "city": "Skegness", "country": "Sao Tome and Principe", "zipcode": 78728 },
      { "id": 104, "name": "Kyle Price", "city": "Velden am Wörther See", "country": "Greenland", "zipcode": 50960 },
      { "id": 105, "name": "Zeph Case", "city": "Emarèse", "country": "Saint Pierre and Miquelon", "zipcode": 9723 },
      { "id": 106, "name": "Tad Beasley", "city": "San Martino in Badia/St. Martin in Thurn", "country": "Indonesia", "zipcode": 32235 },
      { "id": 107, "name": "Quinn Booth", "city": "Nicolosi", "country": "Tuvalu", "zipcode": 40695 },
      { "id": 108, "name": "Wayne Sanders", "city": "Devizes", "country": "India", "zipcode": 43380 },
      { "id": 109, "name": "Malik Suarez", "city": "Stamford", "country": "Cook Islands", "zipcode": 7831 },
      { "id": 110, "name": "Jin Peck", "city": "Chile Chico", "country": "Aruba", "zipcode": 34753 },
      { "id": 111, "name": "Ross Mcpherson", "city": "Belsele", "country": "Sudan", "zipcode": 548162 },
      { "id": 112, "name": "Ahmed Good", "city": "Foligno", "country": "Togo", "zipcode": 81218 },
      { "id": 113, "name": "Stone Cote", "city": "Wałbrzych", "country": "Rwanda", "zipcode": 80222 },
      { "id": 114, "name": "Erasmus Kirkland", "city": "Naro", "country": "Central African Republic", "zipcode": 872483 },
      { "id": 115, "name": "Quinn Burns", "city": "Chillán Viejo", "country": "Argentina", "zipcode": 36179 },
      { "id": 116, "name": "Amery Olson", "city": "Biarritz", "country": "Liechtenstein", "zipcode": "98552-671" },
      { "id": 117, "name": "Duncan Rivas", "city": "Heist-op-den-Berg", "country": "Bouvet Island", "zipcode": "32838-074" },
      { "id": 118, "name": "Russell Kim", "city": "Arsoli", "country": "Djibouti", "zipcode": 621948 },
      { "id": 119, "name": "Tucker Heath", "city": "Onoz", "country": "Northern Mariana Islands", "zipcode": "S0X 9L6" },
      { "id": 120, "name": "Declan Goodwin", "city": "Minto", "country": "Cyprus", "zipcode": "A0N 2R7" },
      { "id": 121, "name": "Hammett Emerson", "city": "Preston", "country": "Angola", "zipcode": 61375 },
      { "id": 122, "name": "Anthony Hahn", "city": "Linkhout", "country": "Australia", "zipcode": 21818 },
      { "id": 123, "name": "Joshua Blevins", "city": "Alingsås", "country": "Hong Kong", "zipcode": 2203 },
      { "id": 124, "name": "Caleb Barker", "city": "Laja", "country": "Fiji", "zipcode": 61806 },
      { "id": 125, "name": "Connor Anderson", "city": "Peñalolén", "country": "France", "zipcode": 54288 }
    ]
    console.table(customerList);
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
      console.log(this.messages, "1111")
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
    of(10, 20, 30).pipe(map((v) => v + v)).subscribe((val) => console.log(`updated value is ${val}`))
  }

}
