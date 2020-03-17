import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromProfessors from './professors.reducer';
import * as fromStudents from './students.reducer';
import * as fromSubjects from './subjects.reducer';


export interface State {

  [fromProfessors.professorsFeatureKey]: fromProfessors.ProfessorsState;
  [fromStudents.studentsFeatureKey]: fromStudents.StudentsState;
  [fromSubjects.subjectsFeatureKey]: fromSubjects.SubjectsState;
}

export const reducers: ActionReducerMap<State> = {

  [fromProfessors.professorsFeatureKey]: fromProfessors.professorsReducer,
  [fromStudents.studentsFeatureKey]: fromStudents.studentsReducer,
  [fromSubjects.subjectsFeatureKey]: fromSubjects.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];