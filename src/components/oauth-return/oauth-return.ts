import {Component, Vue} from 'vue-property-decorator';
import AuthService, {IAuthService} from '../../services/auth-service';

@Component({})
export class OAuthReturnComponent extends Vue {
    AuthService: IAuthService = AuthService;

    mounted() {
        this.AuthService.handleAuthentication();
    }
}
