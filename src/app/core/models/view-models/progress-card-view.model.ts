import {ITutorial} from "../learning-path/tutorial.model";

export interface IProgressCardView {
  progressPercentage: number | undefined;
  firstTutorialToStartAt: ITutorial | undefined;
  nextTutorialToResumeId: number | undefined;
  lastCompletedTutorial: ITutorial | undefined;
}
