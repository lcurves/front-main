import {Component, Vue} from 'vue-property-decorator';
import {GETTERS} from '../../store/user/getters';
import {namespace} from '../../store/user';
import {Getter} from 'vuex-class';


@Component({
    template: require('./authenticated.html'),

})
export class AuthenticatedComponent extends Vue {

    @Getter(GETTERS.isAuthenticated, {namespace}) isAuthenticated: string;

    beforeRouteEnter(from, to, next) {
        next((vm: AuthenticatedComponent) => {
            if (!vm.isAuthenticated) {
                next('not authenticated');
            }
        });
    }
}
