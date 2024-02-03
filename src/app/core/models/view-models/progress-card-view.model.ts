import {ITutorial} from "../learning-path/tutorial.model";

export interface IProgressCardViewModel {
  progressPercentage: number;
  lastCompletedTutorial: ITutorial | undefined;
  tutorialToResumeFrom: ITutorial | undefined;
}
