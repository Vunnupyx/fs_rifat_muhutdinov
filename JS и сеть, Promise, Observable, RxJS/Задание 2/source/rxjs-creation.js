import {fromEvent, merge, Observable, range} from 'rxjs';
import {filter, scan} from 'rxjs/operators';

const line = document.querySelector('.line')

export function sample1() {
    const arr$ = range(1, 100)
        .pipe(
            filter(v => isPrime(v)),
            scan((acc, v) => acc.concat(v), [])
        )
        .subscribe(res => {
            line.textContent = res.join(' ')
        });
    arr$.unsubscribe();
}

function isPrime(num) {
    if (num <= 1)
        return false;
    else if (num === 2)
        return true;
    else {
        for (let i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return true;
    }
}

export function sample2() {
    const stream$ = new Observable(observer => {
        observer.next(5);
        observer.next(4);
        observer.next(3);
        observer.next(2);
        observer.next(1);
        observer.error("some error");
    });

    const subscription = stream$.subscribe({
        next: v => alert(v),
        error: e => alert(e),
        complete: () => alert("complete")
    });

    subscription.unsubscribe();
}

export function sample3() {
    let firstBtn = document.querySelector(".btn-1");
    let secondBtn = document.querySelector(".btn-2");
    let thirdBtn = document.querySelector(".btn-3");
    const streamF$ = fromEvent(firstBtn, "click");
    const streamS$ = fromEvent(secondBtn, "click");
    const streamT$ = fromEvent(thirdBtn, "click");


    merge(streamF$, streamS$, streamT$)
        .subscribe({
            next: () => document.body.style.background = getRandomColor()
        });
}

function getRandomColor() {
    let letters = "0123456789ABCDEF".split('');
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}