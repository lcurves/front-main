import { Vue } from 'vue-property-decorator';
import { Logger } from '../../util/log';
export declare class AboutComponent extends Vue {
    protected logger: Logger;
    repo: string;
    mounted(): void;
}
