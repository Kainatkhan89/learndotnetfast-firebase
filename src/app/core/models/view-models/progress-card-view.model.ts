import {ITutorial} from "../learning-path/tutorial.model";

export interface IProgressCardViewModel {
  progressPercentage: number;
  firstTutorialToStartAt: ITutorial;
  lastCompletedTutorial: ITutorial | null;
  nextTutorialToResumeId: number | null;
}
