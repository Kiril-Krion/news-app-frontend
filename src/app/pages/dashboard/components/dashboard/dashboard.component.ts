import { DestroySubscription } from './../../../../shared/helpers/destroy-subscription';
import { takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends DestroySubscription implements OnInit {
  userData: any;

  constructor(private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this.userService.getUser().pipe(takeUntil(this.destroyStream$)).subscribe((data) => {
      localStorage.setItem('user', JSON.stringify(data));
    });
  }
}
