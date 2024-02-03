import {ITutorial} from "../learning-path/tutorial.model";

export interface IProgressCardViewModel {
  progressPercentage: number | undefined;
  firstTutorialToStartAt: ITutorial | undefined;
  nextTutorialToResumeId: number | undefined;
  lastCompletedTutorial: ITutorial | undefined;
}
