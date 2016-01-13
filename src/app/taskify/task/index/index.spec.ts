/// <reference path="./index.ts" />

import {TaskIndex} from './index';

export function main() {
    describe('Task index component', () => {

        let index = new TaskIndex(null);
        it('should be true', () => {
            expect(true).toBe(true);
        });
    });
}
