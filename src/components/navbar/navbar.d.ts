import { Vue } from 'vue-property-decorator';
import { Link } from './link';
import { Logger } from '../../util/log';
export declare class NavbarComponent extends Vue {
    protected logger: Logger;
    inverted: boolean;
    showNavbar: boolean;
    object: {
        default: string;
    };
    links: Link[];
    pathChanged(): void;
    login(): void;
    mounted(): void;
}
