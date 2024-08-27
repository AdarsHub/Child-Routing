import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UserService } from "./user.service"
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { provideMockStore } from '@ngrx/store/testing';


describe("UserService", () => {
    let service: UserService;
    let fixture: ComponentFixture<UserService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule], 
            providers: [provideMockStore({})],

        });
        service = TestBed.inject(UserService);
        localStorage.clear(); // Clear localStorage before each test
    });
    it("should be create ", () => {
        expect(service).toBeTruthy();
    })

    it('should emit the current user via currentUser$', (done: DoneFn) => {
        service.setCurrentUser('user123');
        service.currentUser$.subscribe((userId) => {
          expect(userId).toBe('user123');
          done();
        });
      });
    it("should be add a user when id is unique", () => {
        service.addUser("test");
        let users = service.getUsers();
        expect(users.length).toBe(1);
        expect(users[0].username).toBe('test');
    })
    it("should be add a user when id is unique", () => {
        service.addUser("test");
        service.addUser("test")
        let users = service.getUsers();
        expect(users.length).toBe(1);
        expect(users[0].username).toBe('test');
    })
})