import { NgModule } from "@angular/core";
import { ChatComponent } from "./chat.component";
import { ChatRoutingModule } from "./chat.routing";
import { ChatInputComponent } from "./Chat-Input/chatInput.component";
import { ChatMessageComponent } from "./Chat-Message/chatMessage.component";
import { ChatUserComponent } from "./Chat-user/chatUser.component";
import { ChatService } from "./chatService/chat.service";
import { UserService } from "./userService/user.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
// import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [ChatComponent, ChatInputComponent, ChatMessageComponent, ChatUserComponent],
    imports: [ChatRoutingModule, FormsModule, CommonModule],
    providers: [ChatService, UserService]
})
export class ChatModule { }