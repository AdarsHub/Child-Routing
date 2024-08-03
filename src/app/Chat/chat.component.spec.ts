import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ChatComponent } from "./chat.component"
import { UserService } from "./userService/user.service";
import { ChatService } from "./chatService/chat.service";
import { of } from "rxjs";
import { ChatModule } from "./chat.module";
describe("ChatComponent", () => {

    let component: ChatComponent;
    let fixture: ComponentFixture<ChatComponent>;
    let mockChatService;
    let mockUserService;


    beforeEach(async () => {

        mockChatService = {
            getMessages: jasmine.createSpy('getMessages').and.returnValue([]),
            addMessage: jasmine.createSpy('addMessage'),
            clearMessages: jasmine.createSpy('clearMessages')
        };
        mockUserService = {
            currentUser$: of('user1'),
            getUsers: jasmine.createSpy('getUsers').and.returnValue([
                { userId: 'user1', username: 'user1' },
                { userId: 'user2', username: 'user2' }
            ])
        };

        await TestBed.configureTestingModule({
            declarations: [ChatComponent],
            imports:[ChatModule],
            providers: [{ provide: UserService, userValue: mockUserService },
            {
                provide: ChatService, userValue: mockChatService
            }
            ]
        }).compileComponents();
    })
    beforeEach(() => {
        fixture = TestBed.createComponent(ChatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        spyOn(component as any, 'reloadPage').and.callFake(() => {});

    // Mock localStorage behavior
    spyOn(localStorage, 'setItem').and.callFake(() => {});
    spyOn(localStorage, 'getItem').and.callFake(() => 'user1');
    })
    it("should be create", () => {
        expect(component).toBeTruthy();
    })
    it("should load users on initialaizing components", () => {
        component.ngOnInit();
        expect(component.users.length).toBe(0);
    })
    it('should load messages from ChatService', fakeAsync(() => {
        const userId = 'user1';
        const receiverId = 'user2';
        component.currentUser = userId;
        component.receiverId = receiverId;

        // Mock getMessages to return an empty array or any test data you need
        mockChatService.getMessages.and.returnValue([]);

        component.loadMessages();
        tick(); // Simulate the passage of time if necessary
    }));
    it("Should be calling the load users method", () => {
        component.loadUsers();
        expect(component.users.length).toBe(0);
    })
    it("should send a message and load the messages", () => {
        component.receiverId = "123";
        component.currentUser = "111";
        component.sendMessage("Hello");
        mockChatService.addMessage(component.receiverId, component.currentUser, "Hello");
        component.loadMessages();
    })
    it("should be called the cleare messages ", () => {
        component.receiverId = 'user1';
        component.currentUser = 'user2';
        component.clearChat();
        expect(component.messages.length).toBe(0);
    })
    it("should bee called ngrx function", () => {
        spyOn(console, "log");
        component.ngrx();
        expect(console.log).toHaveBeenCalledWith('updated value is 20');
        expect(console.log).toHaveBeenCalledWith('updated value is 40');
        expect(console.log).toHaveBeenCalledWith('updated value is 60');

    })

    it("should be called the  onReceiverSelected ", () => {
        const testId = "test123";
        component.onReceiverSelected(testId);
        expect(component.receiverId).toBe(testId);
    })
   
  it('should respond to changes in input properties', () => {
    // Spy on component methods
    spyOn(component, 'loadMessages').and.callThrough(); // Ensure actual implementation is called
    spyOn(component, 'loadUsers').and.callThrough();
    component.ngOnChanges();
  });

//   it('should call reloadPage when switchUser is called', () => {
//     // Spy on reloadPage and prevent actual reload
//     spyOn(component, 'reloadPage').and.callFake(() => {});
  
//     const userId = 'user1';
//     component.switchUser(userId);
  
//     // Verify that reloadPage was called
//     expect(component.reloadPage).toHaveBeenCalled();
//     expect(localStorage.getItem('currentUser')).toBe(userId);
//   });
it('should call reloadPage when switchUser is called', () => {
    component.switchUser('user1');
    expect(component.reloadPage).toHaveBeenCalled();
  });

  it('should call reloadPage when switchUser is called', () => {
    const userId = 'user1';
    spyOn(component, 'reloadPage');  // Mock the reloadPage method
  
    component.switchUser(userId);
  
    expect(component.reloadPage).toHaveBeenCalled();  // Verify that reloadPage was called
  });
})