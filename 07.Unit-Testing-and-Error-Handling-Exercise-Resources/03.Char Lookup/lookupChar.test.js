const { expect, assert } = require('chai');
const { lookupChar } = require('./lookupChar.js');
describe('Char Lookup',()=>{
    it('return undefined',()=>{
        expect(lookupChar()).to.be.undefined;

        expect(lookupChar('5', null)).to.be.undefined;
        expect(lookupChar('5', undefined)).to.be.undefined;
        expect(lookupChar('5', false)).to.be.undefined;
        expect(lookupChar('5', NaN)).to.be.undefined;
        expect(lookupChar('5', [])).to.be.undefined;
        expect(lookupChar('5', {})).to.be.undefined;
        expect(lookupChar('5', '10')).to.be.undefined;

        expect(lookupChar(null, 5)).to.be.undefined;
        expect(lookupChar(undefined, 5)).to.be.undefined;
        expect(lookupChar(false, 5)).to.be.undefined;
        expect(lookupChar(NaN, 5)).to.be.undefined;
        expect(lookupChar([], 5)).to.be.undefined;
        expect(lookupChar({}, 5)).to.be.undefined;

        expect(lookupChar(null, null)).to.be.undefined;
        expect(lookupChar(undefined, undefined)).to.be.undefined;
        expect(lookupChar(false, false)).to.be.undefined;
        expect(lookupChar(NaN, NaN)).to.be.undefined;
        expect(lookupChar([], [])).to.be.undefined;
        expect(lookupChar({}, {})).to.be.undefined;
    });
    it('incorect index',()=>{
        expect(lookupChar("str",3)).to.equal("Incorrect index")
        expect(lookupChar("str",-1)).to.equal("Incorrect index")
        expect(lookupChar("str",6)).to.equal("Incorrect index")
    });
    it('char at the specified index',()=>{
        expect(lookupChar("a",0)).to.equal("a")
        expect(lookupChar("str",1)).to.equal("t")
        expect(lookupChar('12345',3)).to.equal("4")
        expect(lookupChar('UwUwUwU', 5)).to.equal('w');
    });

})