/*
import Component from 'vue-class-component';
import { spy, assert } from 'sinon';
import { expect } from 'chai';
import {ComponentTest, MockAuthService} from '../../util/component-test';
import {OAuthReturnComponent} from './oauth-return';

let authServiceSpy = spy();

@Component({
    template: '<div></div>'
})
class MockOAuthReturnComponent extends OAuthReturnComponent {
    constructor() {
        super();
    }
}

describe('OAuth Return component', () => {
    let directiveTest: ComponentTest;

    before(() => {
        directiveTest = new ComponentTest('<div><comp></comp></div>', { 'comp': MockOAuthReturnComponent });
    });

    it('should handle oauth return on mount', async () => {
        directiveTest.createComponent();

        await directiveTest.execute((vm) => { // ensure Vue has bootstrapped/run change detection
            debugger;
            assert.calledWith(authServiceSpy, 'handleAuthentication');
        });
    });
});
*/
