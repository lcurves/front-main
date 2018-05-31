import {Component, Vue} from 'vue-property-decorator';
import {MainTitle} from '../../../common/components/main-title';
import {Action, Getter, State} from 'vuex-class';
import {namespaceAbsolute} from '../../../core/store/teacher/lesson-plans/create-plan';
import {ILessonPlan} from '../../../core/store/teacher/lesson-plans/types';
import {ACTIONS} from '../../../core/store/teacher/lesson-plans/create-plan/actions';
import {GETTERS} from '../../../core/store/teacher/lesson-plans/create-plan/getters';


const storeReference = {namespace: namespaceAbsolute};

@Component({
    template: require('./create-lesson-plan.html'),
    components: {
        MainTitle
    }
})
export class CreateLessonPlanComponent extends Vue {

    @Action(ACTIONS.initiateNewPlan, storeReference) initiateNewPlan: Function;
    @Action(ACTIONS.nameChanged, storeReference) nameChanged: Function;
    @Getter(GETTERS.plan, storeReference) plan: ILessonPlan;

    createPlan(e) {
        console.log(e);

        e.preventDefault();
    }

    changeName() {
        this.nameChanged(this.plan.name);
    }

    mounted() {
        if (!this.plan) {
            this.initiateNewPlan();
        }
        console.log('create plan');
    }

}
