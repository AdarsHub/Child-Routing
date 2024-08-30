
import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store';
import { CounterValue, data } from '../Store/selector';
import { Observable } from 'rxjs';
import { decrement, double, getData, increment, reset } from '../Store/actions';
import { mockPictures } from 'src/app/mock-Data';


@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss']

})
export class StoreComponent implements OnInit {
    test: "test";
    value: Observable<any>;
    data: Observable<unknown>;

    pics = mockPictures;

    constructor(private store: Store) {
        this.value = this.store.pipe(select(CounterValue));
        this.data = this.store.pipe(select(data));
    }
    ngOnInit() {
    }
    fun(v) {
        let val: any;
        v.subscribe((res: any) => { val = res })
        return val;

    }
    async inc()  {
        this.store.dispatch(getData());
        this.store.dispatch(increment());
        let data:any[]=[];

       await this.data.subscribe((res: any) => { data = res?.arr?.posts });

        setTimeout(() => {
            if(data){
                data = JSON.parse(JSON.stringify(data));
                data.forEach((val: any, i: any) => { val.picture = this.pics[i] });
                console.log(data, "Picture has Added...")
            }
        }, 1000);

    }
    dec() {
        this.store.dispatch(decrement());
    }
    rst() {
        this.store.dispatch(reset());
    }
    dbl() {
        this.store.dispatch(double());
    }
}