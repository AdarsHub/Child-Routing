import { OnInit ,Component, Input} from "@angular/core";
@Component({
    selector:'app-chat-Message',
    templateUrl:'./chatMessage.component.html',
    styleUrls:['./chatMessage.component.scss']
})

export class ChatMessageComponent implements OnInit{
    @Input() message: string = '';

    ngOnInit(){
    
    }
}