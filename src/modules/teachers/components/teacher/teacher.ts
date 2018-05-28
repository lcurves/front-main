import {Component, Vue} from 'vue-property-decorator';
import {teachers} from '../../../core/router/modules';
import {lessonPlans} from '../../router/modules';
import {MainTitle} from '../../../common/components/main-title';

@Component({
    template: require('./teacher.html'),
    components: {
        MainTitle
    }
})
export class TeacherComponent extends Vue {
    lessonPlansPath = teachers + lessonPlans;
}
