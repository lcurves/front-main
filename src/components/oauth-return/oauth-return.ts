import {Component, Vue} from 'vue-property-decorator';
import {Action} from 'vuex-class';
import {ACTIONS} from '../../store/user/actions';
import {namespace} from '../../store/user';

@Component({
    template: '<p></p>'
})
export class OAuthReturnComponent extends Vue {
    @Action(ACTIONS.userLoggedIn, {namespace}) userLoggedIn: any;

    mounted() {
        this.userLoggedIn().then(() => {
            this.$router.push('/home');
        });
    }
}
