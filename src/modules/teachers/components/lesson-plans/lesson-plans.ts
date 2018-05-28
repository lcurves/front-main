import {Component, Vue} from 'vue-property-decorator';
import {MainTitle} from '../../../common/components/main-title';
import {teachers} from '../../../core/router/modules';
import {createLessonPlan} from '../../router/modules';

@Component({
    template: require('./lesson-plans.html'),
    components: {
        MainTitle
    }
})
export class LessonPlansComponent extends Vue {

    createLessonPlanPath = teachers + createLessonPlan;

    mounted() {
        console.log('lessons');
    }

}
