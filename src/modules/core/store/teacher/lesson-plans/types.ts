

export interface ILessonFootnote {
    id: string;
    note: string;
}

export interface ILessonReference {
    id: string;
    name: string;
    url: URL;
}

export interface ILessonSlide {
    id: string;
    name: string;
    content: string;
    footnote: Array<ILessonFootnote>;
    references: Array<ILessonReference>;
}

export interface ILessonPlan {
    name: string;
    slides: Array<ILessonSlide>;
}

export class LessonPlan implements ILessonPlan {
    name = '';
    slides = [];
}

export interface LessonPlansState {
}
