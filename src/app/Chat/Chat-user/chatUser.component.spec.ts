import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ChatUserComponent } from "./chatUser.component"
import { UserService } from "../userService/user.service";


class MockUserService {
    users = [{ userId: '1', username: 'User1' }];
  
    getUsers() {
      return this.users;
    }
  
    addUser(username: string) {
      this.users.push({ userId: String(this.users.length + 1), username });
    }
  
    setCurrentUser(userId: string) {}
  }
describe("ChatUSerComponent", () => {
    let component: ChatUserComponent;
    let fixture: ComponentFixture<ChatUserComponent>;

    beforeEach(async () => {
      let  mockUserService = new MockUserService();
        await TestBed.configureTestingModule({
            declarations: [ChatUserComponent],
            providers: [{ provide: UserService, useValue: mockUserService }]
        }).compileComponents();
    })
    beforeEach(() => {
        fixture = TestBed.createComponent(ChatUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it("should be create a Component", () => {
        expect(component).toBeTruthy();
    })

    // it("should initilize the component and users",()=>{
    //     // expect(component.users.length).toBe(0);
    //     // expect(component.users[0].username).toBe("User1")
    // })

    it('should add a new user', () => {
        component.username = 'User2';
        component.addUser();
        expect(component.users.length).toBe(2);
        expect(component.users[1].username).toBe('User2');
    });

    it('should not add a user if the username is empty', () => {
        component.username = '';
        component.addUser();
        expect(component.users.length).toBe(1);
    });
    it('should emit the selected receiver ID', () => {
        spyOn(component.selectReceiver, 'emit');
        component.selectChatPartner('1');
        expect(component.selectReceiver.emit).toHaveBeenCalledWith('1');
    });

    it('should select a user', () => {
        component.selectUser('1');
        
      });
});