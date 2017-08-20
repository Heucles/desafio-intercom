 const {expect} = require('chai')
 const {flatIt} = require('../index')

 describe('Testing the module: /array-filter/index', () => {
   describe('The method: flatIt', () => {
     describe('SUCCESS CASES: ', () => {
       it('Should accept valid arrays as input', () => {
         expect(() => { flatIt([1, 2, [5]]) })
           .to
           .not
           .Throw()
       })

       it('Should accept strings with valid arrays as input', () => {
         expect(() => { flatIt('[1,2,[5]]') })
        .to
        .not
        .Throw()
       })

       it('Should flatten a valid array regardless of its nesting levels', () => {
         expect(flatIt('[1,2,[3,4,[[[[[[[5]]]]]]]]]')).to.be.eql([1, 2, 3, 4, 5])
       })

       it('Should flatten a valid array regardless of its nesting levels', () => {
         expect(flatIt([1, 2, [3, 4, [[[[[[[5]]]]]]]]])).to.be.eql([1, 2, 3, 4, 5])
       })

       describe('ERROR CASES: ', () => {
         it('Should only accept valid string arrays as input', () => {
           expect(() => { flatIt('[1,2,5]]') })
        .to
        .Throw('The provided array to be flattened is invalid, please review it and try it again: Unexpected token ] in JSON at position 7')
         })
       })
     })
   })
 })
