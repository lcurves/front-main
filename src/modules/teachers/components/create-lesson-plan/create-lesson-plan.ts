import {Component, Vue} from 'vue-property-decorator';
import {MainTitle} from '../../../common/components/main-title';

@Component({
    template: require('./create-lesson-plan.html'),
    components: {
        MainTitle
    }
})
export class CreateLessonPlanComponent extends Vue {


    formData = {
        name: ''
    };

    createPlan(e) {
        console.log(e);

        e.preventDefault();
    }

    mounted() {
        console.log('create plan');
    }

}
