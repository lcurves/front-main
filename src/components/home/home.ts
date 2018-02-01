import { Component, Vue } from 'vue-property-decorator';
import AuthService from '../../services/auth-service';

import './home.scss';

@Component({
    template: require('./home.html')
})
export class HomeComponent extends Vue {

    package: string = 'vue-webpack-typescript';
    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';
    mode: string = process.env.ENV;

    mounted() {
        console.log(AuthService.isAuthenticated());
    }

}
