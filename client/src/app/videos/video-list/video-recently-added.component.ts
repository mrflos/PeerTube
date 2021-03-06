import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { immutableAssign } from '@app/shared/misc/utils'
import { NotificationsService } from 'angular2-notifications'
import { AuthService } from '../../core/auth'
import { AbstractVideoList } from '../../shared/video/abstract-video-list'
import { SortField } from '../../shared/video/sort-field.type'
import { VideoService } from '../../shared/video/video.service'

@Component({
  selector: 'my-videos-recently-added',
  styleUrls: [ '../../shared/video/abstract-video-list.scss' ],
  templateUrl: '../../shared/video/abstract-video-list.html'
})
export class VideoRecentlyAddedComponent extends AbstractVideoList implements OnInit {
  titlePage = 'Recently added'
  currentRoute = '/videos/recently-added'
  sort: SortField = '-createdAt'

  constructor (protected router: Router,
               protected route: ActivatedRoute,
               protected notificationsService: NotificationsService,
               protected authService: AuthService,
               private videoService: VideoService) {
    super()
  }

  ngOnInit () {
    super.ngOnInit()
  }

  getVideosObservable (page: number) {
    const newPagination = immutableAssign(this.pagination, { currentPage: page })

    return this.videoService.getVideos(newPagination, this.sort)
  }
}
