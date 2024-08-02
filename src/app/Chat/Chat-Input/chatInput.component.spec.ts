import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ChatInputComponent } from './chatInput.component';

describe('ChatInputComponent', () => {
  let component: ChatInputComponent;
  let fixture: ComponentFixture<ChatInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatInputComponent],
      imports: [FormsModule], // Needed if using ngModel or similar
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit message and clear input when onSendMessage is called', () => {
    spyOn(component.sendMessage, 'emit');
    
    component.message = 'Hello World';
    component.onSendMessage();
    
    expect(component.sendMessage.emit).toHaveBeenCalledWith('Hello World');
    expect(component.message).toBe('');
  });

  it('should not emit message if input is empty', () => {
    spyOn(component.sendMessage, 'emit');
    
    component.message = '    '; // only whitespace
    component.onSendMessage();
    
    expect(component.sendMessage.emit).not.toHaveBeenCalled();
  });

  it('should bind the input element to the message property', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    
    inputElement.value = 'Test Message';
    inputElement.dispatchEvent(new Event('input'));
    
    expect(component.message).toBe('Test Message');
  });
});