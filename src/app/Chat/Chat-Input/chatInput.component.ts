import { OnInit ,Component, Output, EventEmitter} from "@angular/core";
@Component({
    selector:'app-chat-Input',
    templateUrl:'./chatInput.component.html',
    styleUrls:['./chatInput.component.scss']
})

export class ChatInputComponent {
    @Output() sendMessage = new EventEmitter<string>();
    message: string = '';
  
    onSendMessage() {
      if (this.message.trim()) {
        this.sendMessage.emit(this.message);
        this.message = '';
      }
    }
  }