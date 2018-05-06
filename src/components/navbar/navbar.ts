import {Collapse, Dropdown} from 'uiv';
import {Component, Vue} from 'vue-property-decorator';
import {Link} from './link';
import {Logger} from '../../util/log';
import AuthService from '../../services/auth-service';
import {Action, Getter, State} from 'vuex-class';
import {namespace} from '../../store/user';
import {ACTIONS} from '../../store/user/actions';
import {GETTERS} from '../../store/user/getters';
import {User} from '../../store/user/types';

@Component({
    template: require('./navbar.html'),
    components: {
        collapse: Collapse,
    }
})
export class NavbarComponent extends Vue {

    @Action(ACTIONS.enrichAuthentication, {namespace}) enrichAuthentication: any;
    @Getter(GETTERS.fullName, {namespace}) fullName: string;
    @State(state => state.user, {namespace}) user: User;

    protected logger: Logger;

    inverted: boolean = true; // default value

    showNavbar = false;

    links: Link[] = [
        new Link('Home', '/'),
        new Link('Teacher', '/teacher'),
        new Link('student', '/student')
    ];

    login() {
        AuthService.login();
    }

    mounted() {
        this.enrichAuthentication();
    }
}
