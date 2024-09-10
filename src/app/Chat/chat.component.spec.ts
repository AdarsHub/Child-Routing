import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserService } from './userService/user.service';
import { ChatComponent } from './chat.component';
// import { User } from './user.model'; // Adjust the import path to where User is defined
interface User {
    userId: string;
    username: string;
  }
describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);

    // Define the mock data matching the User interface
    const mockUsers: User[] = [
      { userId: '1', username: 'John Doe' }
    ];

    // Mock the return value of getUsers
    userServiceSpy.getUsers.and.returnValue(of(mockUsers));

    TestBed.configureTestingModule({
      declarations: [ChatComponent],
      imports:[],
      providers: [
        { provide: UserService, useValue: userServiceSpy }
      ]
    });

    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;

    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // trigger change detection
  });

  it('should get users from UserService', () => {
    component.ngOnInit(); // or wherever getUsers is called

    expect(userService.getUsers).toHaveBeenCalled();
    expect(component.users).toEqual([{ userId: '1', username: 'John Doe' }]);
  });
});
