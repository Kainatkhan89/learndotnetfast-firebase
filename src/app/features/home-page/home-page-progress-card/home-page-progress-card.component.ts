import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NoProgressWelcomeMessageComponent} from "../no-progress-welcome-message/no-progress-welcome-message.component";
import {NgIf} from "@angular/common";
import {
  ResumeProgressWelcomeMessageComponent
} from "../resume-progress-welcome-message/resume-progress-welcome-message.component";
import {ITutorial} from "../../../core/models/learning-path/tutorial.model";
import {PercentageFormatPipe} from "../../../core/pipes/percentage-format/percentage-format.pipe";
import {Subscription} from "rxjs";
import {LearningProgressService} from "../../../core/services/progress/learning-progress.service";
import {TutorialService} from "../../../core/services/tutorial/tutorial.service";

@Component({
  selector: 'lsbf-home-page-progress-card',
  standalone: true,
  imports: [
    RouterLink,
    NoProgressWelcomeMessageComponent,
    NgIf,
    ResumeProgressWelcomeMessageComponent,
    PercentageFormatPipe,
  ],
  templateUrl: './home-page-progress-card.component.html',
  styleUrl: './home-page-progress-card.component.css'
})
export class HomePageProgressCardComponent implements OnInit, OnDestroy {
  readonly RADIUS: number = 120;
  readonly CIRCUMFERENCE: number = 2 * 22 / 7 * this.RADIUS;

  private _learningProgressService: LearningProgressService = inject(LearningProgressService);
  private _tutorialService: TutorialService = inject(TutorialService);

  private _progressPercentageSubscription: Subscription | undefined;

  progressPercentage: number | undefined;
  lastCompletedTutorial: ITutorial | undefined | null;
  firstTutorial: ITutorial | undefined;

  ngOnInit(): void {
    // TODO: Setup observable that returns the progress card view model from the progress service
    this._subscribeToPercentageProgress$();
  }

  ngOnDestroy(): void {
    this._progressPercentageSubscription?.unsubscribe();
  }

  get progressStrokeOffset(): number {
    return this.progressPercentage ? this.CIRCUMFERENCE - this.progressPercentage / 100 * this.CIRCUMFERENCE : this.CIRCUMFERENCE;
  }

  private _subscribeToPercentageProgress$(): void {
    this._progressPercentageSubscription = this._learningProgressService.getPercentageProgress$().subscribe(value => {
      this.progressPercentage = value;
    });
  }
}
