import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode.model';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'pd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private episodeService: EpisodeService) {}
  latestEpisodes: Episode[];
  allEpisodes: Episode[];

  ngOnInit(): void {
    this.episodeService.getRecentEpisodes().subscribe((episodes) => {
      this.latestEpisodes = episodes.slice(0, 2);
      this.allEpisodes = episodes.slice(2);
    });
  }
}