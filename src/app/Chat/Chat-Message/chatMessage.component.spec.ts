// import { ChatComponent } from "../chat.component"
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ChatMessageComponent } from "./chatMessage.component"




describe("ChatMessageComponent",()=>{
    let component:ChatMessageComponent;
    let fixture:ComponentFixture<ChatMessageComponent>;


    beforeEach(async()=>{
await TestBed.configureTestingModule({
    declarations:[ChatMessageComponent],

}).compileComponents();
    })
    beforeEach(()=>{
        fixture=TestBed.createComponent(ChatMessageComponent);
        component=fixture.componentInstance;
        fixture.detectChanges();
    })

    it("Should Be Create",()=>{
        expect(component).toBeTruthy;
    })

    it ("Should have an empty Message By Default",()=>{
        expect(component.message).toBe("")
    })

})