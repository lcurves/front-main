import {Component, Vue} from 'vue-property-decorator';
import {MainTitle} from '../../../common/components/main-title';
import {Action, State} from 'vuex-class';
import {namespaceAbsolute} from '../../../core/store/teacher/lesson-plans/create-plan';
import {ILessonPlan} from '../../../core/store/teacher/lesson-plans/types';
import {ACTIONS} from '../../../core/store/teacher/lesson-plans/create-plan/actions';


const storeReference = {namespace: namespaceAbsolute};

@Component({
    template: require('./create-lesson-plan.html'),
    components: {
        MainTitle
    }
})
export class CreateLessonPlanComponent extends Vue {

    @Action(ACTIONS.createNewPlan, storeReference) createNewPlan: Function;
    @State(state => state.plan, storeReference) plan: ILessonPlan;

    createPlan(e) {
        console.log(e);

        e.preventDefault();
    }

    mounted() {
        if (!this.plan) {
            this.createNewPlan();
        }
        console.log('create plan');
    }

}
