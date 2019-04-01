import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { SearchUsers } from '../../store/friends.actions';
import { fromEvent } from 'rxjs';
import { debounceTime, map, filter, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sn-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  @ViewChild('searchInput') input: ElementRef;

  searchIcon = faSearch;

  constructor(private store: Store) {}

  ngOnInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        map((event: any) => event.target.value),
        filter(text => text.length > 3),
        distinctUntilChanged(),
        switchMap(s => this.store.dispatch(new SearchUsers(s)))
      )
      .subscribe();
  }

  search(event) {
    this.store.dispatch(new SearchUsers(event.target.value));
  }
}
