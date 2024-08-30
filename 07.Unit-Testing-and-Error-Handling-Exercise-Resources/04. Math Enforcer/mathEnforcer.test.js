const { expect, assert } = require('chai');
const { mathEnforcer } = require('./mathEnforcer.js');
describe('Math Enforcer',()=>{
    describe('Add 5',()=>{
        it('not a number',()=>{
            expect(mathEnforcer.addFive(undefined)).to.be.undefined
            expect(mathEnforcer.addFive("5")).to.be.undefined
            expect(mathEnforcer.addFive([])).to.be.undefined
            expect(mathEnforcer.addFive({})).to.be.undefined
        })
        it('valid number',()=>{
            expect(mathEnforcer.addFive(0)).to.equal(5)
            expect(mathEnforcer.addFive(5)).to.equal(10)
            expect(mathEnforcer.addFive(-10)).to.equal(-5)
            expect(mathEnforcer.addFive(1.25)).to.equal(6.25)
            
        })
    })
    describe('subtract 10',()=>{
        it('incorrect number',()=>{
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined
            expect(mathEnforcer.subtractTen("10")).to.be.undefined
            expect(mathEnforcer.subtractTen([])).to.be.undefined
            expect(mathEnforcer.subtractTen({})).to.be.undefined
        })
        it('valid number',()=>{
            expect(mathEnforcer.subtractTen(5)).to.equal(-5)
            expect(mathEnforcer.subtractTen(10)).to.equal(0)
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
            expect(mathEnforcer.subtractTen(10.25)).to.equal(0.25)
            expect(mathEnforcer.subtractTen(5.05)).to.closeTo(-4.95, 0.01)
        })
    })
    describe('sum',()=>{
        it('undefined numbers',()=>{
            expect(mathEnforcer.sum(undefined,undefined)).to.be.undefined
            expect(mathEnforcer.sum("10",10)).to.be.undefined
            expect(mathEnforcer.sum(10,'10')).to.be.undefined
            expect(mathEnforcer.sum("10",'10')).to.be.undefined
            expect(mathEnforcer.sum(10)).to.be.undefined
            expect(mathEnforcer.sum('',10)).to.be.undefined
            expect(mathEnforcer.sum([],[])).to.be.undefined
            expect(mathEnforcer.sum({},{})).to.be.undefined
        })
        it('valid numbers',()=>{
            expect(mathEnforcer.sum(1,2)).to.be.equal(3)
            expect(mathEnforcer.sum(5,2)).to.be.equal(7)
            expect(mathEnforcer.sum(5,-2)).to.be.equal(3)
            expect(mathEnforcer.sum(5,-6)).to.be.equal(-1)
            expect(mathEnforcer.sum(1.20,2)).to.be.equal(3.20)
            expect(mathEnforcer.sum(5.05, 5.05)).to.equal(10.10, 0.01);
            expect(mathEnforcer.sum(5.15, -2.05)).to.closeTo(3.1, 0.01);
        })
    })
})