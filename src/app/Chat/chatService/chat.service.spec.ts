import { TestBed } from "@angular/core/testing";
import { ChatService } from "./chat.service"


describe("ChatService",()=>{
    let service:ChatService;

    beforeEach(()=>{
        TestBed.configureTestingModule;
        service=TestBed.inject(ChatService);
        localStorage.clear();
    })

    it("Should be create",()=>{
        expect(service).toBeTruthy()
    })

    it("should return an Empty array No if messages found",()=>{
        let messages=service.getMessages("user1",'user2');
        expect(messages).toEqual([]);
    })
    it("Should be expect data if user messages found",()=>{
        service.addMessage('user1',"user2","hello ,How are you ?");
        let messages=service.getMessages("user1","user2");
        expect(messages.length).toBe(1);

    })

    it("should be called the clear messages",()=>{

        service.addMessage("user1","user2","hey Hlo");
        service.clearMessages("user1","user2");
        let messages=service.getMessages("user1","user2");
        expect(messages.length).toBe(0)

    })
})